window.onload=function () {
    var offset=-1310;
    var btncount=1310;
    var index=0;
    var timer;
    startTimer();
    var btnchange=document.getElementsByClassName("btn-item");
    btnchange[index].style.backgroundColor="#ccc";
    console.log(btnchange);
    for (var i=0;i<btnchange.length;i++){
       //监btn听击事件；
            btnchange[i].onclick=function () {
                clearInterval(timer);
                for(var j=0;j<btnchange.length;j++){
                    btnchange[j].style.backgroundColor="dimgrey";
                }
                this.style.backgroundColor="#ccc";
                offset=-1330;
                btncount=1330;
                var clickCount=this.index();
                offset-=1380*clickCount;
                btncount+=1380*clickCount;
                index=Math.floor(btncount/1310)-1;
                document.getElementsByClassName("postpic").style.marginLeft=offset;
                var resTimer=setInterval(startTimer(),1000);
            };
            function startTimer() {
                timer=setInterval(function () {
                    var ele=document.getElementsByClassName("postpic")
                    sib=siblinngs(ele);
                    offset-=1380;
                    btncount+=1380;
                    btncount+=1380;
                    index=Math.floor(btncount/1310)-1;
                    if (btncount>=9050){
                        btncount=1310;
                        index=Math.floor(btncount/1310)-1;
                        sib.style.backgroundColor="dimgrey";
                        btnchange[index].style.backgroundColor="#ccc";
                    }
                    if(offset<=-10970){
                        offset=-1310;
                        btncount=1310;
                        index=Math.floor(btncount/1310);
                        document.getElementsByClassName("postpic").style.marginLeft=offset;
                    }else {
                        sib.style.backgroundColor="dimgrey";
                        btnchange[index].style.backgroundColor="#ccc";
                        document.getElementsByClassName("postpic").style.marginLeft=offset;
                    }
                },6000);
            }



            function siblinngs(elem) {
                var nodes=[];
                var _ele=elem;
                while((elem=elem.previousSibling)){
                    if(elem.nodeType==1){
                        nodes.push(elem);
                    }
                }
                var elem=_elem;
                while((elem=elem.nextSibling)){
                    if(elem.nodeType==1){
                        nodes.push(elem);
                    }
                }
            }

    }
}