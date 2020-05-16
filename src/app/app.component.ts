import { Component } from '@angular/core';
import * as html2canvas from 'html2canvas';
import { PatternService } from './services/pattern.service';
import { DialogGalleryComponent } from './dialog-gallery/dialog-gallery.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'opilum';
  patterns:any;
  colors:any;
  pages:any=[];
  constructor(
    public patternService:PatternService,
    public dialog:MatDialog
  )
  {    
    this.getColors();    
    this.getPatterns();
  }
  //get colors
  getColors()
  {
    this.patternService.get('assets/color/color.json').subscribe(data=>{
      this.colors=data;
    })
  }
  //get patterns
  getPatterns()
  {
    this.patternService.get('assets/patterns/patterns.json').subscribe(data=>{
      this.patterns=data;
      this.getTheme(); 
    })
  }
  //parse xml data 
  getPatternData(name)
  {
    console.log(name);
    var url='assets/patterns/data/'+name+'.json';
    this.patterns.forEach(res=>{
      res.selected=false;
    });
    var idx=this.patterns.map(function(e){return e.name}).indexOf(name);
    this.patterns[idx].selected=true;
    this.patternService.get(url).subscribe(res=>{      
      this.parsePattern(res);
    })
  }
  selectedPattern:any={};
  parsePattern(data)
  {
    this.selectedPattern= data;
  }
  
  // 
  theme:any={
    type:'',
    colorScheme:{},
    container: {},
    contents: [],
    images:[],
    pattern:{},
    footer:{},
    header:{},
    masking:[]
  };
  themes:any=[];
  selectedTheme:any=1;
  getTheme()
  {
    this.patternService.get('assets/themes/_themes.json').subscribe(data=>{
      this.themes=data;
      this.getDefaultTheme();
    })
  }
  getDefaultTheme()
  {
    this.themes[this.selectedTheme].selected=true;
    this.getThemeData(this.themes[this.selectedTheme].theme);
  }
  getThemeData(url)
  {
    this.patternService.get(url).subscribe((data)=>{
      this.theme={...data};
      this.pages.push(this.theme);
      this.getPatternData(this.theme.pattern.name);
      this.changeColor(this.theme.colorScheme);
    })
  }
  selectTheme(idx)
  {
    this.selectedTheme=idx;
    this.themes.forEach(dt=>{
      dt.selected=false;
    });
    this.getDefaultTheme();
  }

  changeColor(name)
  {
    this.theme.colorScheme=name;
    var idx=this.colors.map(function(e){return e.name}).indexOf(name);
    var color=this.colors[idx].data;   
    this.colors.forEach(r=>{
      r.selected=false;
    });
    this.colors[idx].selected=true;
    var keys=Object.keys(this.theme);
    //console.log(keys);
    for(var i=0; i<keys.length;i++)
    {
      //console.log(this.theme.masking.length);
      if(keys[i] == 'footer')
      {
        var clr=this.theme.footer.backgroundColor;
        var txtClr=this.theme.footer.textColor;
        var clrval=color[clr[0]][clr[1]];
        if(this.theme.footer.showBackground)
        {
          this.theme.footer.style.backgroundColor=clrval;
        }else{
          this.theme.footer.style.backgroundColor='transparent';
        }
        this.theme.footer.style.color=color[txtClr[0]][txtClr[1]];
      }
      if(keys[i] == 'header')
      {
        var clr=this.theme.header.backgroundColor;
        var txtClr=this.theme.header.textColor;
        var clrval=color[clr[0]][clr[1]];
        if(this.theme.header.showBackground)
        {
          this.theme.header.style.backgroundColor=clrval;
        }else{
          this.theme.header.style.backgroundColor='transparent';
        }
        this.theme.header.style.color=color[txtClr[0]][txtClr[1]];
      }
      if(keys[i] == 'container')
      {
        var clr=this.theme.container.color;
        var clrval=color[clr[0]][clr[1]];
        this.theme.container.style.backgroundColor=clrval;
      }
      if(keys[i] == 'masking')
      {       
        for(var j=0; j<this.theme.masking.length;j++)
        {
          //console.log(j)
          
          var clr=this.theme.masking[j].color;
          var clrval=color[clr[0]][clr[1]];
          //console.log(clr);
         if(this.theme.masking[j].gradient)
          {
            this.theme.masking[j].style.background="linear-gradient("+this.theme.masking[j].direction+","+clrval+", transparent)";
          }else{
            this.theme.masking[j].style.backgroundColor=clrval;
          }
          
        }
      }     
      if(keys[i] == 'pattern')
      {
        var clr=this.theme.pattern.color;
        var clrval=color[clr[0]][clr[1]];
        this.theme.pattern.style.fill=clrval;
      }
      if(keys[i] == 'contents')
      {
        //show background option
        
        for(var j=0; j<this.theme.contents.length;j++)
        {
          //background
          if(this.theme.contents[j].showBackground)
          {
            var clr=this.theme.contents[j].backgroundColor;
            var clrval=color[clr[0]][clr[1]];
            this.theme.contents[j].style.backgroundColor=clrval;
          }else{
            this.theme.contents[j].style.backgroundColor='transparent';
          }
          for(var k=0; k<this.theme.contents[j].items.length; k++)
          {
            var clr=this.theme.contents[j].items[k].color;
            var clrval=color[clr[0]][clr[1]];
            this.theme.contents[j].items[k].style.color=clrval;
          }           
        }
      }
    }
  }
//footer editor
footerForm:any={};
removeFooterItem(idx)
{
  this.theme.footer.columns.splice(idx,1);
} 
addFooterItem()
{
  var dt={
    type:'text',content:'Write text here'
  };
  this.theme.footer.columns.push(dt);
}
visibilityFooter()
{
    this.theme.footer.showBackground= this.theme.footer.showBackground ? false:true;
    this.changeColor(this.theme.colorScheme);
}
 
//header editor
removeHeaderItem(idx)
{
  this.theme.header.columns.splice(idx,1);
} 
addHeaderItem()
{
  var dt={
    type:'text',content:'Write text here'
  };
  this.theme.header.columns.push(dt);
}
visibilityHeader()
{
    this.theme.header.showBackground= this.theme.header.showBackground ? false:true;
    this.changeColor(this.theme.colorScheme);
}

//insert image
uploadImage(type,data,rasio) {
  const dialogRef = this.dialog.open(DialogGalleryComponent, {
    width: '450px',
    data: { rasio: rasio}
  });
  dialogRef.afterClosed().subscribe(result => {     
    if (result) {
      if(type=='image')
      {
        data.url=result;
      }
      if(type=='header' || type == 'footer')
      {
        data.content=result;
      }
      if(type == 'add-header')
      {
        var dt={
          type:'image',
          content:result,
          style:{width:this.theme.header.imageItemWidht}
        }
        this.theme.header.columns.push(dt);
      }
      if(type=='add-footer')
      {        
        var dt={
          type:'image',
          content:result,
          style:{width:this.theme.footer.imageItemWidht}
        }
        this.theme.footer.columns.push(dt);
      }
    }
  });
}

  exportPng()
  {
    html2canvas.default(document.querySelector('#img')).then(canvas=>{
        //canvas.width=800;
        //canvas.height=800;
        canvas.toBlob(function(blob){
        // To download directly on browser default 'downloads' location
        let link = document.createElement("a");
        link.download = "image.png";
        link.href = URL.createObjectURL(blob);
        link.click();
        // To save manually somewhere in file explorer
        //window.saveAs(blob, 'image.png');
        },'image/png');
    });
  }

}
