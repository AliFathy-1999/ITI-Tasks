#include "Picture.h"
#include <iostream>
using namespace std;
Picture::Picture()
{
    circleNum=0;
    RectNum=0;
    LineNum=0;
    ptrCircle=NULL;
    ptrRect=NULL;
    ptrLine=NULL;
}

Picture::Picture(int cNum, int rNum, int lNum, Circle *ptrC, Rectangle *ptrR,Line *ptrL){
    circleNum=cNum;
    RectNum=rNum;
    LineNum=lNum;
    ptrCircle=ptrC;
    ptrRect=ptrR;
    ptrLine=ptrL;
}
void Picture::setCircles(int n,Circle *ptrC){
    circleNum=n;
    ptrCircle=ptrC;
}
void Picture::setRects(int n,Rectangle *ptrR){
    RectNum=n;
    ptrRect=ptrR;
}
void Picture::setLines(int n,Line *ptrL){
    LineNum=n;
    ptrLine=ptrL;
}
void Picture::paint(){
    for(int i=0;i<LineNum;i++){
        ptrLine[i].draw();
    }
    for(int i=0;i<RectNum;i++){
        ptrRect[i].draw();
    }
    for(int i=0;i<circleNum;i++){
        ptrCircle[i].draw();
    }
}
