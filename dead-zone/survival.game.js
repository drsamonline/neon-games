(()=>{var Lu=0,Zl=1,Iu=2;var Pc=1,bl=2,Mi=3,Vi=0,Re=1,Ze=2;var Bi=0,Fi=1,pr=2,Kl=3,Jl=4,Du=5,nn=100,ku=101,Uu=102,jl=103,Ql=104,Nu=200,Ou=201,Bu=202,Fu=203,Ta=204,Aa=205,Hu=206,zu=207,Vu=208,Gu=209,Wu=210,Xu=211,qu=212,$u=213,Yu=214,Zu=0,Ku=1,Ju=2,mr=3,ju=4,Qu=5,td=6,ed=7,Ml=0,id=1,nd=2,Hi=0,sd=1,rd=2,od=3,wl=4,ad=5,ld=6;var Lc=300,Hn=301,zn=302,Ra=303,Ca=304,Yr=306,ln=1e3,ai=1001,Pa=1002,Fe=1003,th=1004;var Go=1005;var je=1006,hd=1007;var ms=1008;var zi=1009,cd=1010,ud=1011,El=1012,Ic=1013,Ni=1014,Oi=1015,hi=1016,Dc=1017,kc=1018,rn=1020,dd=1021,li=1023,fd=1024,pd=1025,on=1026,Vn=1027,md=1028,Uc=1029,gd=1030,Nc=1031,Oc=1033,Wo=33776,Xo=33777,qo=33778,$o=33779,eh=35840,ih=35841,nh=35842,sh=35843,Bc=36196,rh=37492,oh=37496,ah=37808,lh=37809,hh=37810,ch=37811,uh=37812,dh=37813,fh=37814,ph=37815,mh=37816,gh=37817,_h=37818,yh=37819,vh=37820,xh=37821,Yo=36492,bh=36494,Mh=36495,_d=36283,wh=36284,Eh=36285,Sh=36286;var gr=2300,_r=2301,Zo=2302,Th=2400,Ah=2401,Rh=2402;var Fc=3e3,an=3001,yd=3200,vd=3201,Sl=0,xd=1,Qe="",be="srgb",Si="srgb-linear",Tl="display-p3",Zr="display-p3-linear",yr="linear",oe="srgb",vr="rec709",xr="p3";var yn=7680;var Ch=519,bd=512,Md=513,wd=514,Hc=515,Ed=516,Sd=517,Td=518,Ad=519,Ph=35044;var Lh="300 es",La=1035,Ei=2e3,br=2001,Gi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let n=this._listeners[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ko=Math.PI/180,Mr=180/Math.PI;function Jn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[r&255]+ke[r>>8&255]+ke[r>>16&255]+ke[r>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Le(r,t,e){return Math.max(t,Math.min(e,r))}function Rd(r,t){return(r%t+t)%t}function Jo(r,t,e){return(1-e)*r+e*t}function Ih(r){return(r&r-1)===0&&r!==0}function Ia(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ss(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function We(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var rt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class r{constructor(t,e,i,n,s,o,a,l,h){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,h)}set(t,e,i,n,s,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=n[0],m=n[3],d=n[6],v=n[1],y=n[4],x=n[7],R=n[2],A=n[5],C=n[8];return s[0]=o*_+a*v+l*R,s[3]=o*m+a*y+l*A,s[6]=o*d+a*x+l*C,s[1]=h*_+c*v+u*R,s[4]=h*m+c*y+u*A,s[7]=h*d+c*x+u*C,s[2]=f*_+p*v+g*R,s[5]=f*m+p*y+g*A,s[8]=f*d+p*x+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*s*c+i*a*l+n*s*h-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=c*o-a*h,f=a*l-c*s,p=h*s-o*l,g=e*u+i*f+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(n*h-c*i)*_,t[2]=(a*i-n*o)*_,t[3]=f*_,t[4]=(c*e-n*l)*_,t[5]=(n*s-a*e)*_,t[6]=p*_,t[7]=(i*l-h*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),h=Math.sin(s);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-n*h,n*l,-n*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jo.makeScale(t,e)),this}rotate(t){return this.premultiply(jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jo=new Yt;function zc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function wr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Cd(){let r=wr("canvas");return r.style.display="block",r}var Dh={};function cs(r){r in Dh||(Dh[r]=!0,console.warn(r))}var kh=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uh=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[Si]:{transfer:yr,primaries:vr,toReference:r=>r,fromReference:r=>r},[be]:{transfer:oe,primaries:vr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Zr]:{transfer:yr,primaries:xr,toReference:r=>r.applyMatrix3(Uh),fromReference:r=>r.applyMatrix3(kh)},[Tl]:{transfer:oe,primaries:xr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Uh),fromReference:r=>r.applyMatrix3(kh).convertLinearToSRGB()}},Pd=new Set([Si,Zr]),te={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Pd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;let i=Fs[t].toReference,n=Fs[e].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Fs[r].primaries},getTransfer:function(r){return r===Qe?yr:Fs[r].transfer}};function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var vn,Er=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vn===void 0&&(vn=wr("canvas")),vn.width=t.width,vn.height=t.height;let i=vn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=vn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Bn(e[i]/255)*255):e[i]=Bn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ld=0,Sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Jn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(ta(n[o].image)):s.push(ta(n[o]))}else s=ta(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function ta(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Er.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Id=0,ti=class r extends Gi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=ai,n=ai,s=je,o=ms,a=li,l=zi,h=r.DEFAULT_ANISOTROPY,c=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Jn(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===an?be:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ln:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ln:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?an:Fc}set encoding(t){cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===an?be:Qe}};ti.DEFAULT_IMAGE=null;ti.DEFAULT_MAPPING=Lc;ti.DEFAULT_ANISOTROPY=1;var he=class r{constructor(t=0,e=0,i=0,n=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,h=l[0],c=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(h+1)/2,x=(p+1)/2,R=(d+1)/2,A=(c+f)/4,C=(u+_)/4,k=(g+m)/4;return y>x&&y>R?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=A/i,s=C/i):x>R?x<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(x),i=A/n,s=k/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=C/s,n=k/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-c)/v,this.w=Math.acos((h+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends Gi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let n={width:t,height:e,depth:1};i.encoding!==void 0&&(cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===an?be:Qe),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ti(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},He=class extends Da{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Tr=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ka=class extends ti{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],h=i[n+1],c=i[n+2],u=i[n+3],f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||h!==p||c!==g){let m=1-a,d=l*f+h*p+c*g+u*_,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let R=Math.sqrt(y),A=Math.atan2(R,d*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}let x=a*v;if(l=l*m+f*x,h=h*m+p*x,c=c*m+g*x,u=u*m+_*x,m===1-a){let R=1/Math.sqrt(l*l+h*h+c*c+u*u);l*=R,h*=R,c*=R,u*=R}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],h=i[n+2],c=i[n+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+c*u+l*p-h*f,t[e+1]=l*g+c*f+h*u-a*p,t[e+2]=h*g+c*p+a*f-l*u,t[e+3]=c*g-a*u-l*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(n/2),u=a(s/2),f=l(i/2),p=l(n/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*u+h*p*g,this._y=h*p*u-f*c*g,this._z=h*c*g+f*p*u,this._w=h*c*u-f*p*g;break;case"YXZ":this._x=f*c*u+h*p*g,this._y=h*p*u-f*c*g,this._z=h*c*g-f*p*u,this._w=h*c*u+f*p*g;break;case"ZXY":this._x=f*c*u-h*p*g,this._y=h*p*u+f*c*g,this._z=h*c*g+f*p*u,this._w=h*c*u-f*p*g;break;case"ZYX":this._x=f*c*u-h*p*g,this._y=h*p*u+f*c*g,this._z=h*c*g-f*p*u,this._w=h*c*u+f*p*g;break;case"YZX":this._x=f*c*u+h*p*g,this._y=h*p*u+f*c*g,this._z=h*c*g-f*p*u,this._w=h*c*u-f*p*g;break;case"XZY":this._x=f*c*u-h*p*g,this._y=h*p*u-f*c*g,this._z=h*c*g+f*p*u,this._w=h*c*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],u=e[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-h)*p,this._z=(o-n)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(c-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(s+h)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(s-h)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+c)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-n)/p,this._x=(s+h)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+n*h-s*l,this._y=n*c+o*l+s*a-i*h,this._z=s*c+o*h+i*l-n*a,this._w=o*c-i*a-n*l-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,n=this._y,s=this._z,o=this._w,a=o*t._w+i*t._x+n*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,a),u=Math.sin((1-e)*c)/h,f=Math.sin(e*c)/h;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(s),i*Math.cos(s),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class r{constructor(t=0,e=0,i=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*n-a*i),c=2*(a*e-s*n),u=2*(s*i-o*e);return this.x=e+l*h+o*u-a*c,this.y=i+l*c+a*h-s*u,this.z=n+l*u+s*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ea.copy(this).projectOnVector(t),this.sub(ea)}reflect(t){return this.sub(ea.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Le(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ea=new w,Nh=new fi,hn=class{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hs.copy(i.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),zs.subVectors(this.max,rs),xn.subVectors(t.a,rs),bn.subVectors(t.b,rs),Mn.subVectors(t.c,rs),Li.subVectors(bn,xn),Ii.subVectors(Mn,bn),Ji.subVectors(xn,Mn);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!ia(e,xn,bn,Mn,zs)||(e=[1,0,0,0,1,0,0,0,1],!ia(e,xn,bn,Mn,zs))?!1:(Vs.crossVectors(Li,Ii),e=[Vs.x,Vs.y,Vs.z],ia(e,xn,bn,Mn,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},_i=[new w,new w,new w,new w,new w,new w,new w,new w],si=new w,Hs=new hn,xn=new w,bn=new w,Mn=new w,Li=new w,Ii=new w,Ji=new w,rs=new w,zs=new w,Vs=new w,ji=new w;function ia(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){ji.fromArray(r,s);let a=n.x*Math.abs(ji.x)+n.y*Math.abs(ji.y)+n.z*Math.abs(ji.z),l=t.dot(ji),h=e.dot(ji),c=i.dot(ji);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Dd=new hn,os=new w,na=new w,Ti=class{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Dd.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);let e=os.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(os,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(na)),this.expandByPoint(os.copy(t.center).sub(na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},yi=new w,sa=new w,Gs=new w,Di=new w,ra=new w,Ws=new w,oa=new w,Gn=class{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){sa.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(sa);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=Di.dot(this.direction),l=-Di.dot(Gs),h=Di.lengthSq(),c=Math.abs(1-o*o),u,f,p,g;if(c>0)if(u=o*l-a,f=o*a-l,g=s*c,u>=0)if(f>=-g)if(f<=g){let _=1/c;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+h}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+h;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+h;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+h):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+h):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+h);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(sa).addScaledVector(Gs,f),p}intersectSphere(t,e){yi.subVectors(t.center,this.origin);let i=yi.dot(this.direction),n=yi.dot(yi)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,h=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,n=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,n=(t.min.x-f.x)*h),c>=0?(s=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(s=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,i,n,s){ra.subVectors(e,t),Ws.subVectors(i,t),oa.crossVectors(ra,Ws);let o=this.direction.dot(oa),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);let l=a*this.direction.dot(Ws.crossVectors(Di,Ws));if(l<0)return null;let h=a*this.direction.dot(ra.cross(Di));if(h<0||l+h>o)return null;let c=-a*Di.dot(oa);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class r{constructor(t,e,i,n,s,o,a,l,h,c,u,f,p,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,h,c,u,f,p,g,_,m)}set(t,e,i,n,s,o,a,l,h,c,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=n,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=h,d[6]=c,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,n=1/wn.setFromMatrixColumn(t,0).length(),s=1/wn.setFromMatrixColumn(t,1).length(),o=1/wn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*c,p=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=-l*u,e[8]=h,e[1]=p+g*h,e[5]=f-_*h,e[9]=-a*l,e[2]=_-f*h,e[6]=g+p*h,e[10]=o*l}else if(t.order==="YXZ"){let f=l*c,p=l*u,g=h*c,_=h*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*h,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*c,p=l*u,g=h*c,_=h*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*c,e[9]=_-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*c,p=o*u,g=a*c,_=a*u;e[0]=l*c,e[4]=g*h-p,e[8]=f*h+_,e[1]=l*u,e[5]=_*h+f,e[9]=p*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,p=o*h,g=a*l,_=a*h;e[0]=l*c,e[4]=-u,e[8]=h*c,e[1]=f*u+_,e[5]=o*c,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*c,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Ud)}lookAt(t,e,i){let n=this.elements;return $e.subVectors(t,e),$e.lengthSq()===0&&($e.z=1),$e.normalize(),ki.crossVectors(i,$e),ki.lengthSq()===0&&(Math.abs(i.z)===1?$e.x+=1e-4:$e.z+=1e-4,$e.normalize(),ki.crossVectors(i,$e)),ki.normalize(),Xs.crossVectors($e,ki),n[0]=ki.x,n[4]=Xs.x,n[8]=$e.x,n[1]=ki.y,n[5]=Xs.y,n[9]=$e.y,n[2]=ki.z,n[6]=Xs.z,n[10]=$e.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],y=i[7],x=i[11],R=i[15],A=n[0],C=n[4],k=n[8],M=n[12],E=n[1],U=n[5],F=n[9],K=n[13],L=n[2],B=n[6],W=n[10],J=n[14],Z=n[3],q=n[7],it=n[11],nt=n[15];return s[0]=o*A+a*E+l*L+h*Z,s[4]=o*C+a*U+l*B+h*q,s[8]=o*k+a*F+l*W+h*it,s[12]=o*M+a*K+l*J+h*nt,s[1]=c*A+u*E+f*L+p*Z,s[5]=c*C+u*U+f*B+p*q,s[9]=c*k+u*F+f*W+p*it,s[13]=c*M+u*K+f*J+p*nt,s[2]=g*A+_*E+m*L+d*Z,s[6]=g*C+_*U+m*B+d*q,s[10]=g*k+_*F+m*W+d*it,s[14]=g*M+_*K+m*J+d*nt,s[3]=v*A+y*E+x*L+R*Z,s[7]=v*C+y*U+x*B+R*q,s[11]=v*k+y*F+x*W+R*it,s[15]=v*M+y*K+x*J+R*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*u-n*h*u-s*a*f+i*h*f+n*a*p-i*l*p)+_*(+e*l*p-e*h*f+s*o*f-n*o*p+n*h*c-s*l*c)+m*(+e*h*u-e*a*p-s*o*u+i*o*p+s*a*c-i*h*c)+d*(-n*a*c-e*l*u+e*a*f+n*o*u-i*o*f+i*l*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],v=u*m*h-_*f*h+_*l*p-a*m*p-u*l*d+a*f*d,y=g*f*h-c*m*h-g*l*p+o*m*p+c*l*d-o*f*d,x=c*_*h-g*u*h+g*a*p-o*_*p-c*a*d+o*u*d,R=g*u*l-c*_*l-g*a*f+o*_*f+c*a*m-o*u*m,A=e*v+i*y+n*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=v*C,t[1]=(_*f*s-u*m*s-_*n*p+i*m*p+u*n*d-i*f*d)*C,t[2]=(a*m*s-_*l*s+_*n*h-i*m*h-a*n*d+i*l*d)*C,t[3]=(u*l*s-a*f*s-u*n*h+i*f*h+a*n*p-i*l*p)*C,t[4]=y*C,t[5]=(c*m*s-g*f*s+g*n*p-e*m*p-c*n*d+e*f*d)*C,t[6]=(g*l*s-o*m*s-g*n*h+e*m*h+o*n*d-e*l*d)*C,t[7]=(o*f*s-c*l*s+c*n*h-e*f*h-o*n*p+e*l*p)*C,t[8]=x*C,t[9]=(g*u*s-c*_*s-g*i*p+e*_*p+c*i*d-e*u*d)*C,t[10]=(o*_*s-g*a*s+g*i*h-e*_*h-o*i*d+e*a*d)*C,t[11]=(c*a*s-o*u*s-c*i*h+e*u*h+o*i*p-e*a*p)*C,t[12]=R*C,t[13]=(c*_*n-g*u*n+g*i*f-e*_*f-c*i*m+e*u*m)*C,t[14]=(g*a*n-o*_*n-g*i*l+e*_*l+o*i*m-e*a*m)*C,t[15]=(o*u*n-c*a*n+c*i*l-e*u*l-o*i*f+e*a*f)*C,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,h=s*o,c=s*a;return this.set(h*o+i,h*a-n*l,h*l+n*a,0,h*a+n*l,c*a+i,c*l-n*o,0,h*l-n*a,c*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,h=s+s,c=o+o,u=a+a,f=s*h,p=s*c,g=s*u,_=o*c,m=o*u,d=a*u,v=l*h,y=l*c,x=l*u,R=i.x,A=i.y,C=i.z;return n[0]=(1-(_+d))*R,n[1]=(p+x)*R,n[2]=(g-y)*R,n[3]=0,n[4]=(p-x)*A,n[5]=(1-(f+d))*A,n[6]=(m+v)*A,n[7]=0,n[8]=(g+y)*C,n[9]=(m-v)*C,n[10]=(1-(f+_))*C,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements,s=wn.set(n[0],n[1],n[2]).length(),o=wn.set(n[4],n[5],n[6]).length(),a=wn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],ri.copy(this);let h=1/s,c=1/o,u=1/a;return ri.elements[0]*=h,ri.elements[1]*=h,ri.elements[2]*=h,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,e.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,n,s,o,a=Ei){let l=this.elements,h=2*s/(e-t),c=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),p,g;if(a===Ei)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===br)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=Ei){let l=this.elements,h=1/(e-t),c=1/(i-n),u=1/(o-s),f=(e+t)*h,p=(i+n)*c,g,_;if(a===Ei)g=(o+s)*u,_=-2*u;else if(a===br)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},wn=new w,ri=new re,kd=new w(0,0,0),Ud=new w(1,1,1),ki=new w,Xs=new w,$e=new w,Oh=new re,Bh=new fi,Wn=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],h=n[5],c=n[9],u=n[2],f=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nd=0,Fh=new w,En=new fi,vi=new re,qs=new w,as=new w,Od=new w,Bd=new fi,Hh=new w(1,0,0),zh=new w(0,1,0),Vh=new w(0,0,1),Fd={type:"added"},Hd={type:"removed"},ce=class r extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new w,e=new Wn,i=new fi,n=new w(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new re},normalMatrix:{value:new Yt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.multiply(En),this}rotateOnWorldAxis(t,e){return En.setFromAxisAngle(t,e),this.quaternion.premultiply(En),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(Vh,t)}translateOnAxis(t,e){return Fh.copy(t).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(Vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qs.copy(t):qs.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(as,qs,this.up):vi.lookAt(qs,as,this.up),this.quaternion.setFromRotationMatrix(vi),n&&(vi.extractRotation(n.matrixWorld),En.setFromRotationMatrix(vi),this.quaternion.premultiply(En.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++){let s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++){let a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let u=l[h];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}};ce.DEFAULT_UP=new w(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new w,xi=new w,aa=new w,bi=new w,Sn=new w,Tn=new w,Gh=new w,la=new w,ha=new w,ca=new w,$s=!1,kn=class r{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),oi.subVectors(t,e),n.cross(oi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){oi.subVectors(n,e),xi.subVectors(i,e),aa.subVectors(t,e);let o=oi.dot(oi),a=oi.dot(xi),l=oi.dot(aa),h=xi.dot(xi),c=xi.dot(aa),u=o*h-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(h*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(t,e,i,n,s,o,a,l){return $s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$s=!0),this.getInterpolation(t,e,i,n,s,o,a,l)}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static isFrontFacing(t,e,i,n){return oi.subVectors(i,e),xi.subVectors(t,e),oi.cross(xi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),oi.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,s){return $s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$s=!0),r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;Sn.subVectors(n,i),Tn.subVectors(s,i),la.subVectors(t,i);let l=Sn.dot(la),h=Tn.dot(la);if(l<=0&&h<=0)return e.copy(i);ha.subVectors(t,n);let c=Sn.dot(ha),u=Tn.dot(ha);if(c>=0&&u<=c)return e.copy(n);let f=l*u-c*h;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Sn,o);ca.subVectors(t,s);let p=Sn.dot(ca),g=Tn.dot(ca);if(g>=0&&p<=g)return e.copy(s);let _=p*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(i).addScaledVector(Tn,a);let m=c*g-p*u;if(m<=0&&u-c>=0&&p-g>=0)return Gh.subVectors(s,n),a=(u-c)/(u-c+(p-g)),e.copy(n).addScaledVector(Gh,a);let d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Sn,o).addScaledVector(Tn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function ua(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=te.workingColorSpace){if(t=Rd(t,1),e=Le(e,0,1),i=Le(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ua(o,s,t+1/3),this.g=ua(o,s,t),this.b=ua(o,s,t-1/3)}return te.toWorkingColorSpace(this,n),this}setStyle(t,e=be){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let i=Vc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Qo(t.r),this.g=Qo(t.g),this.b=Qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return te.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Le(Ue.r*255,0,255))*65536+Math.round(Le(Ue.g*255,0,255))*256+Math.round(Le(Ue.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ue.copy(this),e);let i=Ue.r,n=Ue.g,s=Ue.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let u=o-a;switch(h=c<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=be){te.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,i=Ue.g,n=Ue.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(Ys);let i=Jo(Ui.h,Ys.h,e),n=Jo(Ui.s,Ys.s,e),s=Jo(Ui.l,Ys.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new ct;ct.NAMES=Vc;var zd=0,pi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Fi,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yn,this.stencilZFail=yn,this.stencilZPass=yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ta&&(i.blendSrc=this.blendSrc),this.blendDst!==Aa&&(i.blendDst=this.blendDst),this.blendEquation!==nn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ot=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var xe=new w,Zs=new rt,ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Zs.fromBufferAttribute(this,e),Zs.applyMatrix3(t),this.setXY(e,Zs.x,Zs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=We(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),i=We(i,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ph&&(t.usage=this.usage),t}};var Ar=class extends ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Rr=class extends ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jt=class extends ve{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Vd=0,Je=new re,da=new ce,An=new w,Ye=new hn,ls=new hn,Ae=new w,ae=class r extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zc(t)?Rr:Ar)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Yt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(An).negate(),this.translate(An.x,An.y,An.z),this}setFromPoints(t){let e=[];for(let i=0,n=t.length;i<n;i++){let s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(t){let i=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ye.min,ls.min),Ye.expandByPoint(Ae),Ae.addVectors(Ye.max,ls.max),Ye.expandByPoint(Ae)):(Ye.expandByPoint(ls.min),Ye.expandByPoint(ls.max))}Ye.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)Ae.fromBufferAttribute(a,h),l&&(An.fromBufferAttribute(t,h),Ae.add(An)),n=Math.max(n,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,n=e.position.array,s=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ve(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let E=0;E<a;E++)h[E]=new w,c[E]=new w;let u=new w,f=new w,p=new w,g=new rt,_=new rt,m=new rt,d=new w,v=new w;function y(E,U,F){u.fromArray(n,E*3),f.fromArray(n,U*3),p.fromArray(n,F*3),g.fromArray(o,E*2),_.fromArray(o,U*2),m.fromArray(o,F*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(K),v.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(K),h[E].add(d),h[U].add(d),h[F].add(d),c[E].add(v),c[U].add(v),c[F].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let E=0,U=x.length;E<U;++E){let F=x[E],K=F.start,L=F.count;for(let B=K,W=K+L;B<W;B+=3)y(i[B+0],i[B+1],i[B+2])}let R=new w,A=new w,C=new w,k=new w;function M(E){C.fromArray(s,E*3),k.copy(C);let U=h[E];R.copy(U),R.sub(C.multiplyScalar(C.dot(U))).normalize(),A.crossVectors(k,U);let K=A.dot(c[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=K}for(let E=0,U=x.length;E<U;++E){let F=x[E],K=F.start,L=F.count;for(let B=K,W=K+L;B<W;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let n=new w,s=new w,o=new w,a=new w,l=new w,h=new w,c=new w,u=new w;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,s),u.subVectors(n,s),c.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,m),a.add(c),l.add(c),h.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=e.count;f<p;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,s),u.subVectors(n,s),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,u=a.normalized,f=new h.constructor(l.length*c),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=h[p++]}return new ve(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],h=t(l,i);e.setAttribute(a,h)}let s=this.morphAttributes;for(let a in s){let l=[],h=s[a];for(let c=0,u=h.length;c<u;c++){let f=h[c],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let u=0,f=h.length;u<f;u++){let p=h[u];c.push(p.toJSON(t.data))}c.length>0&&(n[l]=c,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let n=t.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(e))}let s=t.morphAttributes;for(let h in s){let c=[],u=s[h];for(let f=0,p=u.length;f<p;f++)c.push(u[f].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wh=new re,Qi=new Gn,Ks=new Ti,Xh=new w,Rn=new w,Cn=new w,Pn=new w,fa=new w,Js=new w,js=new rt,Qs=new rt,tr=new rt,qh=new w,$h=new w,Yh=new w,er=new w,ir=new w,V=class extends ce{constructor(t=new ae,e=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let l=0,h=s.length;l<h;l++){let c=a[l],u=s[l];c!==0&&(fa.fromBufferAttribute(u,t),o?Js.addScaledVector(fa,c):Js.addScaledVector(fa.sub(e),c))}e.add(Js)}return e}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(s),Qi.copy(t.ray).recast(t.near),!(Ks.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ks,Xh)===null||Qi.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Wh.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(Wh),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,h=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=y;x<R;x+=3){let A=a.getX(x),C=a.getX(x+1),k=a.getX(x+2);n=nr(this,d,t,i,h,c,u,A,C,k),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);n=nr(this,o,t,i,h,c,u,v,y,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=y;x<R;x+=3){let A=x,C=x+1,k=x+2;n=nr(this,d,t,i,h,c,u,A,C,k),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let v=m,y=m+1,x=m+2;n=nr(this,o,t,i,h,c,u,v,y,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Gd(r,t,e,i,n,s,o,a){let l;if(t.side===Re?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Vi,a),l===null)return null;ir.copy(a),ir.applyMatrix4(r.matrixWorld);let h=e.ray.origin.distanceTo(ir);return h<e.near||h>e.far?null:{distance:h,point:ir.clone(),object:r}}function nr(r,t,e,i,n,s,o,a,l,h){r.getVertexPosition(a,Rn),r.getVertexPosition(l,Cn),r.getVertexPosition(h,Pn);let c=Gd(r,t,e,i,Rn,Cn,Pn,er);if(c){n&&(js.fromBufferAttribute(n,a),Qs.fromBufferAttribute(n,l),tr.fromBufferAttribute(n,h),c.uv=kn.getInterpolation(er,Rn,Cn,Pn,js,Qs,tr,new rt)),s&&(js.fromBufferAttribute(s,a),Qs.fromBufferAttribute(s,l),tr.fromBufferAttribute(s,h),c.uv1=kn.getInterpolation(er,Rn,Cn,Pn,js,Qs,tr,new rt),c.uv2=c.uv1),o&&(qh.fromBufferAttribute(o,a),$h.fromBufferAttribute(o,l),Yh.fromBufferAttribute(o,h),c.normal=kn.getInterpolation(er,Rn,Cn,Pn,qh,$h,Yh,new w),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new w,materialIndex:0};kn.getNormal(Rn,Cn,Pn,u.normal),c.face=u}return c}var xt=class r extends ae{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],h=[],c=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,s,4),g("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Jt(h,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(u,2));function g(_,m,d,v,y,x,R,A,C,k,M){let E=x/C,U=R/k,F=x/2,K=R/2,L=A/2,B=C+1,W=k+1,J=0,Z=0,q=new w;for(let it=0;it<W;it++){let nt=it*U-K;for(let pt=0;pt<B;pt++){let X=pt*E-F;q[_]=X*v,q[m]=nt*y,q[d]=L,h.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[d]=A>0?1:-1,c.push(q.x,q.y,q.z),u.push(pt/C),u.push(1-it/k),J+=1}}for(let it=0;it<k;it++)for(let nt=0;nt<C;nt++){let pt=f+nt+B*it,X=f+nt+B*(it+1),Q=f+(nt+1)+B*(it+1),mt=f+(nt+1)+B*it;l.push(pt,X,mt),l.push(X,Q,mt),Z+=6}a.addGroup(p,Z,M),p+=Z,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xn(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function Be(r){let t={};for(let e=0;e<r.length;e++){let i=Xn(r[e]);for(let n in i)t[n]=i[n]}return t}function Wd(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Gc(r){return r.getRenderTarget()===null?r.outputColorSpace:te.workingColorSpace}var Xd={clone:Xn,merge:Be},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xn(t.uniforms),this.uniformsGroups=Wd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Cr=class extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ie=class extends Cr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ko*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/h,n*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ln=-90,In=1,Ua=class extends ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ie(Ln,In,t,e);n.layers=this.layers,this.add(n);let s=new Ie(Ln,In,t,e);s.layers=this.layers,this.add(s);let o=new Ie(Ln,In,t,e);o.layers=this.layers,this.add(o);let a=new Ie(Ln,In,t,e);a.layers=this.layers,this.add(a);let l=new Ie(Ln,In,t,e);l.layers=this.layers,this.add(l);let h=new Ie(Ln,In,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let h of e)this.remove(h);if(t===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,h,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,h),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),t.render(e,c),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Pr=class extends ti{constructor(t,e,i,n,s,o,a,l,h,c){t=t!==void 0?t:[],e=e!==void 0?e:Hn,super(t,e,i,n,s,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Na=class extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===an?be:Qe),this.texture=new Pr(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new xt(5,5,5),s=new Me({name:"CubemapFromEquirect",uniforms:Xn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Re,blending:Bi});s.uniforms.tEquirect.value=e;let o=new V(n,s),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=je),new Ua(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}},pa=new w,Yd=new w,Zd=new Yt,wi=class{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=pa.subVectors(i,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(pa),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zd.getNormalMatrix(t),n=this.coplanarPoint(pa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},tn=new Ti,sr=new w,_s=class{constructor(t=new wi,e=new wi,i=new wi,n=new wi,s=new wi,o=new wi){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ei){let i=this.planes,n=t.elements,s=n[0],o=n[1],a=n[2],l=n[3],h=n[4],c=n[5],u=n[6],f=n[7],p=n[8],g=n[9],_=n[10],m=n[11],d=n[12],v=n[13],y=n[14],x=n[15];if(i[0].setComponents(l-s,f-h,m-p,x-d).normalize(),i[1].setComponents(l+s,f+h,m+p,x+d).normalize(),i[2].setComponents(l+o,f+c,m+g,x+v).normalize(),i[3].setComponents(l-o,f-c,m-g,x-v).normalize(),i[4].setComponents(l-a,f-u,m-_,x-y).normalize(),e===Ei)i[5].setComponents(l+a,f+u,m+_,x+y).normalize();else if(e===br)i[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),tn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tn)}intersectsSprite(t){return tn.center.set(0,0,0),tn.radius=.7071067811865476,tn.applyMatrix4(t.matrixWorld),this.intersectsSphere(tn)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(sr.x=n.normal.x>0?t.max.x:t.min.x,sr.y=n.normal.y>0?t.max.y:t.min.y,sr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wc(){let r=null,t=!1,e=null,i=null;function n(s,o){e(s,o),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Kd(r,t){let e=t.isWebGL2,i=new WeakMap;function n(h,c){let u=h.array,f=h.usage,p=u.byteLength,g=r.createBuffer();r.bindBuffer(c,g),r.bufferData(c,u,f),h.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:p}}function s(h,c,u){let f=c.array,p=c._updateRange,g=c.updateRanges;if(r.bindBuffer(u,h),p.count===-1&&g.length===0&&r.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];e?r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):r.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(e?r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let c=i.get(h);c&&(r.deleteBuffer(c.buffer),i.delete(h))}function l(h,c){if(h.isGLBufferAttribute){let f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);if(u===void 0)i.set(h,n(h,c));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,h,c),u.version=h.version}}return{get:o,remove:a,update:l}}var ze=class r extends ae{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),h=a+1,c=l+1,u=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){let v=d*f-o;for(let y=0;y<h;y++){let x=y*u-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){let y=v+h*d,x=v+h*(d+1),R=v+1+h*(d+1),A=v+1+h*d;p.push(y,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ef=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,af=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,If=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Df=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Of=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,om=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Em=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Jd,alphahash_pars_fragment:jd,alphamap_fragment:Qd,alphamap_pars_fragment:tf,alphatest_fragment:ef,alphatest_pars_fragment:nf,aomap_fragment:sf,aomap_pars_fragment:rf,batching_pars_vertex:of,batching_vertex:af,begin_vertex:lf,beginnormal_vertex:hf,bsdfs:cf,iridescence_fragment:uf,bumpmap_pars_fragment:df,clipping_planes_fragment:ff,clipping_planes_pars_fragment:pf,clipping_planes_pars_vertex:mf,clipping_planes_vertex:gf,color_fragment:_f,color_pars_fragment:yf,color_pars_vertex:vf,color_vertex:xf,common:bf,cube_uv_reflection_fragment:Mf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Ef,displacementmap_vertex:Sf,emissivemap_fragment:Tf,emissivemap_pars_fragment:Af,colorspace_fragment:Rf,colorspace_pars_fragment:Cf,envmap_fragment:Pf,envmap_common_pars_fragment:Lf,envmap_pars_fragment:If,envmap_pars_vertex:Df,envmap_physical_pars_fragment:Xf,envmap_vertex:kf,fog_vertex:Uf,fog_pars_vertex:Nf,fog_fragment:Of,fog_pars_fragment:Bf,gradientmap_pars_fragment:Ff,lightmap_fragment:Hf,lightmap_pars_fragment:zf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:$f,lights_phong_fragment:Yf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Kf,lights_physical_pars_fragment:Jf,lights_fragment_begin:jf,lights_fragment_maps:Qf,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:ip,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:hp,metalnessmap_pars_fragment:cp,morphcolor_vertex:up,morphnormal_vertex:dp,morphtarget_pars_vertex:fp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:gp,normal_pars_fragment:_p,normal_pars_vertex:yp,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:bp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:wp,iridescence_pars_fragment:Ep,opaque_fragment:Sp,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:Rp,dithering_fragment:Cp,dithering_pars_fragment:Pp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Dp,shadowmap_pars_vertex:kp,shadowmap_vertex:Up,shadowmask_pars_fragment:Np,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:Fp,skinnormal_vertex:Hp,specularmap_fragment:zp,specularmap_pars_fragment:Vp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:qp,uv_pars_fragment:$p,uv_pars_vertex:Yp,uv_vertex:Zp,worldpos_vertex:Kp,background_vert:Jp,background_frag:jp,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:im,depth_vert:nm,depth_frag:sm,distanceRGBA_vert:rm,distanceRGBA_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:hm,linedashed_frag:cm,meshbasic_vert:um,meshbasic_frag:dm,meshlambert_vert:fm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:gm,meshnormal_vert:_m,meshnormal_frag:ym,meshphong_vert:vm,meshphong_frag:xm,meshphysical_vert:bm,meshphysical_frag:Mm,meshtoon_vert:wm,meshtoon_frag:Em,points_vert:Sm,points_frag:Tm,shadow_vert:Am,shadow_frag:Rm,sprite_vert:Cm,sprite_frag:Pm},ht={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},di={basic:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ct(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Be([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Be([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Be([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new ct(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Be([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Be([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Be([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Be([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Be([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Be([ht.common,ht.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Be([ht.lights,ht.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};di.physical={uniforms:Be([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var rr={r:0,b:0,g:0};function Lm(r,t,e,i,n,s,o){let a=new ct(0),l=s===!0?0:1,h,c,u=null,f=0,p=null;function g(m,d){let v=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?_(a,l):y&&y.isColor&&(_(y,1),v=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Yr)?(c===void 0&&(c=new V(new xt(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:Xn(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=te.getTransfer(y.colorSpace)!==oe,(u!==y||f!==y.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new V(new ze(2,2),new Me({name:"BackgroundMaterial",uniforms:Xn(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=te.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function _(m,d){m.getRGB(rr,Gc(r)),i.buffers.color.setClear(rr.r,rr.g,rr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function Im(r,t,e,i){let n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null),h=l,c=!1;function u(L,B,W,J,Z){let q=!1;if(o){let it=_(J,W,B);h!==it&&(h=it,p(h.object)),q=d(L,J,W,Z),q&&v(L,J,W,Z)}else{let it=B.wireframe===!0;(h.geometry!==J.id||h.program!==W.id||h.wireframe!==it)&&(h.geometry=J.id,h.program=W.id,h.wireframe=it,q=!0)}Z!==null&&e.update(Z,r.ELEMENT_ARRAY_BUFFER),(q||c)&&(c=!1,k(L,B,W,J),Z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?r.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?r.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,B,W){let J=W.wireframe===!0,Z=a[L.id];Z===void 0&&(Z={},a[L.id]=Z);let q=Z[B.id];q===void 0&&(q={},Z[B.id]=q);let it=q[J];return it===void 0&&(it=m(f()),q[J]=it),it}function m(L){let B=[],W=[],J=[];for(let Z=0;Z<n;Z++)B[Z]=0,W[Z]=0,J[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:J,object:L,attributes:{},index:null}}function d(L,B,W,J){let Z=h.attributes,q=B.attributes,it=0,nt=W.getAttributes();for(let pt in nt)if(nt[pt].location>=0){let Q=Z[pt],mt=q[pt];if(mt===void 0&&(pt==="instanceMatrix"&&L.instanceMatrix&&(mt=L.instanceMatrix),pt==="instanceColor"&&L.instanceColor&&(mt=L.instanceColor)),Q===void 0||Q.attribute!==mt||mt&&Q.data!==mt.data)return!0;it++}return h.attributesNum!==it||h.index!==J}function v(L,B,W,J){let Z={},q=B.attributes,it=0,nt=W.getAttributes();for(let pt in nt)if(nt[pt].location>=0){let Q=q[pt];Q===void 0&&(pt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),pt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let mt={};mt.attribute=Q,Q&&Q.data&&(mt.data=Q.data),Z[pt]=mt,it++}h.attributes=Z,h.attributesNum=it,h.index=J}function y(){let L=h.newAttributes;for(let B=0,W=L.length;B<W;B++)L[B]=0}function x(L){R(L,0)}function R(L,B){let W=h.newAttributes,J=h.enabledAttributes,Z=h.attributeDivisors;W[L]=1,J[L]===0&&(r.enableVertexAttribArray(L),J[L]=1),Z[L]!==B&&((i.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,B),Z[L]=B)}function A(){let L=h.newAttributes,B=h.enabledAttributes;for(let W=0,J=B.length;W<J;W++)B[W]!==L[W]&&(r.disableVertexAttribArray(W),B[W]=0)}function C(L,B,W,J,Z,q,it){it===!0?r.vertexAttribIPointer(L,B,W,Z,q):r.vertexAttribPointer(L,B,W,J,Z,q)}function k(L,B,W,J){if(i.isWebGL2===!1&&(L.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let Z=J.attributes,q=W.getAttributes(),it=B.defaultAttributeValues;for(let nt in q){let pt=q[nt];if(pt.location>=0){let X=Z[nt];if(X===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){let Q=X.normalized,mt=X.itemSize,wt=e.get(X);if(wt===void 0)continue;let yt=wt.buffer,It=wt.type,Bt=wt.bytesPerElement,Et=i.isWebGL2===!0&&(It===r.INT||It===r.UNSIGNED_INT||X.gpuType===Ic);if(X.isInterleavedBufferAttribute){let Ut=X.data,P=Ut.stride,at=X.offset;if(Ut.isInstancedInterleavedBuffer){for(let Y=0;Y<pt.locationSize;Y++)R(pt.location+Y,Ut.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Y=0;Y<pt.locationSize;Y++)x(pt.location+Y);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Y=0;Y<pt.locationSize;Y++)C(pt.location+Y,mt/pt.locationSize,It,Q,P*Bt,(at+mt/pt.locationSize*Y)*Bt,Et)}else{if(X.isInstancedBufferAttribute){for(let Ut=0;Ut<pt.locationSize;Ut++)R(pt.location+Ut,X.meshPerAttribute);L.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ut=0;Ut<pt.locationSize;Ut++)x(pt.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Ut=0;Ut<pt.locationSize;Ut++)C(pt.location+Ut,mt/pt.locationSize,It,Q,mt*Bt,mt/pt.locationSize*Ut*Bt,Et)}}else if(it!==void 0){let Q=it[nt];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(pt.location,Q);break;case 3:r.vertexAttrib3fv(pt.location,Q);break;case 4:r.vertexAttrib4fv(pt.location,Q);break;default:r.vertexAttrib1fv(pt.location,Q)}}}}A()}function M(){F();for(let L in a){let B=a[L];for(let W in B){let J=B[W];for(let Z in J)g(J[Z].object),delete J[Z];delete B[W]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let B=a[L.id];for(let W in B){let J=B[W];for(let Z in J)g(J[Z].object),delete J[Z];delete B[W]}delete a[L.id]}function U(L){for(let B in a){let W=a[B];if(W[L.id]===void 0)continue;let J=W[L.id];for(let Z in J)g(J[Z].object),delete J[Z];delete W[L.id]}}function F(){K(),c=!0,h!==l&&(h=l,p(h.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:F,resetDefaultState:K,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:y,enableAttribute:x,disableUnusedAttributes:A}}function Dm(r,t,e,i){let n=i.isWebGL2,s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,f){if(f===0)return;let p,g;if(n)p=r,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](s,c,u,f),e.update(u,s,f)}function h(c,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(c[g],u[g]);else{p.multiDrawArraysWEBGL(s,c,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=h}function km(r,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let h=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,x=o||t.has("OES_texture_float"),R=y&&x,A=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:R,maxSamples:A}}function Um(r){let t=this,e=null,i=0,n=!1,s=!1,o=new wi,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||n;return n=f,i=u.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=r.get(u);if(!n||g===null||g.length===0||s&&!m)s?c(null):h();else{let v=s?0:i,y=v*4,x=d.clippingState||null;l.value=x,x=c(g,f,y,p);for(let R=0;R!==y;++R)x[R]=e[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Nm(r){let t=new WeakMap;function e(o,a){return a===Ra?o.mapping=Hn:a===Ca&&(o.mapping=zn),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ra||a===Ca)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let h=new Na(l.height/2);return h.fromEquirectangularTexture(r,o),t.set(o,h),o.addEventListener("dispose",n),e(h.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var qn=class extends Cr{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Un=4,Zh=[.125,.215,.35,.446,.526,.582],sn=20,ma=new qn,Kh=new ct,ga=null,_a=0,ya=0,en=(1+Math.sqrt(5))/2,Dn=1/en,Jh=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,en,Dn),new w(0,en,-Dn),new w(Dn,0,en),new w(-Dn,0,en),new w(en,Dn,0),new w(-en,Dn,0)],Lr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,n,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ga,_a,ya),t.scissorTest=!1,or(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hn||t.mapping===zn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ga=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:hi,format:li,colorSpace:Si,depthBuffer:!1},n=jh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jh(t,e,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Om(s)),this._blurMaterial=Bm(s,t,e)}return n}_compileMaterial(t){let e=new V(this._lodPlanes[0],t);this._renderer.compile(e,ma)}_sceneToCubeUV(t,e,i,n){let a=new Ie(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(Kh),c.toneMapping=Hi,c.autoClear=!1;let p=new Ot({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new V(new xt,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Kh),_=!0);for(let d=0;d<6;d++){let v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(h[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,h[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,h[d]));let y=this._cubeSize;or(n,v*y,d>2?y:0,y,y),c.setRenderTarget(n),_&&c.render(g,a),c.render(t,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Hn||t.mapping===zn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let s=n?this._cubemapMaterial:this._equirectMaterial,o=new V(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;or(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ma)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Jh[(n-1)%Jh.length];this._blur(t,n-1,n,s,o)}e.autoClear=i}_blur(t,e,i,n,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",s),this._halfBlur(o,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,o,a){let l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new V(this._lodPlanes[n],h),f=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*sn-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):sn;m>sn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sn}`);let d=[],v=0;for(let C=0;C<sn;++C){let k=C/_,M=Math.exp(-k*k/2);d.push(M),C===0?v+=M:C<m&&(v+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let x=this._sizeLods[n],R=3*x*(n>y-Un?n-y+Un:0),A=4*(this._cubeSize-x);or(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(u,ma)}};function Om(r){let t=[],e=[],i=[],n=r,s=r-Un+1+Zh.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);e.push(a);let l=1/a;o>r-Un?l=Zh[o-r+Un-1]:o===0&&(l=0),i.push(l);let h=1/(a-2),c=-h,u=1+h,f=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let A=0;A<p;A++){let C=A%3*2/3-1,k=A>2?0:-1,M=[C,k,0,C+2/3,k,0,C+2/3,k+1,0,C,k,0,C+2/3,k+1,0,C,k+1,0];v.set(M,_*g*A),y.set(f,m*g*A);let E=[A,A,A,A,A,A];x.set(E,d*g*A)}let R=new ae;R.setAttribute("position",new ve(v,_)),R.setAttribute("uv",new ve(y,m)),R.setAttribute("faceIndex",new ve(x,d)),t.push(R),n>Un&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jh(r,t,e){let i=new He(r,t,e);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function or(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function Bm(r,t,e){let i=new Float32Array(sn),n=new w(0,1,0);return new Me({name:"SphericalGaussianBlur",defines:{n:sn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Qh(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function tc(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fm(r){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,h=l===Ra||l===Ca,c=l===Hn||l===zn;if(h||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Lr(r)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(h&&u&&u.height>0||c&&u&&n(u)){e===null&&(e=new Lr(r));let f=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function n(a){let l=0,h=6;for(let c=0;c<h;c++)a[c]!==void 0&&l++;return l===h}function s(a){let l=a.target;l.removeEventListener("dispose",s);let h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Hm(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function zm(r,t,e,i){let n={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete n[f.id];let p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],r.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],r.ARRAY_BUFFER)}}function h(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){let R=v[y+0],A=v[y+1],C=v[y+2];f.push(R,A,A,C,C,R)}}else if(g!==void 0){let v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let R=y+0,A=y+1,C=y+2;f.push(R,A,A,C,C,R)}}else return;let m=new(zc(f)?Rr:Ar)(f,1);m.version=_;let d=s.get(u);d&&t.remove(d),s.set(u,m)}function c(u){let f=s.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&h(u)}else h(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function Vm(r,t,e,i){let n=i.isWebGL2,s;function o(p){s=p}let a,l;function h(p){a=p.type,l=p.bytesPerElement}function c(p,g){r.drawElements(s,g,a,p*l),e.update(g,s,1)}function u(p,g,_){if(_===0)return;let m,d;if(n)m=r,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,g,a,p*l,_),e.update(g,s,_)}function f(p,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(s,g,0,a,p,0,_);let d=0;for(let v=0;v<_;v++)d+=g[v];e.update(d,s,1)}}this.setMode=o,this.setIndex=h,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function Gm(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Wm(r,t){return r[0]-t[0]}function Xm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function qm(r,t,e){let i={},n=new Float32Array(8),s=new WeakMap,o=new he,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,c,u){let f=h.morphTargetInfluences;if(t.isWebGL2===!0){let p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0,_=s.get(c);if(_===void 0||_.count!==g){let L=function(){F.dispose(),s.delete(c),c.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],C=c.morphAttributes.color||[],k=0;v===!0&&(k=1),y===!0&&(k=2),x===!0&&(k=3);let M=c.attributes.position.count*k,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let U=new Float32Array(M*E*4*g),F=new Tr(U,M,E,g);F.type=Oi,F.needsUpdate=!0;let K=k*4;for(let B=0;B<g;B++){let W=R[B],J=A[B],Z=C[B],q=M*E*4*B;for(let it=0;it<W.count;it++){let nt=it*K;v===!0&&(o.fromBufferAttribute(W,it),U[q+nt+0]=o.x,U[q+nt+1]=o.y,U[q+nt+2]=o.z,U[q+nt+3]=0),y===!0&&(o.fromBufferAttribute(J,it),U[q+nt+4]=o.x,U[q+nt+5]=o.y,U[q+nt+6]=o.z,U[q+nt+7]=0),x===!0&&(o.fromBufferAttribute(Z,it),U[q+nt+8]=o.x,U[q+nt+9]=o.y,U[q+nt+10]=o.z,U[q+nt+11]=Z.itemSize===4?o.w:1)}}_={count:g,texture:F,size:new rt(M,E)},s.set(c,_),c.addEventListener("dispose",L)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let d=c.morphTargetsRelative?1:1-m;u.getUniforms().setValue(r,"morphTargetBaseInfluence",d),u.getUniforms().setValue(r,"morphTargetInfluences",f),u.getUniforms().setValue(r,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=i[c.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<p;y++){let x=g[y];x[0]=y,x[1]=f[y]}g.sort(Xm);for(let y=0;y<8;y++)y<p&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Wm);let _=c.morphAttributes.position,m=c.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let x=a[y],R=x[0],A=x[1];R!==Number.MAX_SAFE_INTEGER&&A?(_&&c.getAttribute("morphTarget"+y)!==_[R]&&c.setAttribute("morphTarget"+y,_[R]),m&&c.getAttribute("morphNormal"+y)!==m[R]&&c.setAttribute("morphNormal"+y,m[R]),n[y]=A,d+=A):(_&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),m&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),n[y]=0)}let v=c.morphTargetsRelative?1:1-d;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function $m(r,t,e,i){let n=new WeakMap;function s(l){let h=i.render.frame,c=l.geometry,u=t.get(l,c);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==h&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;n.get(f)!==h&&(f.update(),n.set(f,h))}return u}function o(){n=new WeakMap}function a(l){let h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}var Ir=class extends ti{constructor(t,e,i,n,s,o,a,l,h,c){if(c=c!==void 0?c:on,c!==on&&c!==Vn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===on&&(i=Ni),i===void 0&&c===Vn&&(i=rn),super(null,n,s,o,a,l,c,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xc=new ti,qc=new Ir(1,1);qc.compareFunction=Hc;var $c=new Tr,Yc=new ka,Zc=new Pr,ec=[],ic=[],nc=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function jn(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=ec[n];if(s===void 0&&(s=new Float32Array(n),ec[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Ee(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Kr(r,t){let e=ic[t];e===void 0&&(e=new Int32Array(t),ic[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Ym(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Zm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),Ee(e,t)}}function Km(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),Ee(e,t)}}function Jm(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),Ee(e,t)}}function jm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;rc.set(i),r.uniformMatrix2fv(this.addr,!1,rc),Ee(e,i)}}function Qm(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;sc.set(i),r.uniformMatrix3fv(this.addr,!1,sc),Ee(e,i)}}function t0(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(we(e,i))return;nc.set(i),r.uniformMatrix4fv(this.addr,!1,nc),Ee(e,i)}}function e0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function i0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),Ee(e,t)}}function n0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),Ee(e,t)}}function s0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),Ee(e,t)}}function r0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function o0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),Ee(e,t)}}function a0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),Ee(e,t)}}function l0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),Ee(e,t)}}function h0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s=this.type===r.SAMPLER_2D_SHADOW?qc:Xc;e.setTexture2D(t||s,n)}function c0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yc,n)}function u0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Zc,n)}function d0(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||$c,n)}function f0(r){switch(r){case 5126:return Ym;case 35664:return Zm;case 35665:return Km;case 35666:return Jm;case 35674:return jm;case 35675:return Qm;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return i0;case 35668:case 35672:return n0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(r,t){r.uniform1fv(this.addr,t)}function m0(r,t){let e=jn(t,this.size,2);r.uniform2fv(this.addr,e)}function g0(r,t){let e=jn(t,this.size,3);r.uniform3fv(this.addr,e)}function _0(r,t){let e=jn(t,this.size,4);r.uniform4fv(this.addr,e)}function y0(r,t){let e=jn(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function v0(r,t){let e=jn(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function x0(r,t){let e=jn(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function b0(r,t){r.uniform1iv(this.addr,t)}function M0(r,t){r.uniform2iv(this.addr,t)}function w0(r,t){r.uniform3iv(this.addr,t)}function E0(r,t){r.uniform4iv(this.addr,t)}function S0(r,t){r.uniform1uiv(this.addr,t)}function T0(r,t){r.uniform2uiv(this.addr,t)}function A0(r,t){r.uniform3uiv(this.addr,t)}function R0(r,t){r.uniform4uiv(this.addr,t)}function C0(r,t,e){let i=this.cache,n=t.length,s=Kr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Xc,s[o])}function P0(r,t,e){let i=this.cache,n=t.length,s=Kr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Yc,s[o])}function L0(r,t,e){let i=this.cache,n=t.length,s=Kr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Zc,s[o])}function I0(r,t,e){let i=this.cache,n=t.length,s=Kr(e,n);we(i,s)||(r.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||$c,s[o])}function D0(r){switch(r){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return y0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return b0;case 35667:case 35671:return M0;case 35668:case 35672:return w0;case 35669:case 35673:return E0;case 5125:return S0;case 36294:return T0;case 36295:return A0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return I0}}var Oa=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=f0(e.type)}},Ba=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=D0(e.type)}},Fa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},va=/(\w+)(\])?(\[|\.)?/g;function oc(r,t){r.seq.push(t),r.map[t.id]=t}function k0(r,t,e){let i=r.name,n=i.length;for(va.lastIndex=0;;){let s=va.exec(i),o=va.lastIndex,a=s[1],l=s[2]==="]",h=s[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===n){oc(e,h===void 0?new Oa(a,r,t):new Ba(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Fa(a),oc(e,u)),e=u}}}var Fn=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=t.getActiveUniform(e,n),o=t.getUniformLocation(e,s.name);k0(s,o,this)}}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function ac(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var U0=37297,N0=0;function O0(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function B0(r){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(r),i;switch(t===e?i="":t===xr&&e===vr?i="LinearDisplayP3ToLinearSRGB":t===vr&&e===xr&&(i="LinearSRGBToLinearDisplayP3"),r){case Si:case Zr:return[i,"LinearTransferOETF"];case be:case Tl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function lc(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),n=r.getShaderInfoLog(t).trim();if(i&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+n+`

`+O0(r.getShaderSource(t),o)}else return n}function F0(r,t){let e=B0(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function H0(r,t){let e;switch(t){case sd:e="Linear";break;case rd:e="Reinhard";break;case od:e="OptimizedCineon";break;case wl:e="ACESFilmic";break;case ld:e="AgX";break;case ad:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function z0(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nn).join(`
`)}function V0(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Nn).join(`
`)}function G0(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function W0(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Nn(r){return r!==""}function hc(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var X0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ha(r){return r.replace(X0,$0)}var q0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function $0(r,t){let e=Gt[t];if(e===void 0){let i=q0.get(t);if(i!==void 0)e=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ha(e)}var Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(r){return r.replace(Y0,Z0)}function Z0(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function dc(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function K0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Pc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===bl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Mi&&(t="SHADOWMAP_TYPE_VSM"),t}function J0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hn:case zn:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j0(r){let t="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===zn&&(t="ENVMAP_MODE_REFRACTION"),t}function Q0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ml:t="ENVMAP_BLENDING_MULTIPLY";break;case id:t="ENVMAP_BLENDING_MIX";break;case nd:t="ENVMAP_BLENDING_ADD";break}return t}function tg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function eg(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=K0(e),h=J0(e),c=j0(e),u=Q0(e),f=tg(e),p=e.isWebGL2?"":z0(e),g=V0(e),_=G0(s),m=n.createProgram(),d,v,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nn).join(`
`),d.length>0&&(d+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nn).join(`
`),v.length>0&&(v+=`
`)):(d=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),v=[p,dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Hi?H0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nn).join(`
`)),o=Ha(o),o=hc(o,e),o=cc(o,e),a=Ha(a),a=hc(a,e),a=cc(a,e),o=uc(o),a=uc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let x=y+d+o,R=y+v+a,A=ac(n,n.VERTEX_SHADER,x),C=ac(n,n.FRAGMENT_SHADER,R);n.attachShader(m,A),n.attachShader(m,C),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function k(F){if(r.debug.checkShaderErrors){let K=n.getProgramInfoLog(m).trim(),L=n.getShaderInfoLog(A).trim(),B=n.getShaderInfoLog(C).trim(),W=!0,J=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,A,C);else{let Z=lc(n,A,"vertex"),q=lc(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+Z+`
`+q)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||B==="")&&(J=!1);J&&(F.diagnostics={runnable:W,programLog:K,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:v}})}n.deleteShader(A),n.deleteShader(C),M=new Fn(n,m),E=W0(n,m)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let E;this.getAttributes=function(){return E===void 0&&k(this),E};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=n.getProgramParameter(m,U0)),U},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=N0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=C,this}var ig=0,za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Va(t),e.set(t,i)),i}},Va=class{constructor(t){this.id=ig++,this.code=t,this.usedTimes=0}};function ng(r,t,e,i,n,s,o){let a=new gs,l=new za,h=[],c=n.isWebGL2,u=n.logarithmicDepthBuffer,f=n.vertexTextures,p=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,U,F,K){let L=F.fog,B=K.geometry,W=M.isMeshStandardMaterial?F.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),Z=J&&J.mapping===Yr?J.image.height:null,q=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=it!==void 0?it.length:0,pt=0;B.morphAttributes.position!==void 0&&(pt=1),B.morphAttributes.normal!==void 0&&(pt=2),B.morphAttributes.color!==void 0&&(pt=3);let X,Q,mt,wt;if(q){let Ne=di[q];X=Ne.vertexShader,Q=Ne.fragmentShader}else X=M.vertexShader,Q=M.fragmentShader,l.update(M),mt=l.getVertexShaderID(M),wt=l.getFragmentShaderID(M);let yt=r.getRenderTarget(),It=K.isInstancedMesh===!0,Bt=K.isBatchedMesh===!0,Et=!!M.map,Ut=!!M.matcap,P=!!J,at=!!M.aoMap,Y=!!M.lightMap,ot=!!M.bumpMap,$=!!M.normalMap,At=!!M.displacementMap,gt=!!M.emissiveMap,S=!!M.metalnessMap,b=!!M.roughnessMap,O=M.anisotropy>0,st=M.clearcoat>0,tt=M.iridescence>0,j=M.sheen>0,Mt=M.transmission>0,ut=O&&!!M.anisotropyMap,vt=st&&!!M.clearcoatMap,Ct=st&&!!M.clearcoatNormalMap,Ht=st&&!!M.clearcoatRoughnessMap,et=tt&&!!M.iridescenceMap,jt=tt&&!!M.iridescenceThicknessMap,Zt=j&&!!M.sheenColorMap,Nt=j&&!!M.sheenRoughnessMap,Rt=!!M.specularMap,bt=!!M.specularColorMap,Vt=!!M.specularIntensityMap,Qt=Mt&&!!M.transmissionMap,me=Mt&&!!M.thicknessMap,qt=!!M.gradientMap,lt=!!M.alphaMap,I=M.alphaTest>0,dt=!!M.alphaHash,ft=!!M.extensions,Dt=!!B.attributes.uv1,Pt=!!B.attributes.uv2,ie=!!B.attributes.uv3,ne=Hi;return M.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(ne=r.toneMapping),{isWebGL2:c,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:Q,defines:M.defines,customVertexShaderID:mt,customFragmentShaderID:wt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Bt,instancing:It,instancingColor:It&&K.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Si,map:Et,matcap:Ut,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:Y,bumpMap:ot,normalMap:$,displacementMap:f&&At,emissiveMap:gt,normalMapObjectSpace:$&&M.normalMapType===xd,normalMapTangentSpace:$&&M.normalMapType===Sl,metalnessMap:S,roughnessMap:b,anisotropy:O,anisotropyMap:ut,clearcoat:st,clearcoatMap:vt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Ht,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:jt,sheen:j,sheenColorMap:Zt,sheenRoughnessMap:Nt,specularMap:Rt,specularColorMap:bt,specularIntensityMap:Vt,transmission:Mt,transmissionMap:Qt,thicknessMap:me,gradientMap:qt,opaque:M.transparent===!1&&M.blending===Fi,alphaMap:lt,alphaTest:I,alphaHash:dt,combine:M.combine,mapUv:Et&&_(M.map.channel),aoMapUv:at&&_(M.aoMap.channel),lightMapUv:Y&&_(M.lightMap.channel),bumpMapUv:ot&&_(M.bumpMap.channel),normalMapUv:$&&_(M.normalMap.channel),displacementMapUv:At&&_(M.displacementMap.channel),emissiveMapUv:gt&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:vt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(M.sheenRoughnessMap.channel),specularMapUv:Rt&&_(M.specularMap.channel),specularColorMapUv:bt&&_(M.specularColorMap.channel),specularIntensityMapUv:Vt&&_(M.specularIntensityMap.channel),transmissionMapUv:Qt&&_(M.transmissionMap.channel),thicknessMapUv:me&&_(M.thicknessMap.channel),alphaMapUv:lt&&_(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&($||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Pt,vertexUv3s:ie,pointsUvs:K.isPoints===!0&&!!B.attributes.uv&&(Et||lt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&U.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ft&&M.extensions.derivatives===!0,extensionFragDepth:ft&&M.extensions.fragDepth===!0,extensionDrawBuffers:ft&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ft&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ft&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)E.push(U),E.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(v(E,M),y(E,M),E.push(r.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function y(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function x(M){let E=g[M.type],U;if(E){let F=di[E];U=Xd.clone(F.uniforms)}else U=M.uniforms;return U}function R(M,E){let U;for(let F=0,K=h.length;F<K;F++){let L=h[F];if(L.cacheKey===E){U=L,++U.usedTimes;break}}return U===void 0&&(U=new eg(r,E,M,s),h.push(U)),U}function A(M){if(--M.usedTimes===0){let E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:k}}function sg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function i(s,o,a){r.get(s)[o]=a}function n(){r=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function rg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function fc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function pc(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u,f,p,g,_,m){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?n.push(d):e.push(d)}function l(u,f,p,g,_,m){let d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?n.unshift(d):e.unshift(d)}function h(u,f){e.length>1&&e.sort(u||rg),i.length>1&&i.sort(f||fc),n.length>1&&n.sort(f||fc)}function c(){for(let u=t,f=r.length;u<f;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:c,sort:h}}function og(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new pc,r.set(i,[o])):n>=s.length?(o=new pc,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function ag(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new ct};break;case"SpotLight":e={position:new w,direction:new w,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new w,halfWidth:new w,halfHeight:new w};break}return r[t.id]=e,e}}}function lg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var hg=0;function cg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function ug(r,t){let e=new ag,i=lg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let s=new w,o=new re,a=new re;function l(c,u){let f=0,p=0,g=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let _=0,m=0,d=0,v=0,y=0,x=0,R=0,A=0,C=0,k=0,M=0;c.sort(cg);let E=u===!0?Math.PI:1;for(let F=0,K=c.length;F<K;F++){let L=c[F],B=L.color,W=L.intensity,J=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=B.r*W*E,p+=B.g*W*E,g+=B.b*W*E;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],W);M++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let it=L.shadow,nt=i.get(L);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,n.directionalShadow[_]=nt,n.directionalShadowMap[_]=Z,n.directionalShadowMatrix[_]=L.shadow.matrix,x++}n.directional[_]=q,_++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(W*E),q.distance=J,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[d]=q;let it=L.shadow;if(L.map&&(n.spotLightMap[C]=L.map,C++,it.updateMatrices(L),L.castShadow&&k++),n.spotLightMatrix[d]=it.matrix,L.castShadow){let nt=i.get(L);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,n.spotShadow[d]=nt,n.spotShadowMap[d]=Z,A++}d++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(B).multiplyScalar(W),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[v]=q,v++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*E),q.distance=L.distance,q.decay=L.decay,L.castShadow){let it=L.shadow,nt=i.get(L);nt.shadowBias=it.bias,nt.shadowNormalBias=it.normalBias,nt.shadowRadius=it.radius,nt.shadowMapSize=it.mapSize,nt.shadowCameraNear=it.camera.near,nt.shadowCameraFar=it.camera.far,n.pointShadow[m]=nt,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=L.shadow.matrix,R++}n.point[m]=q,m++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(W*E),q.groundColor.copy(L.groundColor).multiplyScalar(W*E),n.hemi[y]=q,y++}}v>0&&(t.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=g;let U=n.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==d||U.rectAreaLength!==v||U.hemiLength!==y||U.numDirectionalShadows!==x||U.numPointShadows!==R||U.numSpotShadows!==A||U.numSpotMaps!==C||U.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=d,n.rectArea.length=v,n.point.length=m,n.hemi.length=y,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=A+C-k,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=M,U.directionalLength=_,U.pointLength=m,U.spotLength=d,U.rectAreaLength=v,U.hemiLength=y,U.numDirectionalShadows=x,U.numPointShadows=R,U.numSpotShadows=A,U.numSpotMaps=C,U.numLightProbes=M,n.version=hg++)}function h(c,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){let x=c[v];if(x.isDirectionalLight){let R=n.directional[f];R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),f++}else if(x.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(x.isRectAreaLight){let R=n.rectArea[_];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(x.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(x.width*.5,0,0),R.halfHeight.set(0,x.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){let R=n.point[p];R.position.setFromMatrixPosition(x.matrixWorld),R.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){let R=n.hemi[m];R.direction.setFromMatrixPosition(x.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:l,setupView:h,state:n}}function mc(r,t){let e=new ug(r,t),i=[],n=[];function s(){i.length=0,n.length=0}function o(u){i.push(u)}function a(u){n.push(u)}function l(u){e.setup(i,u)}function h(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function dg(r,t){let e=new WeakMap;function i(s,o=0){let a=e.get(s),l;return a===void 0?(l=new mc(r,t),e.set(s,[l])):o>=a.length?(l=new mc(r,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}var Ga=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wa=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mg(r,t,e){let i=new _s,n=new rt,s=new rt,o=new he,a=new Ga({depthPacking:vd}),l=new Wa,h={},c=e.maxTextureSize,u={[Vi]:Re,[Re]:Vi,[Ze]:Ze},f=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:fg,fragmentShader:pg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ae;g.setAttribute("position",new ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new V(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let d=this.type;this.render=function(A,C,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let M=r.getRenderTarget(),E=r.getActiveCubeFace(),U=r.getActiveMipmapLevel(),F=r.state;F.setBlending(Bi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let K=d!==Mi&&this.type===Mi,L=d===Mi&&this.type!==Mi;for(let B=0,W=A.length;B<W;B++){let J=A[B],Z=J.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;n.copy(Z.mapSize);let q=Z.getFrameExtents();if(n.multiply(q),s.copy(Z.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/q.x),n.x=s.x*q.x,Z.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/q.y),n.y=s.y*q.y,Z.mapSize.y=s.y)),Z.map===null||K===!0||L===!0){let nt=this.type!==Mi?{minFilter:Fe,magFilter:Fe}:{};Z.map!==null&&Z.map.dispose(),Z.map=new He(n.x,n.y,nt),Z.map.texture.name=J.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();let it=Z.getViewportCount();for(let nt=0;nt<it;nt++){let pt=Z.getViewport(nt);o.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),F.viewport(o),Z.updateMatrices(J,nt),i=Z.getFrustum(),x(C,k,Z.camera,J,this.type)}Z.isPointLightShadow!==!0&&this.type===Mi&&v(Z,k),Z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(M,E,U)};function v(A,C){let k=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new He(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(C,null,k,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(C,null,k,p,_,null)}function y(A,C,k,M){let E=null,U=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)E=U;else if(E=k.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let F=E.uuid,K=C.uuid,L=h[F];L===void 0&&(L={},h[F]=L);let B=L[K];B===void 0&&(B=E.clone(),L[K]=B,C.addEventListener("dispose",R)),E=B}if(E.visible=C.visible,E.wireframe=C.wireframe,M===Mi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,k.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=r.properties.get(E);F.light=k}return E}function x(A,C,k,M,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Mi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let K=t.update(A),L=A.material;if(Array.isArray(L)){let B=K.groups;for(let W=0,J=B.length;W<J;W++){let Z=B[W],q=L[Z.materialIndex];if(q&&q.visible){let it=y(A,q,M,E);A.onBeforeShadow(r,A,C,k,K,it,Z),r.renderBufferDirect(k,null,K,it,A,Z),A.onAfterShadow(r,A,C,k,K,it,Z)}}}else if(L.visible){let B=y(A,L,M,E);A.onBeforeShadow(r,A,C,k,K,B,null),r.renderBufferDirect(k,null,K,B,A,null),A.onAfterShadow(r,A,C,k,K,B,null)}}let F=A.children;for(let K=0,L=F.length;K<L;K++)x(F[K],C,k,M,E)}function R(A){A.target.removeEventListener("dispose",R);for(let k in h){let M=h[k],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function gg(r,t,e){let i=e.isWebGL2;function n(){let I=!1,dt=new he,ft=null,Dt=new he(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!I&&(r.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){I=Pt},setClear:function(Pt,ie,ne,Se,Ne){Ne===!0&&(Pt*=Se,ie*=Se,ne*=Se),dt.set(Pt,ie,ne,Se),Dt.equals(dt)===!1&&(r.clearColor(Pt,ie,ne,Se),Dt.copy(dt))},reset:function(){I=!1,ft=null,Dt.set(-1,0,0,0)}}}function s(){let I=!1,dt=null,ft=null,Dt=null;return{setTest:function(Pt){Pt?Bt(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(Pt){dt!==Pt&&!I&&(r.depthMask(Pt),dt=Pt)},setFunc:function(Pt){if(ft!==Pt){switch(Pt){case Zu:r.depthFunc(r.NEVER);break;case Ku:r.depthFunc(r.ALWAYS);break;case Ju:r.depthFunc(r.LESS);break;case mr:r.depthFunc(r.LEQUAL);break;case ju:r.depthFunc(r.EQUAL);break;case Qu:r.depthFunc(r.GEQUAL);break;case td:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){Dt!==Pt&&(r.clearDepth(Pt),Dt=Pt)},reset:function(){I=!1,dt=null,ft=null,Dt=null}}}function o(){let I=!1,dt=null,ft=null,Dt=null,Pt=null,ie=null,ne=null,Se=null,Ne=null;return{setTest:function(se){I||(se?Bt(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(se){dt!==se&&!I&&(r.stencilMask(se),dt=se)},setFunc:function(se,Oe,ui){(ft!==se||Dt!==Oe||Pt!==ui)&&(r.stencilFunc(se,Oe,ui),ft=se,Dt=Oe,Pt=ui)},setOp:function(se,Oe,ui){(ie!==se||ne!==Oe||Se!==ui)&&(r.stencilOp(se,Oe,ui),ie=se,ne=Oe,Se=ui)},setLocked:function(se){I=se},setClear:function(se){Ne!==se&&(r.clearStencil(se),Ne=se)},reset:function(){I=!1,dt=null,ft=null,Dt=null,Pt=null,ie=null,ne=null,Se=null,Ne=null}}}let a=new n,l=new s,h=new o,c=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,v=null,y=null,x=null,R=null,A=null,C=null,k=null,M=new ct(0,0,0),E=0,U=!1,F=null,K=null,L=null,B=null,W=null,J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,q=0,it=r.getParameter(r.VERSION);it.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(it)[1]),Z=q>=1):it.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Z=q>=2);let nt=null,pt={},X=r.getParameter(r.SCISSOR_BOX),Q=r.getParameter(r.VIEWPORT),mt=new he().fromArray(X),wt=new he().fromArray(Q);function yt(I,dt,ft,Dt){let Pt=new Uint8Array(4),ie=r.createTexture();r.bindTexture(I,ie),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<ft;ne++)i&&(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)?r.texImage3D(dt,0,r.RGBA,1,1,Dt,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(dt+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return ie}let It={};It[r.TEXTURE_2D]=yt(r.TEXTURE_2D,r.TEXTURE_2D,1),It[r.TEXTURE_CUBE_MAP]=yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(It[r.TEXTURE_2D_ARRAY]=yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),It[r.TEXTURE_3D]=yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Bt(r.DEPTH_TEST),l.setFunc(mr),gt(!1),S(Zl),Bt(r.CULL_FACE),$(Bi);function Bt(I){f[I]!==!0&&(r.enable(I),f[I]=!0)}function Et(I){f[I]!==!1&&(r.disable(I),f[I]=!1)}function Ut(I,dt){return p[I]!==dt?(r.bindFramebuffer(I,dt),p[I]=dt,i&&(I===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=dt),I===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=dt)),!0):!1}function P(I,dt){let ft=_,Dt=!1;if(I)if(ft=g.get(dt),ft===void 0&&(ft=[],g.set(dt,ft)),I.isWebGLMultipleRenderTargets){let Pt=I.texture;if(ft.length!==Pt.length||ft[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,ne=Pt.length;ie<ne;ie++)ft[ie]=r.COLOR_ATTACHMENT0+ie;ft.length=Pt.length,Dt=!0}}else ft[0]!==r.COLOR_ATTACHMENT0&&(ft[0]=r.COLOR_ATTACHMENT0,Dt=!0);else ft[0]!==r.BACK&&(ft[0]=r.BACK,Dt=!0);Dt&&(e.isWebGL2?r.drawBuffers(ft):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ft))}function at(I){return m!==I?(r.useProgram(I),m=I,!0):!1}let Y={[nn]:r.FUNC_ADD,[ku]:r.FUNC_SUBTRACT,[Uu]:r.FUNC_REVERSE_SUBTRACT};if(i)Y[jl]=r.MIN,Y[Ql]=r.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(Y[jl]=I.MIN_EXT,Y[Ql]=I.MAX_EXT)}let ot={[Nu]:r.ZERO,[Ou]:r.ONE,[Bu]:r.SRC_COLOR,[Ta]:r.SRC_ALPHA,[Wu]:r.SRC_ALPHA_SATURATE,[Vu]:r.DST_COLOR,[Hu]:r.DST_ALPHA,[Fu]:r.ONE_MINUS_SRC_COLOR,[Aa]:r.ONE_MINUS_SRC_ALPHA,[Gu]:r.ONE_MINUS_DST_COLOR,[zu]:r.ONE_MINUS_DST_ALPHA,[Xu]:r.CONSTANT_COLOR,[qu]:r.ONE_MINUS_CONSTANT_COLOR,[$u]:r.CONSTANT_ALPHA,[Yu]:r.ONE_MINUS_CONSTANT_ALPHA};function $(I,dt,ft,Dt,Pt,ie,ne,Se,Ne,se){if(I===Bi){d===!0&&(Et(r.BLEND),d=!1);return}if(d===!1&&(Bt(r.BLEND),d=!0),I!==Du){if(I!==v||se!==U){if((y!==nn||A!==nn)&&(r.blendEquation(r.FUNC_ADD),y=nn,A=nn),se)switch(I){case Fi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pr:r.blendFunc(r.ONE,r.ONE);break;case Kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case pr:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Kl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jl:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,R=null,C=null,k=null,M.set(0,0,0),E=0,v=I,U=se}return}Pt=Pt||dt,ie=ie||ft,ne=ne||Dt,(dt!==y||Pt!==A)&&(r.blendEquationSeparate(Y[dt],Y[Pt]),y=dt,A=Pt),(ft!==x||Dt!==R||ie!==C||ne!==k)&&(r.blendFuncSeparate(ot[ft],ot[Dt],ot[ie],ot[ne]),x=ft,R=Dt,C=ie,k=ne),(Se.equals(M)===!1||Ne!==E)&&(r.blendColor(Se.r,Se.g,Se.b,Ne),M.copy(Se),E=Ne),v=I,U=!1}function At(I,dt){I.side===Ze?Et(r.CULL_FACE):Bt(r.CULL_FACE);let ft=I.side===Re;dt&&(ft=!ft),gt(ft),I.blending===Fi&&I.transparent===!1?$(Bi):$(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);let Dt=I.stencilWrite;h.setTest(Dt),Dt&&(h.setMask(I.stencilWriteMask),h.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),h.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),O(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Bt(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(I){F!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),F=I)}function S(I){I!==Lu?(Bt(r.CULL_FACE),I!==K&&(I===Zl?r.cullFace(r.BACK):I===Iu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),K=I}function b(I){I!==L&&(Z&&r.lineWidth(I),L=I)}function O(I,dt,ft){I?(Bt(r.POLYGON_OFFSET_FILL),(B!==dt||W!==ft)&&(r.polygonOffset(dt,ft),B=dt,W=ft)):Et(r.POLYGON_OFFSET_FILL)}function st(I){I?Bt(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function tt(I){I===void 0&&(I=r.TEXTURE0+J-1),nt!==I&&(r.activeTexture(I),nt=I)}function j(I,dt,ft){ft===void 0&&(nt===null?ft=r.TEXTURE0+J-1:ft=nt);let Dt=pt[ft];Dt===void 0&&(Dt={type:void 0,texture:void 0},pt[ft]=Dt),(Dt.type!==I||Dt.texture!==dt)&&(nt!==ft&&(r.activeTexture(ft),nt=ft),r.bindTexture(I,dt||It[I]),Dt.type=I,Dt.texture=dt)}function Mt(){let I=pt[nt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ut(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ht(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Zt(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Vt(I){mt.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),mt.copy(I))}function Qt(I){wt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),wt.copy(I))}function me(I,dt){let ft=u.get(dt);ft===void 0&&(ft=new WeakMap,u.set(dt,ft));let Dt=ft.get(I);Dt===void 0&&(Dt=r.getUniformBlockIndex(dt,I.name),ft.set(I,Dt))}function qt(I,dt){let Dt=u.get(dt).get(I);c.get(dt)!==Dt&&(r.uniformBlockBinding(dt,Dt,I.__bindingPointIndex),c.set(dt,Dt))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},nt=null,pt={},p={},g=new WeakMap,_=[],m=null,d=!1,v=null,y=null,x=null,R=null,A=null,C=null,k=null,M=new ct(0,0,0),E=0,U=!1,F=null,K=null,L=null,B=null,W=null,mt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Bt,disable:Et,bindFramebuffer:Ut,drawBuffers:P,useProgram:at,setBlending:$,setMaterial:At,setFlipSided:gt,setCullFace:S,setLineWidth:b,setPolygonOffset:O,setScissorTest:st,activeTexture:tt,bindTexture:j,unbindTexture:Mt,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:Rt,texImage3D:bt,updateUBOMapping:me,uniformBlockBinding:qt,texStorage2D:Zt,texStorage3D:Nt,texSubImage2D:Ct,texSubImage3D:Ht,compressedTexSubImage2D:et,compressedTexSubImage3D:jt,scissor:Vt,viewport:Qt,reset:lt}}function _g(r,t,e,i,n,s,o){let a=n.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,b){return p?new OffscreenCanvas(S,b):wr("canvas")}function _(S,b,O,st){let tt=1;if((S.width>st||S.height>st)&&(tt=st/Math.max(S.width,S.height)),tt<1||b===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let j=b?Ia:Math.floor,Mt=j(tt*S.width),ut=j(tt*S.height);u===void 0&&(u=g(Mt,ut));let vt=O?g(Mt,ut):u;return vt.width=Mt,vt.height=ut,vt.getContext("2d").drawImage(S,0,0,Mt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Mt+"x"+ut+")."),vt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Ih(S.width)&&Ih(S.height)}function d(S){return a?!1:S.wrapS!==ai||S.wrapT!==ai||S.minFilter!==Fe&&S.minFilter!==je}function v(S,b){return S.generateMipmaps&&b&&S.minFilter!==Fe&&S.minFilter!==je}function y(S){r.generateMipmap(S)}function x(S,b,O,st,tt=!1){if(a===!1)return b;if(S!==null){if(r[S]!==void 0)return r[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=b;if(b===r.RED&&(O===r.FLOAT&&(j=r.R32F),O===r.HALF_FLOAT&&(j=r.R16F),O===r.UNSIGNED_BYTE&&(j=r.R8)),b===r.RED_INTEGER&&(O===r.UNSIGNED_BYTE&&(j=r.R8UI),O===r.UNSIGNED_SHORT&&(j=r.R16UI),O===r.UNSIGNED_INT&&(j=r.R32UI),O===r.BYTE&&(j=r.R8I),O===r.SHORT&&(j=r.R16I),O===r.INT&&(j=r.R32I)),b===r.RG&&(O===r.FLOAT&&(j=r.RG32F),O===r.HALF_FLOAT&&(j=r.RG16F),O===r.UNSIGNED_BYTE&&(j=r.RG8)),b===r.RGBA){let Mt=tt?yr:te.getTransfer(st);O===r.FLOAT&&(j=r.RGBA32F),O===r.HALF_FLOAT&&(j=r.RGBA16F),O===r.UNSIGNED_BYTE&&(j=Mt===oe?r.SRGB8_ALPHA8:r.RGBA8),O===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),O===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function R(S,b,O){return v(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Fe&&S.minFilter!==je?Math.log2(Math.max(b.width,b.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?b.mipmaps.length:1}function A(S){return S===Fe||S===th||S===Go?r.NEAREST:r.LINEAR}function C(S){let b=S.target;b.removeEventListener("dispose",C),M(b),b.isVideoTexture&&c.delete(b)}function k(S){let b=S.target;b.removeEventListener("dispose",k),U(b)}function M(S){let b=i.get(S);if(b.__webglInit===void 0)return;let O=S.source,st=f.get(O);if(st){let tt=st[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(S),Object.keys(st).length===0&&f.delete(O)}i.remove(S)}function E(S){let b=i.get(S);r.deleteTexture(b.__webglTexture);let O=S.source,st=f.get(O);delete st[b.__cacheKey],o.memory.textures--}function U(S){let b=S.texture,O=i.get(S),st=i.get(b);if(st.__webglTexture!==void 0&&(r.deleteTexture(st.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(O.__webglFramebuffer[tt]))for(let j=0;j<O.__webglFramebuffer[tt].length;j++)r.deleteFramebuffer(O.__webglFramebuffer[tt][j]);else r.deleteFramebuffer(O.__webglFramebuffer[tt]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[tt])}else{if(Array.isArray(O.__webglFramebuffer))for(let tt=0;tt<O.__webglFramebuffer.length;tt++)r.deleteFramebuffer(O.__webglFramebuffer[tt]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let tt=0;tt<O.__webglColorRenderbuffer.length;tt++)O.__webglColorRenderbuffer[tt]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[tt]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let tt=0,j=b.length;tt<j;tt++){let Mt=i.get(b[tt]);Mt.__webglTexture&&(r.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(b[tt])}i.remove(b),i.remove(S)}let F=0;function K(){F=0}function L(){let S=F;return S>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+n.maxTextures),F+=1,S}function B(S){let b=[];return b.push(S.wrapS),b.push(S.wrapT),b.push(S.wrapR||0),b.push(S.magFilter),b.push(S.minFilter),b.push(S.anisotropy),b.push(S.internalFormat),b.push(S.format),b.push(S.type),b.push(S.generateMipmaps),b.push(S.premultiplyAlpha),b.push(S.flipY),b.push(S.unpackAlignment),b.push(S.colorSpace),b.join()}function W(S,b){let O=i.get(S);if(S.isVideoTexture&&At(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let st=S.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(O,S,b);return}}e.bindTexture(r.TEXTURE_2D,O.__webglTexture,r.TEXTURE0+b)}function J(S,b){let O=i.get(S);if(S.version>0&&O.__version!==S.version){mt(O,S,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,O.__webglTexture,r.TEXTURE0+b)}function Z(S,b){let O=i.get(S);if(S.version>0&&O.__version!==S.version){mt(O,S,b);return}e.bindTexture(r.TEXTURE_3D,O.__webglTexture,r.TEXTURE0+b)}function q(S,b){let O=i.get(S);if(S.version>0&&O.__version!==S.version){wt(O,S,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+b)}let it={[ln]:r.REPEAT,[ai]:r.CLAMP_TO_EDGE,[Pa]:r.MIRRORED_REPEAT},nt={[Fe]:r.NEAREST,[th]:r.NEAREST_MIPMAP_NEAREST,[Go]:r.NEAREST_MIPMAP_LINEAR,[je]:r.LINEAR,[hd]:r.LINEAR_MIPMAP_NEAREST,[ms]:r.LINEAR_MIPMAP_LINEAR},pt={[bd]:r.NEVER,[Ad]:r.ALWAYS,[Md]:r.LESS,[Hc]:r.LEQUAL,[wd]:r.EQUAL,[Td]:r.GEQUAL,[Ed]:r.GREATER,[Sd]:r.NOTEQUAL};function X(S,b,O){if(O?(r.texParameteri(S,r.TEXTURE_WRAP_S,it[b.wrapS]),r.texParameteri(S,r.TEXTURE_WRAP_T,it[b.wrapT]),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,it[b.wrapR]),r.texParameteri(S,r.TEXTURE_MAG_FILTER,nt[b.magFilter]),r.texParameteri(S,r.TEXTURE_MIN_FILTER,nt[b.minFilter])):(r.texParameteri(S,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(S,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(S===r.TEXTURE_3D||S===r.TEXTURE_2D_ARRAY)&&r.texParameteri(S,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(b.wrapS!==ai||b.wrapT!==ai)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(S,r.TEXTURE_MAG_FILTER,A(b.magFilter)),r.texParameteri(S,r.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==Fe&&b.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(r.texParameteri(S,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(S,r.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let st=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Fe||b.minFilter!==Go&&b.minFilter!==ms||b.type===Oi&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===hi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(r.texParameterf(S,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Q(S,b){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,b.addEventListener("dispose",C));let st=b.source,tt=f.get(st);tt===void 0&&(tt={},f.set(st,tt));let j=B(b);if(j!==S.__cacheKey){tt[j]===void 0&&(tt[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[j].usedTimes++;let Mt=tt[S.__cacheKey];Mt!==void 0&&(tt[S.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(b)),S.__cacheKey=j,S.__webglTexture=tt[j].texture}return O}function mt(S,b,O){let st=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(st=r.TEXTURE_3D);let tt=Q(S,b),j=b.source;e.bindTexture(st,S.__webglTexture,r.TEXTURE0+O);let Mt=i.get(j);if(j.version!==Mt.__version||tt===!0){e.activeTexture(r.TEXTURE0+O);let ut=te.getPrimaries(te.workingColorSpace),vt=b.colorSpace===Qe?null:te.getPrimaries(b.colorSpace),Ct=b.colorSpace===Qe||ut===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let Ht=d(b)&&m(b.image)===!1,et=_(b.image,Ht,!1,n.maxTextureSize);et=gt(b,et);let jt=m(et)||a,Zt=s.convert(b.format,b.colorSpace),Nt=s.convert(b.type),Rt=x(b.internalFormat,Zt,Nt,b.colorSpace,b.isVideoTexture);X(st,b,jt);let bt,Vt=b.mipmaps,Qt=a&&b.isVideoTexture!==!0&&Rt!==Bc,me=Mt.__version===void 0||tt===!0,qt=R(b,et,jt);if(b.isDepthTexture)Rt=r.DEPTH_COMPONENT,a?b.type===Oi?Rt=r.DEPTH_COMPONENT32F:b.type===Ni?Rt=r.DEPTH_COMPONENT24:b.type===rn?Rt=r.DEPTH24_STENCIL8:Rt=r.DEPTH_COMPONENT16:b.type===Oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===on&&Rt===r.DEPTH_COMPONENT&&b.type!==El&&b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ni,Nt=s.convert(b.type)),b.format===Vn&&Rt===r.DEPTH_COMPONENT&&(Rt=r.DEPTH_STENCIL,b.type!==rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=rn,Nt=s.convert(b.type))),me&&(Qt?e.texStorage2D(r.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Rt,et.width,et.height,0,Zt,Nt,null));else if(b.isDataTexture)if(Vt.length>0&&jt){Qt&&me&&e.texStorage2D(r.TEXTURE_2D,qt,Rt,Vt[0].width,Vt[0].height);for(let lt=0,I=Vt.length;lt<I;lt++)bt=Vt[lt],Qt?e.texSubImage2D(r.TEXTURE_2D,lt,0,0,bt.width,bt.height,Zt,Nt,bt.data):e.texImage2D(r.TEXTURE_2D,lt,Rt,bt.width,bt.height,0,Zt,Nt,bt.data);b.generateMipmaps=!1}else Qt?(me&&e.texStorage2D(r.TEXTURE_2D,qt,Rt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,et.width,et.height,Zt,Nt,et.data)):e.texImage2D(r.TEXTURE_2D,0,Rt,et.width,et.height,0,Zt,Nt,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Qt&&me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Rt,Vt[0].width,Vt[0].height,et.depth);for(let lt=0,I=Vt.length;lt<I;lt++)bt=Vt[lt],b.format!==li?Zt!==null?Qt?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,et.depth,Zt,bt.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,lt,Rt,bt.width,bt.height,et.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(r.TEXTURE_2D_ARRAY,lt,0,0,0,bt.width,bt.height,et.depth,Zt,Nt,bt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,lt,Rt,bt.width,bt.height,et.depth,0,Zt,Nt,bt.data)}else{Qt&&me&&e.texStorage2D(r.TEXTURE_2D,qt,Rt,Vt[0].width,Vt[0].height);for(let lt=0,I=Vt.length;lt<I;lt++)bt=Vt[lt],b.format!==li?Zt!==null?Qt?e.compressedTexSubImage2D(r.TEXTURE_2D,lt,0,0,bt.width,bt.height,Zt,bt.data):e.compressedTexImage2D(r.TEXTURE_2D,lt,Rt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(r.TEXTURE_2D,lt,0,0,bt.width,bt.height,Zt,Nt,bt.data):e.texImage2D(r.TEXTURE_2D,lt,Rt,bt.width,bt.height,0,Zt,Nt,bt.data)}else if(b.isDataArrayTexture)Qt?(me&&e.texStorage3D(r.TEXTURE_2D_ARRAY,qt,Rt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Zt,Nt,et.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,Zt,Nt,et.data);else if(b.isData3DTexture)Qt?(me&&e.texStorage3D(r.TEXTURE_3D,qt,Rt,et.width,et.height,et.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Zt,Nt,et.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,Zt,Nt,et.data);else if(b.isFramebufferTexture){if(me)if(Qt)e.texStorage2D(r.TEXTURE_2D,qt,Rt,et.width,et.height);else{let lt=et.width,I=et.height;for(let dt=0;dt<qt;dt++)e.texImage2D(r.TEXTURE_2D,dt,Rt,lt,I,0,Zt,Nt,null),lt>>=1,I>>=1}}else if(Vt.length>0&&jt){Qt&&me&&e.texStorage2D(r.TEXTURE_2D,qt,Rt,Vt[0].width,Vt[0].height);for(let lt=0,I=Vt.length;lt<I;lt++)bt=Vt[lt],Qt?e.texSubImage2D(r.TEXTURE_2D,lt,0,0,Zt,Nt,bt):e.texImage2D(r.TEXTURE_2D,lt,Rt,Zt,Nt,bt);b.generateMipmaps=!1}else Qt?(me&&e.texStorage2D(r.TEXTURE_2D,qt,Rt,et.width,et.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,Zt,Nt,et)):e.texImage2D(r.TEXTURE_2D,0,Rt,Zt,Nt,et);v(b,jt)&&y(st),Mt.__version=j.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function wt(S,b,O){if(b.image.length!==6)return;let st=Q(S,b),tt=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,S.__webglTexture,r.TEXTURE0+O);let j=i.get(tt);if(tt.version!==j.__version||st===!0){e.activeTexture(r.TEXTURE0+O);let Mt=te.getPrimaries(te.workingColorSpace),ut=b.colorSpace===Qe?null:te.getPrimaries(b.colorSpace),vt=b.colorSpace===Qe||Mt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Ct=b.isCompressedTexture||b.image[0].isCompressedTexture,Ht=b.image[0]&&b.image[0].isDataTexture,et=[];for(let lt=0;lt<6;lt++)!Ct&&!Ht?et[lt]=_(b.image[lt],!1,!0,n.maxCubemapSize):et[lt]=Ht?b.image[lt].image:b.image[lt],et[lt]=gt(b,et[lt]);let jt=et[0],Zt=m(jt)||a,Nt=s.convert(b.format,b.colorSpace),Rt=s.convert(b.type),bt=x(b.internalFormat,Nt,Rt,b.colorSpace),Vt=a&&b.isVideoTexture!==!0,Qt=j.__version===void 0||st===!0,me=R(b,jt,Zt);X(r.TEXTURE_CUBE_MAP,b,Zt);let qt;if(Ct){Vt&&Qt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,me,bt,jt.width,jt.height);for(let lt=0;lt<6;lt++){qt=et[lt].mipmaps;for(let I=0;I<qt.length;I++){let dt=qt[I];b.format!==li?Nt!==null?Vt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,bt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,0,0,dt.width,dt.height,Nt,Rt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I,bt,dt.width,dt.height,0,Nt,Rt,dt.data)}}}else{qt=b.mipmaps,Vt&&Qt&&(qt.length>0&&me++,e.texStorage2D(r.TEXTURE_CUBE_MAP,me,bt,et[0].width,et[0].height));for(let lt=0;lt<6;lt++)if(Ht){Vt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,et[lt].width,et[lt].height,Nt,Rt,et[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,bt,et[lt].width,et[lt].height,0,Nt,Rt,et[lt].data);for(let I=0;I<qt.length;I++){let ft=qt[I].image[lt].image;Vt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,0,0,ft.width,ft.height,Nt,Rt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,bt,ft.width,ft.height,0,Nt,Rt,ft.data)}}else{Vt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Nt,Rt,et[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,bt,Nt,Rt,et[lt]);for(let I=0;I<qt.length;I++){let dt=qt[I];Vt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,0,0,Nt,Rt,dt.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,I+1,bt,Nt,Rt,dt.image[lt])}}}v(b,Zt)&&y(r.TEXTURE_CUBE_MAP),j.__version=tt.version,b.onUpdate&&b.onUpdate(b)}S.__version=b.version}function yt(S,b,O,st,tt,j){let Mt=s.convert(O.format,O.colorSpace),ut=s.convert(O.type),vt=x(O.internalFormat,Mt,ut,O.colorSpace);if(!i.get(b).__hasExternalTextures){let Ht=Math.max(1,b.width>>j),et=Math.max(1,b.height>>j);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,vt,Ht,et,b.depth,0,Mt,ut,null):e.texImage2D(tt,j,vt,Ht,et,0,Mt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,S),$(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,tt,i.get(O).__webglTexture,0,ot(b)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,tt,i.get(O).__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(S,b,O){if(r.bindRenderbuffer(r.RENDERBUFFER,S),b.depthBuffer&&!b.stencilBuffer){let st=a===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(O||$(b)){let tt=b.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Oi?st=r.DEPTH_COMPONENT32F:tt.type===Ni&&(st=r.DEPTH_COMPONENT24));let j=ot(b);$(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j,st,b.width,b.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,j,st,b.width,b.height)}else r.renderbufferStorage(r.RENDERBUFFER,st,b.width,b.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,S)}else if(b.depthBuffer&&b.stencilBuffer){let st=ot(b);O&&$(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,b.width,b.height):$(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,st,r.DEPTH24_STENCIL8,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,S)}else{let st=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let tt=0;tt<st.length;tt++){let j=st[tt],Mt=s.convert(j.format,j.colorSpace),ut=s.convert(j.type),vt=x(j.internalFormat,Mt,ut,j.colorSpace),Ct=ot(b);O&&$(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ct,vt,b.width,b.height):$(b)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ct,vt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,vt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(S,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,S),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);let st=i.get(b.depthTexture).__webglTexture,tt=ot(b);if(b.depthTexture.format===on)$(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,st,0);else if(b.depthTexture.format===Vn)$(b)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0,tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Et(S){let b=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Bt(b.__webglFramebuffer,S)}else if(O){b.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[st]),b.__webglDepthbuffer[st]=r.createRenderbuffer(),It(b.__webglDepthbuffer[st],S,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),It(b.__webglDepthbuffer,S,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(S,b,O){let st=i.get(S);b!==void 0&&yt(st.__webglFramebuffer,S,S.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),O!==void 0&&Et(S)}function P(S){let b=S.texture,O=i.get(S),st=i.get(b);S.addEventListener("dispose",k),S.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=b.version,o.memory.textures++);let tt=S.isWebGLCubeRenderTarget===!0,j=S.isWebGLMultipleRenderTargets===!0,Mt=m(S)||a;if(tt){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let vt=0;vt<b.mipmaps.length;vt++)O.__webglFramebuffer[ut][vt]=r.createFramebuffer()}else O.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)O.__webglFramebuffer[ut]=r.createFramebuffer()}else O.__webglFramebuffer=r.createFramebuffer();if(j)if(n.drawBuffers){let ut=S.texture;for(let vt=0,Ct=ut.length;vt<Ct;vt++){let Ht=i.get(ut[vt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&$(S)===!1){let ut=j?b:[b];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let vt=0;vt<ut.length;vt++){let Ct=ut[vt];O.__webglColorRenderbuffer[vt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,O.__webglColorRenderbuffer[vt]);let Ht=s.convert(Ct.format,Ct.colorSpace),et=s.convert(Ct.type),jt=x(Ct.internalFormat,Ht,et,Ct.colorSpace,S.isXRRenderTarget===!0),Zt=ot(S);r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt,jt,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+vt,r.RENDERBUFFER,O.__webglColorRenderbuffer[vt])}r.bindRenderbuffer(r.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),It(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(tt){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),X(r.TEXTURE_CUBE_MAP,b,Mt);for(let ut=0;ut<6;ut++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)yt(O.__webglFramebuffer[ut][vt],S,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,vt);else yt(O.__webglFramebuffer[ut],S,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);v(b,Mt)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(j){let ut=S.texture;for(let vt=0,Ct=ut.length;vt<Ct;vt++){let Ht=ut[vt],et=i.get(Ht);e.bindTexture(r.TEXTURE_2D,et.__webglTexture),X(r.TEXTURE_2D,Ht,Mt),yt(O.__webglFramebuffer,S,Ht,r.COLOR_ATTACHMENT0+vt,r.TEXTURE_2D,0),v(Ht,Mt)&&y(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ut=S.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,st.__webglTexture),X(ut,b,Mt),a&&b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)yt(O.__webglFramebuffer[vt],S,b,r.COLOR_ATTACHMENT0,ut,vt);else yt(O.__webglFramebuffer,S,b,r.COLOR_ATTACHMENT0,ut,0);v(b,Mt)&&y(ut),e.unbindTexture()}S.depthBuffer&&Et(S)}function at(S){let b=m(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let st=0,tt=O.length;st<tt;st++){let j=O[st];if(v(j,b)){let Mt=S.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ut=i.get(j).__webglTexture;e.bindTexture(Mt,ut),y(Mt),e.unbindTexture()}}}function Y(S){if(a&&S.samples>0&&$(S)===!1){let b=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,st=S.height,tt=r.COLOR_BUFFER_BIT,j=[],Mt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=i.get(S),vt=S.isWebGLMultipleRenderTargets===!0;if(vt)for(let Ct=0;Ct<b.length;Ct++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){j.push(r.COLOR_ATTACHMENT0+Ct),S.depthBuffer&&j.push(Mt);let Ht=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ht===!1&&(S.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),S.stencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),vt&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Ct]),Ht===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Mt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Mt])),vt){let et=i.get(b[Ct]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,O,st,0,0,O,st,tt,r.NEAREST),h&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,j)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),vt)for(let Ct=0;Ct<b.length;Ct++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.RENDERBUFFER,ut.__webglColorRenderbuffer[Ct]);let Ht=i.get(b[Ct]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ct,r.TEXTURE_2D,Ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function ot(S){return Math.min(n.maxSamples,S.samples)}function $(S){let b=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function At(S){let b=o.render.frame;c.get(S)!==b&&(c.set(S,b),S.update())}function gt(S,b){let O=S.colorSpace,st=S.format,tt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===La||O!==Si&&O!==Qe&&(te.getTransfer(O)===oe?a===!1?t.has("EXT_sRGB")===!0&&st===li?(S.format=La,S.minFilter=je,S.generateMipmaps=!1):b=Er.sRGBToLinear(b):(st!==li||tt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Ut,this.setupRenderTarget=P,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=$}function yg(r,t,e){let i=e.isWebGL2;function n(s,o=Qe){let a,l=te.getTransfer(o);if(s===zi)return r.UNSIGNED_BYTE;if(s===Dc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===kc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cd)return r.BYTE;if(s===ud)return r.SHORT;if(s===El)return r.UNSIGNED_SHORT;if(s===Ic)return r.INT;if(s===Ni)return r.UNSIGNED_INT;if(s===Oi)return r.FLOAT;if(s===hi)return i?r.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===dd)return r.ALPHA;if(s===li)return r.RGBA;if(s===fd)return r.LUMINANCE;if(s===pd)return r.LUMINANCE_ALPHA;if(s===on)return r.DEPTH_COMPONENT;if(s===Vn)return r.DEPTH_STENCIL;if(s===La)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===md)return r.RED;if(s===Uc)return r.RED_INTEGER;if(s===gd)return r.RG;if(s===Nc)return r.RG_INTEGER;if(s===Oc)return r.RGBA_INTEGER;if(s===Wo||s===Xo||s===qo||s===$o)if(l===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Wo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Wo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===eh||s===ih||s===nh||s===sh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ih)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Bc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rh||s===oh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===rh)return l===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===oh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ah||s===lh||s===hh||s===ch||s===uh||s===dh||s===fh||s===ph||s===mh||s===gh||s===_h||s===yh||s===vh||s===xh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ah)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ch)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ph)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_h)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xh)return l===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Yo||s===bh||s===Mh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Yo)return l===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Mh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_d||s===wh||s===Eh||s===Sh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Yo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===wh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rn?i?r.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}var Xa=class extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Kt=class extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},vg={type:"move"},us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),d=this._getHandJoint(h,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let c=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=c.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&f>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},qa=class extends Gi{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,h=null,c=null,u=null,f=null,p=null,g=null,_=e.getContextAttributes(),m=null,d=null,v=[],y=[],x=new rt,R=null,A=new Ie;A.layers.enable(1),A.viewport=new he;let C=new Ie;C.layers.enable(2),C.viewport=new he;let k=[A,C],M=new Xa;M.layers.enable(1),M.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=v[X];return Q===void 0&&(Q=new us,v[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=v[X];return Q===void 0&&(Q=new us,v[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=v[X];return Q===void 0&&(Q=new us,v[X]=Q),Q.getHandSpace()};function F(X){let Q=y.indexOf(X.inputSource);if(Q===-1)return;let mt=v[Q];mt!==void 0&&(mt.update(X.inputSource,X.frame,h||o),mt.dispatchEvent({type:X.type,data:X.inputSource}))}function K(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",L);for(let X=0;X<v.length;X++){let Q=y[X];Q!==null&&(y[X]=null,v[X].disconnect(Q))}E=null,U=null,t.setRenderTarget(m),p=null,f=null,u=null,n=null,d=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(m=t.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",K),n.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(x),n.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,e,Q),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new He(p.framebufferWidth,p.framebufferHeight,{format:li,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,mt=null,wt=null;_.depth&&(wt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=_.stencil?Vn:on,mt=_.stencil?rn:Ni);let yt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:s};u=new XRWebGLBinding(n,e),f=u.createProjectionLayer(yt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new He(f.textureWidth,f.textureHeight,{format:li,type:zi,depthTexture:new Ir(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let It=t.properties.get(d);It.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await n.requestReferenceSpace(a),pt.setContext(n),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function L(X){for(let Q=0;Q<X.removed.length;Q++){let mt=X.removed[Q],wt=y.indexOf(mt);wt>=0&&(y[wt]=null,v[wt].disconnect(mt))}for(let Q=0;Q<X.added.length;Q++){let mt=X.added[Q],wt=y.indexOf(mt);if(wt===-1){for(let It=0;It<v.length;It++)if(It>=y.length){y.push(mt),wt=It;break}else if(y[It]===null){y[It]=mt,wt=It;break}if(wt===-1)break}let yt=v[wt];yt&&yt.connect(mt)}}let B=new w,W=new w;function J(X,Q,mt){B.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(mt.matrixWorld);let wt=B.distanceTo(W),yt=Q.projectionMatrix.elements,It=mt.projectionMatrix.elements,Bt=yt[14]/(yt[10]-1),Et=yt[14]/(yt[10]+1),Ut=(yt[9]+1)/yt[5],P=(yt[9]-1)/yt[5],at=(yt[8]-1)/yt[0],Y=(It[8]+1)/It[0],ot=Bt*at,$=Bt*Y,At=wt/(-at+Y),gt=At*-at;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(gt),X.translateZ(At),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let S=Bt+At,b=Et+At,O=ot-gt,st=$+(wt-gt),tt=Ut*Et/b*S,j=P*Et/b*S;X.projectionMatrix.makePerspective(O,st,tt,j,S,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Z(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;M.near=C.near=A.near=X.near,M.far=C.far=A.far=X.far,(E!==M.near||U!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,U=M.far);let Q=X.parent,mt=M.cameras;Z(M,Q);for(let wt=0;wt<mt.length;wt++)Z(mt[wt],Q);mt.length===2?J(M,A,C):M.projectionMatrix.copy(A.projectionMatrix),q(X,M,Q)};function q(X,Q,mt){mt===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(mt.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Mr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let it=null;function nt(X,Q){if(c=Q.getViewerPose(h||o),g=Q,c!==null){let mt=c.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let wt=!1;mt.length!==M.cameras.length&&(M.cameras.length=0,wt=!0);for(let yt=0;yt<mt.length;yt++){let It=mt[yt],Bt=null;if(p!==null)Bt=p.getViewport(It);else{let Ut=u.getViewSubImage(f,It);Bt=Ut.viewport,yt===0&&(t.setRenderTargetTextures(d,Ut.colorTexture,f.ignoreDepthValues?void 0:Ut.depthStencilTexture),t.setRenderTarget(d))}let Et=k[yt];Et===void 0&&(Et=new Ie,Et.layers.enable(yt),Et.viewport=new he,k[yt]=Et),Et.matrix.fromArray(It.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(It.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),yt===0&&(M.matrix.copy(Et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),wt===!0&&M.cameras.push(Et)}}for(let mt=0;mt<v.length;mt++){let wt=y[mt],yt=v[mt];wt!==null&&yt!==void 0&&yt.update(wt,Q,h||o)}it&&it(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let pt=new Wc;pt.setAnimationLoop(nt),this.setAnimationLoop=function(X){it=X},this.dispose=function(){}}};function xg(r,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Gc(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function n(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Re&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Re&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let y=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function bg(r,t,e,i){let n={},s={},o=[],a=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){let x=y.program;i.uniformBlockBinding(v,x)}function h(v,y){let x=n[v.id];x===void 0&&(g(v),x=c(v),n[v.id]=x,v.addEventListener("dispose",m));let R=y.program;i.updateUBOMapping(v,R);let A=t.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function c(v){let y=u();v.__bindingPointIndex=y;let x=r.createBuffer(),R=v.__size,A=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,R,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=n[v.id],x=v.uniforms,R=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){let k=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,E=k.length;M<E;M++){let U=k[M];if(p(U,A,M,R)===!0){let F=U.__offset,K=Array.isArray(U.value)?U.value:[U.value],L=0;for(let B=0;B<K.length;B++){let W=K[B],J=_(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+L,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,U.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(v,y,x,R){let A=v.value,C=y+"_"+x;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{let k=R[C];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return R[C]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(v){let y=v.uniforms,x=0,R=16;for(let C=0,k=y.length;C<k;C++){let M=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,U=M.length;E<U;E++){let F=M[E],K=Array.isArray(F.value)?F.value:[F.value];for(let L=0,B=K.length;L<B;L++){let W=K[L],J=_(W),Z=x%R;Z!==0&&R-Z<J.boundary&&(x+=R-Z),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=J.storage}}}let A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function d(){for(let v in n)r.deleteBuffer(n[v]);o=[],n={},s={}}return{bind:l,update:h,dispose:d}}var ys=class{constructor(t={}){let{canvas:e=Cd(),context:i=null,depth:n=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;let y=this,x=!1,R=0,A=0,C=null,k=-1,M=null,E=new he,U=new he,F=null,K=new ct(0),L=0,B=e.width,W=e.height,J=1,Z=null,q=null,it=new he(0,0,B,W),nt=new he(0,0,B,W),pt=!1,X=new _s,Q=!1,mt=!1,wt=null,yt=new re,It=new rt,Bt=new w,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ut(){return C===null?J:1}let P=i;function at(T,N){for(let z=0;z<T.length;z++){let G=T[z],H=e.getContext(G,N);if(H!==null)return H}return null}try{let T={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",dt,!1),P===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),P=at(N,T),P===null)throw at(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Y,ot,$,At,gt,S,b,O,st,tt,j,Mt,ut,vt,Ct,Ht,et,jt,Zt,Nt,Rt,bt,Vt,Qt;function me(){Y=new Hm(P),ot=new km(P,Y,t),Y.init(ot),bt=new yg(P,Y,ot),$=new gg(P,Y,ot),At=new Gm(P),gt=new sg,S=new _g(P,Y,$,gt,ot,bt,At),b=new Nm(y),O=new Fm(y),st=new Kd(P,ot),Vt=new Im(P,Y,st,ot),tt=new zm(P,st,At,Vt),j=new $m(P,tt,st,At),Zt=new qm(P,ot,S),Ht=new Um(gt),Mt=new ng(y,b,O,Y,ot,Vt,Ht),ut=new xg(y,gt),vt=new og,Ct=new dg(Y,ot),jt=new Lm(y,b,O,$,j,f,l),et=new mg(y,j,ot),Qt=new bg(P,At,ot,$),Nt=new Dm(P,Y,At,ot),Rt=new Vm(P,Y,At,ot),At.programs=Mt.programs,y.capabilities=ot,y.extensions=Y,y.properties=gt,y.renderLists=vt,y.shadowMap=et,y.state=$,y.info=At}me();let qt=new qa(y,P);this.xr=qt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Y.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Y.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(B,W,!1))},this.getSize=function(T){return T.set(B,W)},this.setSize=function(T,N,z=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,W=N,e.width=Math.floor(T*J),e.height=Math.floor(N*J),z===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(B*J,W*J).floor()},this.setDrawingBufferSize=function(T,N,z){B=T,W=N,J=z,e.width=Math.floor(T*z),e.height=Math.floor(N*z),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,N,z,G){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,N,z,G),$.viewport(E.copy(it).multiplyScalar(J).floor())},this.getScissor=function(T){return T.copy(nt)},this.setScissor=function(T,N,z,G){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,N,z,G),$.scissor(U.copy(nt).multiplyScalar(J).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(T){$.setScissorTest(pt=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(T=!0,N=!0,z=!0){let G=0;if(T){let H=!1;if(C!==null){let _t=C.texture.format;H=_t===Oc||_t===Nc||_t===Uc}if(H){let _t=C.texture.type,St=_t===zi||_t===Ni||_t===El||_t===rn||_t===Dc||_t===kc,Lt=jt.getClearColor(),kt=jt.getClearAlpha(),Xt=Lt.r,Ft=Lt.g,zt=Lt.b;St?(p[0]=Xt,p[1]=Ft,p[2]=zt,p[3]=kt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Xt,g[1]=Ft,g[2]=zt,g[3]=kt,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}N&&(G|=P.DEPTH_BUFFER_BIT),z&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),vt.dispose(),Ct.dispose(),gt.dispose(),b.dispose(),O.dispose(),j.dispose(),Vt.dispose(),Qt.dispose(),Mt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Ne),qt.removeEventListener("sessionend",se),wt&&(wt.dispose(),wt=null),Oe.stop()};function lt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let T=At.autoReset,N=et.enabled,z=et.autoUpdate,G=et.needsUpdate,H=et.type;me(),At.autoReset=T,et.enabled=N,et.autoUpdate=z,et.needsUpdate=G,et.type=H}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ft(T){let N=T.target;N.removeEventListener("dispose",ft),Dt(N)}function Dt(T){Pt(T),gt.remove(T)}function Pt(T){let N=gt.get(T).programs;N!==void 0&&(N.forEach(function(z){Mt.releaseProgram(z)}),T.isShaderMaterial&&Mt.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,z,G,H,_t){N===null&&(N=Et);let St=H.isMesh&&H.matrixWorld.determinant()<0,Lt=Au(T,N,z,G,H);$.setMaterial(G,St);let kt=z.index,Xt=1;if(G.wireframe===!0){if(kt=tt.getWireframeAttribute(z),kt===void 0)return;Xt=2}let Ft=z.drawRange,zt=z.attributes.position,ye=Ft.start*Xt,qe=(Ft.start+Ft.count)*Xt;_t!==null&&(ye=Math.max(ye,_t.start*Xt),qe=Math.min(qe,(_t.start+_t.count)*Xt)),kt!==null?(ye=Math.max(ye,0),qe=Math.min(qe,kt.count)):zt!=null&&(ye=Math.max(ye,0),qe=Math.min(qe,zt.count));let Te=qe-ye;if(Te<0||Te===1/0)return;Vt.setup(H,G,Lt,z,kt);let gi,fe=Nt;if(kt!==null&&(gi=st.get(kt),fe=Rt,fe.setIndex(gi)),H.isMesh)G.wireframe===!0?($.setLineWidth(G.wireframeLinewidth*Ut()),fe.setMode(P.LINES)):fe.setMode(P.TRIANGLES);else if(H.isLine){let $t=G.linewidth;$t===void 0&&($t=1),$.setLineWidth($t*Ut()),H.isLineSegments?fe.setMode(P.LINES):H.isLineLoop?fe.setMode(P.LINE_LOOP):fe.setMode(P.LINE_STRIP)}else H.isPoints?fe.setMode(P.POINTS):H.isSprite&&fe.setMode(P.TRIANGLES);if(H.isBatchedMesh)fe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)fe.renderInstances(ye,Te,H.count);else if(z.isInstancedBufferGeometry){let $t=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Fo=Math.min(z.instanceCount,$t);fe.renderInstances(ye,Te,Fo)}else fe.render(ye,Te)};function ie(T,N,z){T.transparent===!0&&T.side===Ze&&T.forceSinglePass===!1?(T.side=Re,T.needsUpdate=!0,Bs(T,N,z),T.side=Vi,T.needsUpdate=!0,Bs(T,N,z),T.side=Ze):Bs(T,N,z)}this.compile=function(T,N,z=null){z===null&&(z=T),m=Ct.get(z),m.init(),v.push(m),z.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==z&&T.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(y._useLegacyLights);let G=new Set;return T.traverse(function(H){let _t=H.material;if(_t)if(Array.isArray(_t))for(let St=0;St<_t.length;St++){let Lt=_t[St];ie(Lt,z,H),G.add(Lt)}else ie(_t,z,H),G.add(_t)}),v.pop(),m=null,G},this.compileAsync=function(T,N,z=null){let G=this.compile(T,N,z);return new Promise(H=>{function _t(){if(G.forEach(function(St){gt.get(St).currentProgram.isReady()&&G.delete(St)}),G.size===0){H(T);return}setTimeout(_t,10)}Y.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ne=null;function Se(T){ne&&ne(T)}function Ne(){Oe.stop()}function se(){Oe.start()}let Oe=new Wc;Oe.setAnimationLoop(Se),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(T){ne=T,qt.setAnimationLoop(T),T===null?Oe.stop():Oe.start()},qt.addEventListener("sessionstart",Ne),qt.addEventListener("sessionend",se),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(N),N=qt.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,N,C),m=Ct.get(T,v.length),m.init(),v.push(m),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(yt),mt=this.localClippingEnabled,Q=Ht.init(this.clippingPlanes,mt),_=vt.get(T,d.length),_.init(),d.push(_),ui(T,N,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Z,q),this.info.render.frame++,Q===!0&&Ht.beginShadows();let z=m.state.shadowsArray;if(et.render(z,T,N),Q===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(_,T),m.setupLights(y._useLegacyLights),N.isArrayCamera){let G=N.cameras;for(let H=0,_t=G.length;H<_t;H++){let St=G[H];Gl(_,T,St,St.viewport)}}else Gl(_,T,N);C!==null&&(S.updateMultisampleRenderTarget(C),S.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(y,T,N),Vt.resetDefaultState(),k=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ui(T,N,z,G){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){G&&Bt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);let St=j.update(T),Lt=T.material;Lt.visible&&_.push(T,St,Lt,z,Bt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){let St=j.update(T),Lt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Bt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Bt.copy(St.boundingSphere.center)),Bt.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(Lt)){let kt=St.groups;for(let Xt=0,Ft=kt.length;Xt<Ft;Xt++){let zt=kt[Xt],ye=Lt[zt.materialIndex];ye&&ye.visible&&_.push(T,St,ye,z,Bt.z,zt)}}else Lt.visible&&_.push(T,St,Lt,z,Bt.z,null)}}let _t=T.children;for(let St=0,Lt=_t.length;St<Lt;St++)ui(_t[St],N,z,G)}function Gl(T,N,z,G){let H=T.opaque,_t=T.transmissive,St=T.transparent;m.setupLightsView(z),Q===!0&&Ht.setGlobalState(y.clippingPlanes,z),_t.length>0&&Tu(H,_t,N,z),G&&$.viewport(E.copy(G)),H.length>0&&Os(H,N,z),_t.length>0&&Os(_t,N,z),St.length>0&&Os(St,N,z),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Tu(T,N,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let _t=ot.isWebGL2;wt===null&&(wt=new He(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?hi:zi,minFilter:ms,samples:_t?4:0})),y.getDrawingBufferSize(It),_t?wt.setSize(It.x,It.y):wt.setSize(Ia(It.x),Ia(It.y));let St=y.getRenderTarget();y.setRenderTarget(wt),y.getClearColor(K),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Lt=y.toneMapping;y.toneMapping=Hi,Os(T,z,G),S.updateMultisampleRenderTarget(wt),S.updateRenderTargetMipmap(wt);let kt=!1;for(let Xt=0,Ft=N.length;Xt<Ft;Xt++){let zt=N[Xt],ye=zt.object,qe=zt.geometry,Te=zt.material,gi=zt.group;if(Te.side===Ze&&ye.layers.test(G.layers)){let fe=Te.side;Te.side=Re,Te.needsUpdate=!0,Wl(ye,z,G,qe,Te,gi),Te.side=fe,Te.needsUpdate=!0,kt=!0}}kt===!0&&(S.updateMultisampleRenderTarget(wt),S.updateRenderTargetMipmap(wt)),y.setRenderTarget(St),y.setClearColor(K,L),y.toneMapping=Lt}function Os(T,N,z){let G=N.isScene===!0?N.overrideMaterial:null;for(let H=0,_t=T.length;H<_t;H++){let St=T[H],Lt=St.object,kt=St.geometry,Xt=G===null?St.material:G,Ft=St.group;Lt.layers.test(z.layers)&&Wl(Lt,N,z,kt,Xt,Ft)}}function Wl(T,N,z,G,H,_t){T.onBeforeRender(y,N,z,G,H,_t),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(y,N,z,G,T,_t),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=Re,H.needsUpdate=!0,y.renderBufferDirect(z,N,G,H,T,_t),H.side=Vi,H.needsUpdate=!0,y.renderBufferDirect(z,N,G,H,T,_t),H.side=Ze):y.renderBufferDirect(z,N,G,H,T,_t),T.onAfterRender(y,N,z,G,H,_t)}function Bs(T,N,z){N.isScene!==!0&&(N=Et);let G=gt.get(T),H=m.state.lights,_t=m.state.shadowsArray,St=H.state.version,Lt=Mt.getParameters(T,H.state,_t,N,z),kt=Mt.getProgramCacheKey(Lt),Xt=G.programs;G.environment=T.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(T.isMeshStandardMaterial?O:b).get(T.envMap||G.environment),Xt===void 0&&(T.addEventListener("dispose",ft),Xt=new Map,G.programs=Xt);let Ft=Xt.get(kt);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===St)return ql(T,Lt),Ft}else Lt.uniforms=Mt.getUniforms(T),T.onBuild(z,Lt,y),T.onBeforeCompile(Lt,y),Ft=Mt.acquireProgram(Lt,kt),Xt.set(kt,Ft),G.uniforms=Lt.uniforms;let zt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(zt.clippingPlanes=Ht.uniform),ql(T,Lt),G.needsLights=Cu(T),G.lightsStateVersion=St,G.needsLights&&(zt.ambientLightColor.value=H.state.ambient,zt.lightProbe.value=H.state.probe,zt.directionalLights.value=H.state.directional,zt.directionalLightShadows.value=H.state.directionalShadow,zt.spotLights.value=H.state.spot,zt.spotLightShadows.value=H.state.spotShadow,zt.rectAreaLights.value=H.state.rectArea,zt.ltc_1.value=H.state.rectAreaLTC1,zt.ltc_2.value=H.state.rectAreaLTC2,zt.pointLights.value=H.state.point,zt.pointLightShadows.value=H.state.pointShadow,zt.hemisphereLights.value=H.state.hemi,zt.directionalShadowMap.value=H.state.directionalShadowMap,zt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,zt.spotShadowMap.value=H.state.spotShadowMap,zt.spotLightMatrix.value=H.state.spotLightMatrix,zt.spotLightMap.value=H.state.spotLightMap,zt.pointShadowMap.value=H.state.pointShadowMap,zt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function Xl(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Fn.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function ql(T,N){let z=gt.get(T);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Au(T,N,z,G,H){N.isScene!==!0&&(N=Et),S.resetTextureUnits();let _t=N.fog,St=G.isMeshStandardMaterial?N.environment:null,Lt=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Si,kt=(G.isMeshStandardMaterial?O:b).get(G.envMap||St),Xt=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ft=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),zt=!!z.morphAttributes.position,ye=!!z.morphAttributes.normal,qe=!!z.morphAttributes.color,Te=Hi;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Te=y.toneMapping);let gi=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=gi!==void 0?gi.length:0,$t=gt.get(G),Fo=m.state.lights;if(Q===!0&&(mt===!0||T!==M)){let Ke=T===M&&G.id===k;Ht.setState(G,T,Ke)}let ge=!1;G.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Fo.state.version||$t.outputColorSpace!==Lt||H.isBatchedMesh&&$t.batching===!1||!H.isBatchedMesh&&$t.batching===!0||H.isInstancedMesh&&$t.instancing===!1||!H.isInstancedMesh&&$t.instancing===!0||H.isSkinnedMesh&&$t.skinning===!1||!H.isSkinnedMesh&&$t.skinning===!0||H.isInstancedMesh&&$t.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&$t.instancingColor===!1&&H.instanceColor!==null||$t.envMap!==kt||G.fog===!0&&$t.fog!==_t||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ht.numPlanes||$t.numIntersection!==Ht.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Ft||$t.morphTargets!==zt||$t.morphNormals!==ye||$t.morphColors!==qe||$t.toneMapping!==Te||ot.isWebGL2===!0&&$t.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,$t.__version=G.version);let Zi=$t.currentProgram;ge===!0&&(Zi=Bs(G,N,H));let $l=!1,ns=!1,Ho=!1,De=Zi.getUniforms(),Ki=$t.uniforms;if($.useProgram(Zi.program)&&($l=!0,ns=!0,Ho=!0),G.id!==k&&(k=G.id,ns=!0),$l||M!==T){De.setValue(P,"projectionMatrix",T.projectionMatrix),De.setValue(P,"viewMatrix",T.matrixWorldInverse);let Ke=De.map.cameraPosition;Ke!==void 0&&Ke.setValue(P,Bt.setFromMatrixPosition(T.matrixWorld)),ot.logarithmicDepthBuffer&&De.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&De.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,ns=!0,Ho=!0)}if(H.isSkinnedMesh){De.setOptional(P,H,"bindMatrix"),De.setOptional(P,H,"bindMatrixInverse");let Ke=H.skeleton;Ke&&(ot.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),De.setValue(P,"boneTexture",Ke.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(De.setOptional(P,H,"batchingTexture"),De.setValue(P,"batchingTexture",H._matricesTexture,S));let zo=z.morphAttributes;if((zo.position!==void 0||zo.normal!==void 0||zo.color!==void 0&&ot.isWebGL2===!0)&&Zt.update(H,z,Zi),(ns||$t.receiveShadow!==H.receiveShadow)&&($t.receiveShadow=H.receiveShadow,De.setValue(P,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Ki.envMap.value=kt,Ki.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ns&&(De.setValue(P,"toneMappingExposure",y.toneMappingExposure),$t.needsLights&&Ru(Ki,Ho),_t&&G.fog===!0&&ut.refreshFogUniforms(Ki,_t),ut.refreshMaterialUniforms(Ki,G,J,W,wt),Fn.upload(P,Xl($t),Ki,S)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fn.upload(P,Xl($t),Ki,S),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&De.setValue(P,"center",H.center),De.setValue(P,"modelViewMatrix",H.modelViewMatrix),De.setValue(P,"normalMatrix",H.normalMatrix),De.setValue(P,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ke=G.uniformsGroups;for(let Vo=0,Pu=Ke.length;Vo<Pu;Vo++)if(ot.isWebGL2){let Yl=Ke[Vo];Qt.update(Yl,Zi),Qt.bind(Yl,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Ru(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Cu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,N,z){gt.get(T.texture).__webglTexture=N,gt.get(T.depthTexture).__webglTexture=z;let G=gt.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,N){let z=gt.get(T);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,z=0){C=T,R=N,A=z;let G=!0,H=null,_t=!1,St=!1;if(T){let kt=gt.get(T);kt.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),G=!1):kt.__webglFramebuffer===void 0?S.setupRenderTarget(T):kt.__hasExternalTextures&&S.rebindTextures(T,gt.get(T.texture).__webglTexture,gt.get(T.depthTexture).__webglTexture);let Xt=T.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(St=!0);let Ft=gt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?H=Ft[N][z]:H=Ft[N],_t=!0):ot.isWebGL2&&T.samples>0&&S.useMultisampledRTT(T)===!1?H=gt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?H=Ft[z]:H=Ft,E.copy(T.viewport),U.copy(T.scissor),F=T.scissorTest}else E.copy(it).multiplyScalar(J).floor(),U.copy(nt).multiplyScalar(J).floor(),F=pt;if($.bindFramebuffer(P.FRAMEBUFFER,H)&&ot.drawBuffers&&G&&$.drawBuffers(T,H),$.viewport(E),$.scissor(U),$.setScissorTest(F),_t){let kt=gt.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,kt.__webglTexture,z)}else if(St){let kt=gt.get(T.texture),Xt=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,z||0,Xt)}k=-1},this.readRenderTargetPixels=function(T,N,z,G,H,_t,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=gt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){$.bindFramebuffer(P.FRAMEBUFFER,Lt);try{let kt=T.texture,Xt=kt.format,Ft=kt.type;if(Xt!==li&&bt.convert(Xt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let zt=Ft===hi&&(Y.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Y.has("EXT_color_buffer_float"));if(Ft!==zi&&bt.convert(Ft)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Oi&&(ot.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-G&&z>=0&&z<=T.height-H&&P.readPixels(N,z,G,H,bt.convert(Xt),bt.convert(Ft),_t)}finally{let kt=C!==null?gt.get(C).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(T,N,z=0){let G=Math.pow(2,-z),H=Math.floor(N.image.width*G),_t=Math.floor(N.image.height*G);S.setTexture2D(N,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,T.x,T.y,H,_t),$.unbindTexture()},this.copyTextureToTexture=function(T,N,z,G=0){let H=N.image.width,_t=N.image.height,St=bt.convert(z.format),Lt=bt.convert(z.type);S.setTexture2D(z,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,G,T.x,T.y,H,_t,St,Lt,N.image.data):N.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,G,T.x,T.y,N.mipmaps[0].width,N.mipmaps[0].height,St,N.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,G,T.x,T.y,St,Lt,N.image),G===0&&z.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(T,N,z,G,H=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _t=T.max.x-T.min.x+1,St=T.max.y-T.min.y+1,Lt=T.max.z-T.min.z+1,kt=bt.convert(G.format),Xt=bt.convert(G.type),Ft;if(G.isData3DTexture)S.setTexture3D(G,0),Ft=P.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)S.setTexture2DArray(G,0),Ft=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);let zt=P.getParameter(P.UNPACK_ROW_LENGTH),ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),qe=P.getParameter(P.UNPACK_SKIP_PIXELS),Te=P.getParameter(P.UNPACK_SKIP_ROWS),gi=P.getParameter(P.UNPACK_SKIP_IMAGES),fe=z.isCompressedTexture?z.mipmaps[H]:z.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,fe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,fe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,T.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,T.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,T.min.z),z.isDataTexture||z.isData3DTexture?P.texSubImage3D(Ft,H,N.x,N.y,N.z,_t,St,Lt,kt,Xt,fe.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ft,H,N.x,N.y,N.z,_t,St,Lt,kt,fe.data)):P.texSubImage3D(Ft,H,N.x,N.y,N.z,_t,St,Lt,kt,Xt,fe),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gi),H===0&&G.generateMipmaps&&P.generateMipmap(Ft),$.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?S.setTextureCube(T,0):T.isData3DTexture?S.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?S.setTexture2DArray(T,0):S.setTexture2D(T,0),$.unbindTexture()},this.resetState=function(){R=0,A=0,C=null,$.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Tl?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?an:Fc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===an?be:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},$a=class extends ys{};$a.prototype.isWebGL1Renderer=!0;var Dr=class r{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=i}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},$n=class extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var cn=class extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},gc=new w,_c=new w,yc=new re,xa=new Gn,ar=new Ti,Yn=class extends ce{constructor(t=new ae,e=new cn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)gc.fromBufferAttribute(e,n-1),_c.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=gc.distanceTo(_c);t.setAttribute("lineDistance",new Jt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ar.copy(i.boundingSphere),ar.applyMatrix4(n),ar.radius+=s,t.ray.intersectsSphere(ar)===!1)return;yc.copy(n).invert(),xa.copy(t.ray).applyMatrix4(yc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new w,c=new w,u=new w,f=new w,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){let d=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=d,x=v-1;y<x;y+=p){let R=g.getX(y),A=g.getX(y+1);if(h.fromBufferAttribute(m,R),c.fromBufferAttribute(m,A),xa.distanceSqToSegment(h,c,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let k=t.ray.origin.distanceTo(f);k<t.near||k>t.far||e.push({distance:k,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=d,x=v-1;y<x;y+=p){if(h.fromBufferAttribute(m,y),c.fromBufferAttribute(m,y+1),xa.distanceSqToSegment(h,c,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);let A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};var Ya=class extends pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},vc=new re,Za=new Gn,lr=new Ti,hr=new w,kr=class extends ce{constructor(t=new ae,e=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere),lr.applyMatrix4(n),lr.radius+=s,t.ray.intersectsSphere(lr)===!1)return;vc.copy(n).invert(),Za.copy(t.ray).applyMatrix4(vc);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++){let m=h.getX(g);hr.fromBufferAttribute(u,m),xc(hr,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)hr.fromBufferAttribute(u,g),xc(hr,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function xc(r,t,e,i,n,s,o){let a=Za.distanceSqToPoint(r);if(a<e){let l=new w;Za.closestPointToPoint(r,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}var Wi=class extends ti{constructor(t,e,i,n,s,o,a,l,h){super(t,e,i,n,s,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,h;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),h=i[n]-o,h<0)a=n+1;else if(h>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let c=i[n],f=i[n+1]-c,p=(o-c)/f;return(n+p)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new rt:new w);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new w,n=[],s=[],o=[],a=new w,l=new re;for(let p=0;p<=t;p++){let g=p/t;n[p]=this.getTangentAt(g,new w)}s[0]=new w,o[0]=new w;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),u<=h&&(h=u,i.set(0,1,0)),f<=h&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(n[p-1],n[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Le(n[p-1].dot(n[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(n[p],s[p])}if(e===!0){let p=Math.acos(Le(s[0].dot(s[t]),-1,1));p/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),o[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vs=class extends ei{constructor(t=0,e=0,i=1,n=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let i=e||new rt,n=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=h-this.aY;l=f*c-p*u+this.aX,h=f*u+p*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ka=class extends vs{constructor(t,e,i,n,s,o){super(t,e,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Rl(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,h){n(o,a,h*(a-s),h*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,h,c,u){let f=(o-s)/h-(a-s)/(h+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+u)+(l-a)/u;f*=c,p*=c,n(o,a,f,p)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+i*a}}}var cr=new w,ba=new Rl,Ma=new Rl,wa=new Rl,Ja=class extends ei{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new w){let i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let h,c;this.closed||a>0?h=n[(a-1)%s]:(cr.subVectors(n[0],n[1]).add(n[0]),h=cr);let u=n[a%s],f=n[(a+1)%s];if(this.closed||a+2<s?c=n[(a+2)%s]:(cr.subVectors(n[s-1],n[s-2]).add(n[s-1]),c=cr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(h.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(c),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ba.initNonuniformCatmullRom(h.x,u.x,f.x,c.x,g,_,m),Ma.initNonuniformCatmullRom(h.y,u.y,f.y,c.y,g,_,m),wa.initNonuniformCatmullRom(h.z,u.z,f.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(h.x,u.x,f.x,c.x,this.tension),Ma.initCatmullRom(h.y,u.y,f.y,c.y,this.tension),wa.initCatmullRom(h.z,u.z,f.z,c.z,this.tension));return i.set(ba.calc(l),Ma.calc(l),wa.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new w().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bc(r,t,e,i,n){let s=(i-t)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*r+e}function Mg(r,t){let e=1-r;return e*e*t}function wg(r,t){return 2*(1-r)*r*t}function Eg(r,t){return r*r*t}function ds(r,t,e,i){return Mg(r,t)+wg(r,e)+Eg(r,i)}function Sg(r,t){let e=1-r;return e*e*e*t}function Tg(r,t){let e=1-r;return 3*e*e*r*t}function Ag(r,t){return 3*(1-r)*r*r*t}function Rg(r,t){return r*r*r*t}function fs(r,t,e,i,n){return Sg(r,t)+Tg(r,e)+Ag(r,i)+Rg(r,n)}var Ur=class extends ei{constructor(t=new rt,e=new rt,i=new rt,n=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new rt){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(t,n.x,s.x,o.x,a.x),fs(t,n.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends ei{constructor(t=new w,e=new w,i=new w,n=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new w){let i=e,n=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(fs(t,n.x,s.x,o.x,a.x),fs(t,n.y,s.y,o.y,a.y),fs(t,n.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends ei{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends ei{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends ei{constructor(t=new rt,e=new rt,i=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new rt){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ds(t,n.x,s.x,o.x),ds(t,n.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tl=class extends ei{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(ds(t,n.x,s.x,o.x),ds(t,n.y,s.y,o.y),ds(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let i=e,n=this.points,s=(n.length-1)*t,o=Math.floor(s),a=s-o,l=n[o===0?o:o-1],h=n[o],c=n[o>n.length-2?n.length-1:o+1],u=n[o>n.length-3?n.length-1:o+2];return i.set(bc(a,l.x,h.x,c.x,u.x),bc(a,l.y,h.y,c.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new rt().fromArray(n))}return this}},el=Object.freeze({__proto__:null,ArcCurve:Ka,CatmullRomCurve3:Ja,CubicBezierCurve:Ur,CubicBezierCurve3:ja,EllipseCurve:vs,LineCurve:Nr,LineCurve3:Qa,QuadraticBezierCurve:Or,QuadraticBezierCurve3:tl,SplineCurve:Br}),il=class extends ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new el[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),s=0;for(;s<n.length;){if(n[s]>=i){let o=n[s]-i,a=this.curves[s],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,s=this.curves;n<s.length;n++){let o=s[n],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new el[n.type]().fromJSON(n))}return this}},xs=class extends il{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Nr(this.currentPoint.clone(),new rt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let s=new Or(this.currentPoint.clone(),new rt(t,e),new rt(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,s,o){let a=new Ur(this.currentPoint.clone(),new rt(t,e),new rt(i,n),new rt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Br(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,n,s,o),this}absarc(t,e,i,n,s,o){return this.absellipse(t,e,i,i,n,s,o),this}ellipse(t,e,i,n,s,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,n,s,o,a,l),this}absellipse(t,e,i,n,s,o,a,l){let h=new vs(t,e,i,n,s,o,a,l);if(this.curves.length>0){let u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},nl=class r extends ae{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=Le(n,0,Math.PI*2);let s=[],o=[],a=[],l=[],h=[],c=1/e,u=new w,f=new rt,p=new w,g=new w,_=new w,m=0,d=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[v+1].x-t[v].x,d=t[v+1].y-t[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let v=0;v<=e;v++){let y=i+v*c*n,x=Math.sin(y),R=Math.cos(y);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*x,u.y=t[A].y,u.z=t[A].x*R,o.push(u.x,u.y,u.z),f.x=v/e,f.y=A/(t.length-1),a.push(f.x,f.y);let C=l[3*A+0]*x,k=l[3*A+1],M=l[3*A+0]*R;h.push(C,k,M)}}for(let v=0;v<e;v++)for(let y=0;y<t.length-1;y++){let x=y+v*t.length,R=x,A=x+t.length,C=x+t.length+1,k=x+1;s.push(R,A,k),s.push(C,k,A)}this.setIndex(s),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}},Fr=class r extends nl{constructor(t=1,e=1,i=4,n=8){let s=new xs;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:n}}static fromJSON(t){return new r(t.radius,t.length,t.capSegments,t.radialSegments)}},ii=class r extends ae{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let s=[],o=[],a=[],l=[],h=new w,c=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let p=i+u/e*n;h.x=t*Math.cos(p),h.y=t*Math.sin(p),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[f]/t+1)/2,c.y=(o[f+1]/t+1)/2,l.push(c.x,c.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ue=class r extends ae{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let h=this;n=Math.floor(n),s=Math.floor(s);let c=[],u=[],f=[],p=[],g=0,_=[],m=i/2,d=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(p,2));function v(){let x=new w,R=new w,A=0,C=(e-t)/i;for(let k=0;k<=s;k++){let M=[],E=k/s,U=E*(e-t)+t;for(let F=0;F<=n;F++){let K=F/n,L=K*l+a,B=Math.sin(L),W=Math.cos(L);R.x=U*B,R.y=-E*i+m,R.z=U*W,u.push(R.x,R.y,R.z),x.set(B,C,W).normalize(),f.push(x.x,x.y,x.z),p.push(K,1-E),M.push(g++)}_.push(M)}for(let k=0;k<n;k++)for(let M=0;M<s;M++){let E=_[M][k],U=_[M+1][k],F=_[M+1][k+1],K=_[M][k+1];c.push(E,U,K),c.push(U,F,K),A+=6}h.addGroup(d,A,0),d+=A}function y(x){let R=g,A=new rt,C=new w,k=0,M=x===!0?t:e,E=x===!0?1:-1;for(let F=1;F<=n;F++)u.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let U=g;for(let F=0;F<=n;F++){let L=F/n*l+a,B=Math.cos(L),W=Math.sin(L);C.x=M*W,C.y=m*E,C.z=M*B,u.push(C.x,C.y,C.z),f.push(0,E,0),A.x=B*.5+.5,A.y=W*.5*E+.5,p.push(A.x,A.y),g++}for(let F=0;F<n;F++){let K=R+F,L=U+F;x===!0?c.push(L,L+1,K):c.push(L+1,L,K),k+=3}h.addGroup(d,k,x===!0?1:2),d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class r extends ue{constructor(t=1,e=1,i=32,n=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},sl=class r extends ae{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),h(i),c(),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(s.slice(),3)),this.setAttribute("uv",new Jt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new w,x=new w,R=new w;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],x),p(e[A+2],R),l(y,x,R,v)}function l(v,y,x,R){let A=R+1,C=[];for(let k=0;k<=A;k++){C[k]=[];let M=v.clone().lerp(x,k/A),E=y.clone().lerp(x,k/A),U=A-k;for(let F=0;F<=U;F++)F===0&&k===A?C[k][F]=M:C[k][F]=M.clone().lerp(E,F/U)}for(let k=0;k<A;k++)for(let M=0;M<2*(A-k)-1;M++){let E=Math.floor(M/2);M%2===0?(f(C[k][E+1]),f(C[k+1][E]),f(C[k][E])):(f(C[k][E+1]),f(C[k+1][E+1]),f(C[k+1][E]))}}function h(v){let y=new w;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function c(){let v=new w;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];let x=m(v)/2/Math.PI+.5,R=d(v)/Math.PI+.5;o.push(x,1-R)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],x=o[v+2],R=o[v+4],A=Math.max(y,x,R),C=Math.min(y,x,R);A>.9&&C<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,y){let x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let v=new w,y=new w,x=new w,R=new w,A=new rt,C=new rt,k=new rt;for(let M=0,E=0;M<s.length;M+=9,E+=6){v.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),A.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),k.set(o[E+4],o[E+5]),R.copy(v).add(y).add(x).divideScalar(3);let U=m(R);_(A,E+0,v,U),_(C,E+2,y,U),_(k,E+4,x,U)}}function _(v,y,x,R){R<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var bs=class extends xs{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new xs().fromJSON(n))}return this}},Cg={triangulate:function(r,t,e=2){let i=t&&t.length,n=i?t[0]*e:r.length,s=Kc(r,0,n,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,h,c,u,f,p;if(i&&(s=kg(r,t,s,e)),r.length>80*e){a=h=r[0],l=c=r[1];for(let g=e;g<n;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>h&&(h=u),f>c&&(c=f);p=Math.max(h-a,c-l),p=p!==0?32767/p:0}return Ms(s,o,e,a,l,p,0),o}};function Kc(r,t,e,i,n){let s,o;if(n===Xg(r,t,e,i)>0)for(s=t;s<e;s+=i)o=Mc(s,r[s],r[s+1],o);else for(s=e-i;s>=t;s-=i)o=Mc(s,r[s],r[s+1],o);return o&&Jr(o,o.next)&&(Es(o),o=o.next),o}function un(r,t){if(!r)return r;t||(t=r);let e=r,i;do if(i=!1,!e.steiner&&(Jr(e,e.next)||pe(e.prev,e,e.next)===0)){if(Es(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ms(r,t,e,i,n,s,o){if(!r)return;!o&&s&&Fg(r,i,n,s);let a=r,l,h;for(;r.prev!==r.next;){if(l=r.prev,h=r.next,s?Lg(r,i,n,s):Pg(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(h.i/e|0),Es(r),r=h.next,a=h.next;continue}if(r=h,r===a){o?o===1?(r=Ig(un(r),t,e),Ms(r,t,e,i,n,s,2)):o===2&&Dg(r,t,e,i,n,s):Ms(un(r),t,e,i,n,s,1);break}}}function Pg(r){let t=r.prev,e=r,i=r.next;if(pe(t,e,i)>=0)return!1;let n=t.x,s=e.x,o=i.x,a=t.y,l=e.y,h=i.y,c=n<s?n<o?n:o:s<o?s:o,u=a<l?a<h?a:h:l<h?l:h,f=n>s?n>o?n:o:s>o?s:o,p=a>l?a>h?a:h:l>h?l:h,g=i.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=u&&g.y<=p&&On(n,a,s,l,o,h,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lg(r,t,e,i){let n=r.prev,s=r,o=r.next;if(pe(n,s,o)>=0)return!1;let a=n.x,l=s.x,h=o.x,c=n.y,u=s.y,f=o.y,p=a<l?a<h?a:h:l<h?l:h,g=c<u?c<f?c:f:u<f?u:f,_=a>l?a>h?a:h:l>h?l:h,m=c>u?c>f?c:f:u>f?u:f,d=rl(p,g,t,e,i),v=rl(_,m,t,e,i),y=r.prevZ,x=r.nextZ;for(;y&&y.z>=d&&x&&x.z<=v;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&On(a,c,l,u,h,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==n&&x!==o&&On(a,c,l,u,h,f,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=_&&y.y>=g&&y.y<=m&&y!==n&&y!==o&&On(a,c,l,u,h,f,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==n&&x!==o&&On(a,c,l,u,h,f,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ig(r,t,e){let i=r;do{let n=i.prev,s=i.next.next;!Jr(n,s)&&Jc(n,i,i.next,s)&&ws(n,s)&&ws(s,n)&&(t.push(n.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),Es(i),Es(i.next),i=r=s),i=i.next}while(i!==r);return un(i)}function Dg(r,t,e,i,n,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vg(o,a)){let l=jc(o,a);o=un(o,o.next),l=un(l,l.next),Ms(o,t,e,i,n,s,0),Ms(l,t,e,i,n,s,0);return}a=a.next}o=o.next}while(o!==r)}function kg(r,t,e,i){let n=[],s,o,a,l,h;for(s=0,o=t.length;s<o;s++)a=t[s]*i,l=s<o-1?t[s+1]*i:r.length,h=Kc(r,a,l,i,!1),h===h.next&&(h.steiner=!0),n.push(zg(h));for(n.sort(Ug),s=0;s<n.length;s++)e=Ng(n[s],e);return e}function Ug(r,t){return r.x-t.x}function Ng(r,t){let e=Og(r,t);if(!e)return t;let i=jc(e,r);return un(i,i.next),un(e,e.next)}function Og(r,t){let e=t,i=-1/0,n,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>i&&(i=f,n=e.x<e.next.x?e:e.next,f===s))return n}e=e.next}while(e!==t);if(!n)return null;let a=n,l=n.x,h=n.y,c=1/0,u;e=n;do s>=e.x&&e.x>=l&&s!==e.x&&On(o<h?s:i,o,l,h,o<h?i:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),ws(e,r)&&(u<c||u===c&&(e.x>n.x||e.x===n.x&&Bg(n,e)))&&(n=e,c=u)),e=e.next;while(e!==a);return n}function Bg(r,t){return pe(r.prev,r,t.prev)<0&&pe(t.next,r,r.next)<0}function Fg(r,t,e,i){let n=r;do n.z===0&&(n.z=rl(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Hg(n)}function Hg(r){let t,e,i,n,s,o,a,l,h=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,i=e,a=0,t=0;t<h&&(a++,i=i.nextZ,!!i);t++);for(l=h;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(n=e,e=e.nextZ,a--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;e=i}s.nextZ=null,h*=2}while(o>1);return r}function rl(r,t,e,i,n){return r=(r-e)*n|0,t=(t-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function zg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function On(r,t,e,i,n,s,o,a){return(n-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(n-o)*(i-a)}function Vg(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Gg(r,t)&&(ws(r,t)&&ws(t,r)&&Wg(r,t)&&(pe(r.prev,r,t.prev)||pe(r,t.prev,t))||Jr(r,t)&&pe(r.prev,r,r.next)>0&&pe(t.prev,t,t.next)>0)}function pe(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Jr(r,t){return r.x===t.x&&r.y===t.y}function Jc(r,t,e,i){let n=dr(pe(r,t,e)),s=dr(pe(r,t,i)),o=dr(pe(e,i,r)),a=dr(pe(e,i,t));return!!(n!==s&&o!==a||n===0&&ur(r,e,t)||s===0&&ur(r,i,t)||o===0&&ur(e,r,i)||a===0&&ur(e,t,i))}function ur(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function dr(r){return r>0?1:r<0?-1:0}function Gg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Jc(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function ws(r,t){return pe(r.prev,r,r.next)<0?pe(r,t,r.next)>=0&&pe(r,r.prev,t)>=0:pe(r,t,r.prev)<0||pe(r,r.next,t)<0}function Wg(r,t){let e=r,i=!1,n=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&n<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==r);return i}function jc(r,t){let e=new ol(r.i,r.x,r.y),i=new ol(t.i,t.x,t.y),n=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=n,n.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Mc(r,t,e,i){let n=new ol(r,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Es(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ol(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xg(r,t,e,i){let n=0;for(let s=t,o=e-i;s<e;s+=i)n+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return n}var ps=class r{static area(t){let e=t.length,i=0;for(let n=e-1,s=0;s<e;n=s++)i+=t[n].x*t[s].y-t[s].x*t[n].y;return i*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let i=[],n=[],s=[];wc(t),Ec(i,t);let o=t.length;e.forEach(wc);for(let l=0;l<e.length;l++)n.push(o),o+=e[l].length,Ec(i,e[l]);let a=Cg.triangulate(i,n);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function wc(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Ec(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Hr=class r extends ae{constructor(t=new bs([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],s=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new Jt(n,3)),this.setAttribute("uv",new Jt(s,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:qg,y,x=!1,R,A,C,k;d&&(y=d.getSpacedPoints(c),x=!0,f=!1,R=d.computeFrenetFrames(c,!1),A=new w,C=new w,k=new w),f||(m=0,p=0,g=0,_=0);let M=a.extractPoints(h),E=M.shape,U=M.holes;if(!ps.isClockWise(E)){E=E.reverse();for(let P=0,at=U.length;P<at;P++){let Y=U[P];ps.isClockWise(Y)&&(U[P]=Y.reverse())}}let K=ps.triangulateShape(E,U),L=E;for(let P=0,at=U.length;P<at;P++){let Y=U[P];E=E.concat(Y)}function B(P,at,Y){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(at,Y)}let W=E.length,J=K.length;function Z(P,at,Y){let ot,$,At,gt=P.x-at.x,S=P.y-at.y,b=Y.x-P.x,O=Y.y-P.y,st=gt*gt+S*S,tt=gt*O-S*b;if(Math.abs(tt)>Number.EPSILON){let j=Math.sqrt(st),Mt=Math.sqrt(b*b+O*O),ut=at.x-S/j,vt=at.y+gt/j,Ct=Y.x-O/Mt,Ht=Y.y+b/Mt,et=((Ct-ut)*O-(Ht-vt)*b)/(gt*O-S*b);ot=ut+gt*et-P.x,$=vt+S*et-P.y;let jt=ot*ot+$*$;if(jt<=2)return new rt(ot,$);At=Math.sqrt(jt/2)}else{let j=!1;gt>Number.EPSILON?b>Number.EPSILON&&(j=!0):gt<-Number.EPSILON?b<-Number.EPSILON&&(j=!0):Math.sign(S)===Math.sign(O)&&(j=!0),j?(ot=-S,$=gt,At=Math.sqrt(st)):(ot=gt,$=S,At=Math.sqrt(st/2))}return new rt(ot/At,$/At)}let q=[];for(let P=0,at=L.length,Y=at-1,ot=P+1;P<at;P++,Y++,ot++)Y===at&&(Y=0),ot===at&&(ot=0),q[P]=Z(L[P],L[Y],L[ot]);let it=[],nt,pt=q.concat();for(let P=0,at=U.length;P<at;P++){let Y=U[P];nt=[];for(let ot=0,$=Y.length,At=$-1,gt=ot+1;ot<$;ot++,At++,gt++)At===$&&(At=0),gt===$&&(gt=0),nt[ot]=Z(Y[ot],Y[At],Y[gt]);it.push(nt),pt=pt.concat(nt)}for(let P=0;P<m;P++){let at=P/m,Y=p*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+_;for(let $=0,At=L.length;$<At;$++){let gt=B(L[$],q[$],ot);yt(gt.x,gt.y,-Y)}for(let $=0,At=U.length;$<At;$++){let gt=U[$];nt=it[$];for(let S=0,b=gt.length;S<b;S++){let O=B(gt[S],nt[S],ot);yt(O.x,O.y,-Y)}}}let X=g+_;for(let P=0;P<W;P++){let at=f?B(E[P],pt[P],X):E[P];x?(C.copy(R.normals[0]).multiplyScalar(at.x),A.copy(R.binormals[0]).multiplyScalar(at.y),k.copy(y[0]).add(C).add(A),yt(k.x,k.y,k.z)):yt(at.x,at.y,0)}for(let P=1;P<=c;P++)for(let at=0;at<W;at++){let Y=f?B(E[at],pt[at],X):E[at];x?(C.copy(R.normals[P]).multiplyScalar(Y.x),A.copy(R.binormals[P]).multiplyScalar(Y.y),k.copy(y[P]).add(C).add(A),yt(k.x,k.y,k.z)):yt(Y.x,Y.y,u/c*P)}for(let P=m-1;P>=0;P--){let at=P/m,Y=p*Math.cos(at*Math.PI/2),ot=g*Math.sin(at*Math.PI/2)+_;for(let $=0,At=L.length;$<At;$++){let gt=B(L[$],q[$],ot);yt(gt.x,gt.y,u+Y)}for(let $=0,At=U.length;$<At;$++){let gt=U[$];nt=it[$];for(let S=0,b=gt.length;S<b;S++){let O=B(gt[S],nt[S],ot);x?yt(O.x,O.y+y[c-1].y,y[c-1].x+Y):yt(O.x,O.y,u+Y)}}}Q(),mt();function Q(){let P=n.length/3;if(f){let at=0,Y=W*at;for(let ot=0;ot<J;ot++){let $=K[ot];It($[2]+Y,$[1]+Y,$[0]+Y)}at=c+m*2,Y=W*at;for(let ot=0;ot<J;ot++){let $=K[ot];It($[0]+Y,$[1]+Y,$[2]+Y)}}else{for(let at=0;at<J;at++){let Y=K[at];It(Y[2],Y[1],Y[0])}for(let at=0;at<J;at++){let Y=K[at];It(Y[0]+W*c,Y[1]+W*c,Y[2]+W*c)}}i.addGroup(P,n.length/3-P,0)}function mt(){let P=n.length/3,at=0;wt(L,at),at+=L.length;for(let Y=0,ot=U.length;Y<ot;Y++){let $=U[Y];wt($,at),at+=$.length}i.addGroup(P,n.length/3-P,1)}function wt(P,at){let Y=P.length;for(;--Y>=0;){let ot=Y,$=Y-1;$<0&&($=P.length-1);for(let At=0,gt=c+m*2;At<gt;At++){let S=W*At,b=W*(At+1),O=at+ot+S,st=at+$+S,tt=at+$+b,j=at+ot+b;Bt(O,st,tt,j)}}}function yt(P,at,Y){l.push(P),l.push(at),l.push(Y)}function It(P,at,Y){Et(P),Et(at),Et(Y);let ot=n.length/3,$=v.generateTopUV(i,n,ot-3,ot-2,ot-1);Ut($[0]),Ut($[1]),Ut($[2])}function Bt(P,at,Y,ot){Et(P),Et(at),Et(ot),Et(at),Et(Y),Et(ot);let $=n.length/3,At=v.generateSideWallUV(i,n,$-6,$-3,$-2,$-1);Ut(At[0]),Ut(At[1]),Ut(At[3]),Ut(At[1]),Ut(At[2]),Ut(At[3])}function Et(P){n.push(l[P*3+0]),n.push(l[P*3+1]),n.push(l[P*3+2])}function Ut(P){s.push(P.x),s.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return $g(e,i,t)}static fromJSON(t,e){let i=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];i.push(a)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new el[n.type]().fromJSON(n)),new r(i,t.options)}},qg={generateTopUV:function(r,t,e,i,n){let s=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[n*3],c=t[n*3+1];return[new rt(s,o),new rt(a,l),new rt(h,c)]},generateSideWallUV:function(r,t,e,i,n,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],c=t[i*3+1],u=t[i*3+2],f=t[n*3],p=t[n*3+1],g=t[n*3+2],_=t[s*3],m=t[s*3+1],d=t[s*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new rt(o,1-l),new rt(h,1-u),new rt(f,1-g),new rt(_,1-d)]:[new rt(a,1-l),new rt(c,1-u),new rt(p,1-g),new rt(m,1-d)]}};function $g(r,t,e){if(e.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){let s=r[i];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qi=class r extends sl{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var zr=class r extends ae{constructor(t=.5,e=1,i=32,n=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],h=[],c=[],u=t,f=(e-t)/n,p=new w,g=new rt;for(let _=0;_<=n;_++){for(let m=0;m<=i;m++){let d=s+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,c.push(g.x,g.y)}u+=f}for(let _=0;_<n;_++){let m=_*(i+1);for(let d=0;d<i;d++){let v=d+m,y=v,x=v+i+1,R=v+i+2,A=v+1;a.push(y,x,A),a.push(x,R,A)}}this.setIndex(a),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ce=class r extends ae{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],u=new w,f=new w,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){let v=[],y=d/i,x=0;d===0&&o===0?x=.5/e:d===i&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){let A=R/e;u.x=-t*Math.cos(n+A*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(n+A*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+x,1-y),v.push(h++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<e;v++){let y=c[d][v+1],x=c[d][v],R=c[d+1][v],A=c[d+1][v+1];(d!==0||o>0)&&p.push(y,x,A),(d!==i-1||l<Math.PI)&&p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $i=class r extends ae{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);let o=[],a=[],l=[],h=[],c=new w,u=new w,f=new w;for(let p=0;p<=i;p++)for(let g=0;g<=n;g++){let _=g/n*s,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),f.subVectors(u,c).normalize(),l.push(f.x,f.y,f.z),h.push(g/n),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=n;g++){let _=(n+1)*p+g-1,m=(n+1)*(p-1)+g-1,d=(n+1)*(p-1)+g,v=(n+1)*p+g;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Tt=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Vr=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function fr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Yg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Zn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends Zn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ah:s=t,a=2*e-i;break;case Rh:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:o=t,l=2*i-e;break;case Rh:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=s*c,this._offsetNext=o*c}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(n-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let R=0;R!==a;++R)s[R]=d*o[c+R]+v*o[h+R]+y*o[l+R]+x*o[u+R];return s}},ll=class extends Zn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(i-e)/(n-e),u=1-c;for(let f=0;f!==a;++f)s[f]=o[h+f]*u+o[l+f]*c;return s}},hl=class extends Zn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fr(e,this.TimeBufferType),this.values=fr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:fr(t.times,Array),values:fr(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case _r:e=this.InterpolantFactoryMethodLinear;break;case Zo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Yg(n))for(let a=0,l=n.length;a!==l;++a){let h=n[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Zo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(n)l=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[u+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}};ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=_r;var dn=class extends ci{};dn.prototype.ValueTypeName="bool";dn.prototype.ValueBufferType=Array;dn.prototype.DefaultInterpolation=gr;dn.prototype.InterpolantFactoryMethodLinear=void 0;dn.prototype.InterpolantFactoryMethodSmooth=void 0;var cl=class extends ci{};cl.prototype.ValueTypeName="color";var ul=class extends ci{};ul.prototype.ValueTypeName="number";var dl=class extends Zn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),h=t*a;for(let c=h+a;h!==c;h+=4)fi.slerpFlat(s,0,o,h-a,o,h,l);return s}},Ss=class extends ci{InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}};Ss.prototype.ValueTypeName="quaternion";Ss.prototype.DefaultInterpolation=_r;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var fn=class extends ci{};fn.prototype.ValueTypeName="string";fn.prototype.ValueBufferType=Array;fn.prototype.DefaultInterpolation=gr;fn.prototype.InterpolantFactoryMethodLinear=void 0;fn.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends ci{};fl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,s===!1&&n.onStart!==void 0&&n.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,u){return h.push(c,u),this},this.removeHandler=function(c){let u=h.indexOf(c);return u!==-1&&h.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=h.length;u<f;u+=2){let p=h[u],g=h[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}},Zg=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var pn=class extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Gr=class extends pn{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new re,Sc=new w,Tc=new w,Ts=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Sc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sc),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},gl=class extends Ts{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=Mr*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Wr=class extends pn{constructor(t,e,i=0,n=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.distance=i,this.angle=n,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ac=new re,hs=new w,Sa=new w,_l=class extends Ts{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),i.position.copy(hs),Sa.copy(i.position),Sa.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Sa),i.updateMatrixWorld(),n.makeTranslation(-hs.x,-hs.y,-hs.z),Ac.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac)}},Ve=class extends pn{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new _l}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},yl=class extends Ts{constructor(){super(new qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends pn{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new yl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},qr=class extends pn{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var $r=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Rc(){return(typeof performance>"u"?Date:performance).now()}var Cl="\\[\\]\\.:\\/",Kg=new RegExp("["+Cl+"]","g"),Pl="[^"+Cl+"]",Jg="[^"+Cl.replace("\\.","")+"]",jg=/((?:WC+[\/:])*)/.source.replace("WC",Pl),Qg=/(WCOD+)?/.source.replace("WCOD",Jg),t_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),i_=new RegExp("^"+jg+Qg+t_+e_+"$"),n_=["material","materials","bones","map"],vl=class{constructor(t,e,i){let n=i||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},le=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kg,"")}static parseTrackName(t){let e=i_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);n_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[n];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=vl;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ay=new Float32Array(1);var Kn=class{constructor(t,e,i=0,n=1/0){this.ray=new Gn(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return xl(t,this,i,e),i.sort(Cc),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)xl(t[n],this,i,e);return i.sort(Cc),i}};function Cc(r,t){return r.distance-t.distance}function xl(r,t,e,i){if(r.layers.test(t.layers)&&r.raycast(t,e),i===!0){let n=r.children;for(let s=0,o=n.length;s<o;s++)xl(n[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var D=96,mi=2,Ll=7,Il={value:0},Wt={box:new xt(1,1,1),cyl:new ue(.5,.5,1,8),cone:new Xi(.5,1,7),ico:new qi(.5,0),sphere:new Ce(.5,8,8),plane:new ze(1,1)},Qc=new re,tu=new fi,eu=new Wn,s_=new w;function mn(r,t,e,i,n,s,o,a,l,h,c){let u=r.clone();if(eu.set(a,l,h),tu.setFromEuler(eu),Qc.compose(s_.set(t,e,i),tu,new w(n,s,o)),u.applyMatrix4(Qc),c){let f=u.attributes.uv;for(let p=0;p<f.count;p++)f.setXY(p,f.getX(p)*c[0],f.getY(p)*c[1]);f.needsUpdate=!0}if(u.index){let f=u.toNonIndexed();return u.dispose(),f}return u}function As(r,t){let e=new ct(t),i=r.attributes.position.count,n=new Float32Array(i*3);for(let s=0;s<i;s++)n[s*3]=e.r,n[s*3+1]=e.g,n[s*3+2]=e.b;return r.setAttribute("color",new ve(n,3)),r}function iu(r){Object.assign(r.prototype,{_lamp(t,e,i){this._shape(t,"metal",Wt.cyl,e,3.4,i,.3,6.8,.3),this._shape(t,"neon",Wt.sphere,e,7,i,.9,.9,.9,{color:"#ffd98a"}),t.lamps.push(new w(e,7,i)),t.colliders.push({minX:e-.3,maxX:e+.3,minZ:i-.3,maxZ:i+.3,height:7})},_tree(t,e,i,n,s=1){this._shape(t,"trunk",Wt.cyl,i,1.5*s,n,.6*s,3*s,.6*s),this._shape(t,e()<.5?"leaf":"leaf2",Wt.ico,i,3.8*s,n,3.9*s,3.4*s,3.9*s,{ry:e()*3}),t.colliders.push({minX:i-.5,maxX:i+.5,minZ:n-.5,maxZ:n+.5,height:3*s})},_bush(t,e,i,n){this._shape(t,"bush",Wt.ico,i,.55,n,1.5,1.1,1.5,{ry:e()*3})},_rock(t,e,i,n){this._shape(t,"rock",Wt.ico,i,.4,n,1.4+e(),.9+e()*.7,1.4+e(),{ry:e()*3}),t.colliders.push({minX:i-.8,maxX:i+.8,minZ:n-.8,maxZ:n+.8,height:1.2})},_bench(t,e,i,n){this._box(t,"bench",e,.5,i,1.9,.14,.5,{ry:n,collide:!0})},_car(t,e,i,n,s){this._box(t,"car",i,.6,n,3.7,.85,1.75,{ry:s,collide:!0}),this._box(t,"carDark",i,1.32,n,1.9,.7,1.55,{ry:s})},_fountain(t,e,i){this._shape(t,"paving",Wt.cyl,e,.3,i,5,.5,5),this._shape(t,"water",Wt.cyl,e,.6,i,4.4,.35,4.4),this._shape(t,"paving",Wt.cyl,e,1.2,i,.7,1.6,.7),t.colliders.push({minX:e-2.5,maxX:e+2.5,minZ:i-2.5,maxZ:i+2.5,height:1.1})},_slide(t,e,i,n){this._box(t,"yellow",e,1.1,i,1.3,.16,4.4,{rx:-.42,ry:n}),this._box(t,"metal",e+Math.cos(n)*1.7,1,i+Math.sin(n)*1.7,.16,2,.16),t.colliders.push({minX:e-2.2,maxX:e+2.2,minZ:i-2.2,maxZ:i+2.2,height:2})},_swing(t,e,i,n){this._box(t,"metal",e,2.6,i,.14,.14,3.6,{ry:n}),this._box(t,"metal",e+Math.cos(n)*1.8,1.3,i+Math.sin(n)*1.8,.14,2.6,.14),this._box(t,"metal",e-Math.cos(n)*1.8,1.3,i-Math.sin(n)*1.8,.14,2.6,.14),this._box(t,"blue",e+Math.sin(n)*.8,.5,i+Math.cos(n)*.8,.6,.08,.32),this._box(t,"blue",e-Math.sin(n)*.8,.5,i-Math.cos(n)*.8,.6,.08,.32),t.colliders.push({minX:e-2,maxX:e+2,minZ:i-2,maxZ:i+2,height:2.6})},_sandbox(t,e,i){this._box(t,"sandbag",e,.25,i,5.2,.5,5.2),this._box(t,"bench",e,.35,i,5.6,.28,5.6),t.colliders.push({minX:e-2.8,maxX:e+2.8,minZ:i-2.8,maxZ:i+2.8,height:.6})},_playFrame(t,e,i){for(let[n,s]of[[-2,-2],[2,-2],[-2,2],[2,2]])this._box(t,"red",e+n,1.4,i+s,.2,2.8,.2);this._box(t,"red",e,2.7,i-2,4.4,.18,.18),this._box(t,"red",e,2.7,i+2,4.4,.18,.18),this._box(t,"metal",e,2.4,i,4.4,.1,.1),t.colliders.push({minX:e-2.4,maxX:e+2.4,minZ:i-2.4,maxZ:i+2.4,height:2.8})},_dumpster(t,e,i,n){this._box(t,"green",e,.7,i,2,1.2,1.1,{ry:n,collide:!0}),this._box(t,"metal",e,1.36,i,2.1,.12,1.2,{ry:n})},_planter(t,e,i){this._shape(t,"paving",Wt.cyl,e,.35,i,1.5,.7,1.5),this._shape(t,"bush",Wt.ico,e,1,i,1.6,1.2,1.6),t.colliders.push({minX:e-.8,maxX:e+.8,minZ:i-.8,maxZ:i+.8,height:1})},_vending(t,e,i,n){this._box(t,"red",e,1,i,1,2,.7,{ry:n,collide:!0}),this._box(t,"neon",e,1.6,i-.38,.8,.9,.06,{ry:n,color:"#8fe0ff"})},_fence(t,e,i,n,s,o){for(let a=0;a<=o;a++){let l=a/o;this._box(t,"metal",e+(n-e)*l,.75,i+(s-i)*l,.12,1.5,.12)}},_container(t,e,i,n,s,o){let a=["#8a5a3a","#3a6a8a","#6a8a3a","#8a3a4a"],l=a[e()*a.length|0],h=2.6;for(let c=0;c<(o?2:1);c++){let u=mn(Wt.box,i,1.3+c*h,n,6.1,h,2.44,0,s,0,null);u=As(u,l),this._push(t,"neon",u)}t.colliders.push({minX:i-3.2,maxX:i+3.2,minZ:n-1.6,maxZ:n+1.6,height:o?5.4:2.6})},_stairs(t,e,i,n){let a=Math.max(1,Math.ceil(n/.42));for(let l=0;l<a;l++){let h=(l+1)*(n/a);this._box(t,"paving",e,h/2,i-l*.85,1.6,h,.85,{collide:!0})}},_stash(t,e,i){let n=new V(Wt.box,this._mats.metal);n.scale.set(1.3,.8,.9),n.position.set(e,.4,i),n.rotation.y=Math.random()*Math.PI,n.castShadow=!0;let s={minX:e-.7,maxX:e+.7,minZ:i-.5,maxZ:i+.5,height:.8};n.userData.breakable={hp:24,kind:"stash",chunk:t,collider:s},t.group.add(n),t.solids.push(n),t.breakables.push(n),t.colliders.push(s),t.pois.push({x:e,z:i,type:"stash",label:"Cache"})},_window(t,e,i,n,s){let o=new V(Wt.box,this._mats.glass);o.scale.set(2.2,1.4,.12),o.position.set(e,i,n),o.rotation.y=s||0,o.userData.breakable={hp:8,kind:"glass"},t.group.add(o),t.solids.push(o),t.breakables.push(o)},_pine(t,e,i,n){this._shape(t,"trunk",Wt.cyl,e,1.1*n,i,.42*n,2.2*n,.42*n);for(let s=0;s<3;s++){let o=(1.6+s*1.3)*n,a=(1.9-s*.45)*n;this._shape(t,"pine",Wt.cone,e,o,i,a,1.8*n,a)}t.colliders.push({minX:e-.5,maxX:e+.5,minZ:i-.5,maxZ:i+.5,height:2.5*n})},_cactus(t,e,i,n){this._shape(t,"cactus",Wt.cyl,e,1.5*n,i,.55*n,3*n,.55*n);for(let s of[-1,1])this._shape(t,"cactus",Wt.cyl,e+.7*n*s,2.1*n,i,.36*n,1.1*n,.36*n);t.colliders.push({minX:e-.6,maxX:e+.6,minZ:i-.6,maxZ:i+.6,height:3*n})},_deadTree(t,e,i,n){this._shape(t,"deadwood",Wt.cyl,e,1.6*n,i,.36*n,3.2*n,.36*n);for(let s of[.6,2.3,4.1]){let o=new w(Math.cos(s),0,Math.sin(s));this._shape(t,"deadwood",Wt.cyl,e+o.x*.7*n,2.7*n,i+o.z*.7*n,.18*n,1.6*n,.18*n)}t.colliders.push({minX:e-.5,maxX:e+.5,minZ:i-.5,maxZ:i+.5,height:3*n})},_reed(t,e,i){for(let n=0;n<3;n++)this._shape(t,"reed",Wt.cyl,e+(Math.random()-.5)*.8,.7,i+(Math.random()-.5)*.8,.09,1.4,.09)},_crate(t,e,i){let n=new V(Wt.box,this._mats.crate);n.scale.set(1.1,1.1,1.1),n.position.set(e,.55,i),n.rotation.y=Math.random()*Math.PI;let s={minX:e-.6,maxX:e+.6,minZ:i-.6,maxZ:i+.6,height:1.1};n.castShadow=!0,n.userData.breakable={hp:45,kind:"crate",loot:"ammo",chunk:t,collider:s},t.group.add(n),t.solids.push(n),t.breakables.push(n),t.colliders.push(s)},_barrel(t,e,i){let n=new V(Wt.cyl,this._mats.barrel);n.scale.set(.8,1.3,.8),n.position.set(e,.65,i);let s={minX:e-.5,maxX:e+.5,minZ:i-.5,maxZ:i+.5,height:1.3};n.castShadow=!0,n.userData.breakable={hp:30,kind:"barrel",loot:"explode",chunk:t,collider:s},t.group.add(n),t.solids.push(n),t.breakables.push(n),t.colliders.push(s)}})}var de=(r,t,e)=>r<t?t:r>e?e:r,jr=(r,t,e)=>r+(t-r)*e,Xe=(r,t,e,i)=>jr(r,t,1-Math.exp(-e*i));function Dl(r){return function(){r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function kl(r,t,e){let i=e^Math.imul(r|0,374761393)^Math.imul(t|0,668265263);return i=Math.imul(i^i>>>13,1274126177),(i^i>>>16)>>>0}var Ul=(r,t)=>t[r()*t.length|0];function nu(r){Object.assign(r.prototype,{_building(t,e,i,n,s,o,a,l,h={}){if(this._inClear(i,n))return;let c="facade_"+l,u=this._mats.facade[l]?c:"facade_slate";this._box(t,u,i,a/2,n,s,a,o,{tile:!0});let f=a,p=s,g=o,_=h.steps??(a>40?2:e()<.5?1:0);for(let d=0;d<_;d++){let v=a*(.22+e()*.16);p*=.72,g*=.72,this._box(t,u,i,f+v/2,n,p,v,g,{tile:!0}),f+=v}this._box(t,"dark",i,1.6,n,s*1.02,3.2,o*1.02),this._box(t,"dark",i,f+.5,n,p*1.03,1,g*1.03);let m=Math.min(p,g);if(this._box(t,"metal",i+m*.2,f+1.6,n-m*.2,1.6,1.2,1.6),e()<.6&&this._shape(t,"metal",Wt.cyl,i-m*.2,f+1.5,n+m*.2,1.6,2,1.6),e()<.5&&this._box(t,"metal",i,f+4,n,.16,6,.16),h.sign||l==="glass"&&e()<.8){let d=["#ff3d81","#38f2c8","#ffd23a","#7c5cff","#ff8a3d"][e()*5|0],v=Math.min(s,o)*(.5+e()*.4),y=e()*4|0,x=a*(.45+e()*.35),R=.12;y===0?this._box(t,"neon",i,x,n-o/2-R,v,1.6,.12,{color:d}):y===1?this._box(t,"neon",i,x,n+o/2+R,v,1.6,.12,{color:d}):y===2?this._box(t,"neon",i-s/2-R,x,n,.12,1.6,v,{color:d}):this._box(t,"neon",i+s/2+R,x,n,.12,1.6,v,{color:d})}t.colliders.push({minX:i-s/2,maxX:i+s/2,minZ:n-o/2,maxZ:n+o/2,height:a+1.2})},_roads(t,e,i,n=16){this._plane(t,"road",e+n/2,.02,i+D/2,n,D,[n/8,D/8]),this._plane(t,"road",e+D/2,.02,i+n/2,D,n,[D/8,n/8])},_downtown(t,e,i,n){this._roads(t,i,n,18);let s=["glass","slate","navy","teal"],o=D-18-6,a=2,l=o/a;for(let h=0;h<a;h++)for(let c=0;c<a;c++){if(e()<.12)continue;let u=3+e()*3,f=l-u*2,p=l-u*2,g=34+e()*e()*78,_=i+18+3+l*h+l/2,m=n+18+3+l*c+l/2;this._building(t,e,_,m,f,p,g,Ul(e,s),{sign:e()<.6,steps:2}),e()<.4&&t.lootSpots.push(new w(_,0,m)),e()<.3&&t.spawns.push(new w(_+(e()-.5)*f*1.6,0,m+(e()-.5)*p*1.6))}this._lamp(t,i+18-3,n+18-3),e()<.6&&this._lamp(t,i+D-4,n+18-3),this._car(t,e,i+18/2,n+20+e()*(D-40),Math.PI/2),t.pois.push({x:i+D/2,z:n+D/2,type:"downtown",label:"Downtown"})},_city(t,e,i,n){this._roads(t,i,n,16);let s=["slate","navy","plum","teal","wine","brick"],o=D-16-6,a=3,l=o/a;for(let h=0;h<a;h++)for(let c=0;c<a;c++){if(e()<.22)continue;let u=2+e()*2,f=l-u*2,p=l-u*2,g=9+e()*e()*34,_=i+16+3+l*h+l/2,m=n+16+3+l*c+l/2;this._building(t,e,_,m,f,p,g,Ul(e,s)),e()<.4&&t.lootSpots.push(new w(_+(e()-.5)*f,0,m+(e()-.5)*p)),e()<.35&&t.spawns.push(new w(_+(e()-.5)*f*1.6,0,m+(e()-.5)*p*1.6))}this._lamp(t,i+16-2,n+16-2),e()<.5&&this._lamp(t,i+D-4,n+16-2);for(let h=0;h<2;h++)e()<.4&&this._car(t,e,i+16/2+(e()-.5)*5,n+8+e()*(D-16),Math.PI/2);for(let h=0;h<3;h++)e()<.3&&this._shape(t,"cone",Wt.cone,i+e()*D,.6,n+e()*D,1,1.2,1);if(e()<.7&&this._dumpster(t,i+20+e()*(D-40),n+20+e()*(D-40),e()*3),e()<.45){let h=e()<.4;this._enterable(t,e,i+24+e()*(D-48),n+24+e()*(D-48),12+e()*6,12+e()*6,h?6.8+e():4.5+e()*1.5,"residential",h?2:1)}e()<.5&&this._stash(t,i+20+e()*(D-40),n+20+e()*(D-40)),e()<.6&&this._vending(t,i+20+e()*(D-40),n+20+e()*(D-40),e()*3),e()<.7&&this._planter(t,i+20+e()*(D-40),n+20+e()*(D-40)),t.spawns.push(new w(i+16/2,0,n+e()*D)),t.spawns.push(new w(i+e()*D,0,n+16/2))},_residential(t,e,i,n){this._plane(t,"road",i+10/2,.02,n+D/2,10,D,[10/8,D/8]),this._plane(t,"road",i+D/2,.02,n+10/2,D,10,[D/8,10/8]);let s=D-10-8,o=3,a=s/o;for(let l=0;l<o;l++)for(let h=0;h<o;h++){if(e()<.15){this._tree(t,e,i+10+4+a*l+a/2,n+10+4+a*h+a/2,.9+e()*.5);continue}let c=a*.62,u=a*.55,f=4+e()*3,p=i+10+4+a*l+a/2,g=n+10+4+a*h+a/2;this._building(t,e,p,g,c,u,f,"brick",{steps:0}),this._box(t,"dark",p,f+1,g,c*1.05,.3,u*1.05),this._shape(t,"brick",Wt.cone,p,f+2,g,c*1.1,2.2,u*1.1,{ry:Math.PI/4}),this._fence(t,p-c/2-1.5,g-u/2-1.5,p+c/2+1.5,g-u/2-1.5,5),e()<.5&&this._tree(t,e,p+c,g+u,.8+e()*.5),e()<.3&&t.lootSpots.push(new w(p+c,0,g)),e()<.3&&t.spawns.push(new w(p+(e()-.5)*c,0,g+(e()-.5)*u))}e()<.7&&this._lamp(t,i+12,n+12),e()<.5&&this._planter(t,i+14+e()*(D-28),n+14+e()*(D-28)),t.pois.push({x:i+D/2,z:n+D/2,type:"residential",label:"Residential"})},_industrial(t,e,i,n){this._roads(t,i,n,20);for(let s=0;s<3;s++){let o=18+e()*12,a=12+e()*10,l=7+e()*5,h=i+20+4+e()*(D-20-o-8),c=n+20+4+e()*(D-20-a-8);this._building(t,e,h,c,o,a,l,"industrial",{steps:0}),t.spawns.push(new w(h+(e()-.5)*o,0,c+a))}for(let s=0;s<6;s++){let o=i+20+6+e()*(D-20-14),a=n+20+6+e()*(D-20-14);this._container(t,e,o,a,e()<.5?0:Math.PI/2,e()<.5)}this._fence(t,i+20,n+D-6,i+D-4,n+D-6,16);for(let s=0;s<3;s++)this._shape(t,"cone",Wt.cone,i+e()*D,.6,n+e()*D,1,1.2,1);for(let s=0;s<3;s++)t.lootSpots.push(new w(i+20+e()*(D-24),0,n+20+e()*(D-24)));t.pois.push({x:i+D/2,z:n+D/2,type:"industrial",label:"Industrial"})},_jungle(t,e,i,n){for(let s=0;s<14;s++)this._tree(t,e,i+4+e()*(D-8),n+4+e()*(D-8),.9+e()*1.1);for(let s=0;s<20;s++)this._bush(t,e,i+e()*D,n+e()*D);for(let s=0;s<6;s++)this._rock(t,e,i+e()*D,n+e()*D);for(let s=0;s<7;s++)t.spawns.push(new w(i+e()*D,0,n+e()*D));for(let s=0;s<3;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D))},_park(t,e,i,n){for(let s=0;s<10;s++)this._tree(t,e,i+6+e()*(D-12),n+6+e()*(D-12),1+e()*.8);e()<.7&&this._fountain(t,i+D/2,n+D/2);for(let s=0;s<5;s++){let o=e()*Math.PI*2,a=14+e()*16;this._bench(t,i+D/2+Math.cos(o)*a,n+D/2+Math.sin(o)*a,o)}for(let s=0;s<4;s++)this._lamp(t,i+8+e()*(D-16),n+8+e()*(D-16));for(let s=0;s<5;s++)t.spawns.push(new w(i+e()*D,0,n+e()*D));for(let s=0;s<5;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D));t.pois.push({x:i+D/2,z:n+D/2,type:"park",label:"Park"})},_school(t,e,i,n){this._building(t,e,i+D*.34,n+D*.32,D*.5,D*.36,12+e()*6,"school",{steps:0}),this._fence(t,i+4,n+D-5,i+D-4,n+D-5,18),this._slide(t,i+D*.62,n+D*.72,0),this._swing(t,i+D*.8,n+D*.72,0),this._sandbox(t,i+D*.45,n+D*.76);for(let s=0;s<3;s++)this._bench(t,i+D*.28+s*4,n+D*.62,0);for(let s=0;s<5;s++)t.spawns.push(new w(i+D*(.3+e()*.6),0,n+D*(.55+e()*.4)));for(let s=0;s<4;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D));t.pois.push({x:i+D*.34,z:n+D*.32,type:"school",label:"School"})},_playground(t,e,i,n){this._playFrame(t,i+D*.34,n+D*.4),this._slide(t,i+D*.62,n+D*.36,.5),this._swing(t,i+D*.5,n+D*.7,0),this._sandbox(t,i+D*.72,n+D*.68);for(let s=0;s<6;s++)this._shape(t,"yellow",Wt.ico,i+e()*D,.4,n+e()*D,.6+e()*.3,.6+e()*.3,.6+e()*.3);for(let s=0;s<4;s++)t.spawns.push(new w(i+e()*D,0,n+e()*D));for(let s=0;s<3;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D));t.pois.push({x:i+D*.5,z:n+D*.55,type:"playground",label:"Playground"})},_plaza(t,e,i,n){this._fountain(t,i+D/2,n+D/2);for(let s=0;s<8;s++){let o=s/8*Math.PI*2,a=16;this._bench(t,i+D/2+Math.cos(o)*a,n+D/2+Math.sin(o)*a,o)}for(let s=0;s<4;s++)this._lamp(t,i+8+s%2*(D-16),n+8+(s/2|0)*(D-16));for(let s=0;s<4;s++)this._tree(t,e,i+10+e()*(D-20),n+10+e()*(D-20),.9);for(let s=0;s<4;s++)t.spawns.push(new w(i+e()*D,0,n+e()*D));for(let s=0;s<3;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D));t.pois.push({x:i+D/2,z:n+D/2,type:"plaza",label:"Plaza"})},_desert(t,e,i,n){for(let s=0;s<9;s++)this._cactus(t,i+6+e()*(D-12),n+6+e()*(D-12),1+e()*.9);for(let s=0;s<7;s++)this._rock(t,e,i+e()*D,n+e()*D);for(let s=0;s<5;s++)this._shape(t,"sandbag",Wt.ico,i+e()*D,1.4,n+e()*D,4+e()*4,1.6,4+e()*4);e()<.5&&this._building(t,e,i+D*.3,n+D*.3,22,16,7+e()*4,"industrial",{steps:0});for(let s=0;s<2;s++)this._barrel(t,i+e()*D,n+e()*D);for(let s=0;s<5;s++)t.spawns.push(new w(i+e()*D,0,n+e()*D));for(let s=0;s<4;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D));t.pois.push({x:i+D/2,z:n+D/2,type:"desert",label:"Wastes"})},_snow(t,e,i,n){for(let s=0;s<16;s++)this._pine(t,i+4+e()*(D-8),n+4+e()*(D-8),1+e()*1.1);for(let s=0;s<6;s++)this._rock(t,e,i+e()*D,n+e()*D);e()<.6&&this._building(t,e,i+D*.55,n+D*.35,20,14,6+e()*3,"residential",{steps:1});for(let s=0;s<4;s++)this._shape(t,"snowbank",Wt.ico,i+e()*D,.4,n+e()*D,3+e()*3,1.1,3+e()*3);for(let s=0;s<2;s++)this._crate(t,i+e()*D,n+e()*D);for(let s=0;s<5;s++)t.spawns.push(new w(i+e()*D,0,n+e()*D));for(let s=0;s<4;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D));t.pois.push({x:i+D/2,z:n+D/2,type:"snow",label:"Frozen Ground"})},_swamp(t,e,i,n){for(let s=0;s<8;s++)this._deadTree(t,i+5+e()*(D-10),n+5+e()*(D-10),1+e()*.8);for(let s=0;s<18;s++)this._reed(t,i+e()*D,n+e()*D);for(let s=0;s<5;s++)this._shape(t,"mud",Wt.ico,i+e()*D,.08,n+e()*D,5+e()*5,.16,5+e()*5);e()<.5&&this._building(t,e,i+D*.4,n+D*.4,18,14,6+e()*3,"industrial",{steps:0});for(let s=0;s<6;s++)t.spawns.push(new w(i+e()*D,0,n+e()*D));for(let s=0;s<5;s++)t.lootSpots.push(new w(i+e()*D,0,n+e()*D));t.pois.push({x:i+D/2,z:n+D/2,type:"swamp",label:"Marsh"})},_enterable(t,e,i,n,s,o,a,l,h=1){let u=s/2,f=o/2,p=3,g=-p/2;this._shape(t,"paving",Wt.box,i,.06,n,s-.4,.12,o-.4);let _=(v,y,x,R)=>{this._box(t,l,v,a/2,y,x,a,R,{collide:!0})};_(i-u+.4/2,n,.4,o),_(i+u-.4/2,n,.4,o),_(i,n+f-.4/2,s,.4);let m=(s-p)/2;_(i-u+m/2,n-f+.4/2,m,.4),_(i+u-m/2,n-f+.4/2,m,.4),this._box(t,l,i+g+p/2,a-.5,n-f+.4/2,p,1,.4),this._box(t,"dark",i,a+.15,n,s,.3,o,{collide:!0});for(let v of[-1,1])this._shape(t,"neon",Wt.box,i+v*(u-.4/2),a*.6,n+f*.4,.4*1.1,1,2.2,{color:"#ffd98a"}),e()<.6&&this._window(t,i+v*(u-.4/2),a*.6,n-f*.35,Math.PI/2);e()<.5&&this._window(t,i,a*.6,n+f-.4/2,0);for(let v=0;v<3;v++)t.lootSpots.push(new w(i+(e()-.5)*(s-6),0,n+(e()-.5)*(o-6)));if(e()<.7&&this._crate(t,i+(e()-.5)*(s-6),n+(e()-.5)*(o-6)),this._stairs(t,i+u+1.6,n-f+2,a+.3),h>1){let y=i-u+.4,x=i+u-.4,R=i-u+3.4,A=1.6,C=R-A,k=R+A;C>y&&this._box(t,"paving",(y+C)/2,3.3,n,C-y,.25,o-.4,{collide:!0}),x>k&&this._box(t,"paving",(k+x)/2,3.3,n,x-k,.25,o-.4,{collide:!0});let M=.42,E=.8,U=Math.ceil(3.3/M);for(let F=0;F<U;F++){let K=(F+1)*(3.3/U);this._box(t,"paving",i-u+2.2,K/2,n+f-2-F*E,2.6,K,E,{collide:!0})}for(let F=0;F<3;F++){let K=i+(e()-.5)*(s-6),L=n+(e()-.5)*(o-6);Math.abs(K-R)<3||t.lootSpots.push(new w(K,3.3+.2,L))}e()<.6&&this._crate(t,i+(e()-.5)*(s-8),n+(e()-.5)*(o-8)),e()<.35&&this._stash(t,i+(e()-.5)*(s-8),n+(e()-.5)*(o-8)),this._shape(t,"neon",Wt.sphere,i,3.3-.4,n,.5,.5,.5,{color:"#ffd98a"})}let d={minX:i-u,maxX:i+u,minZ:n-f,maxZ:n+f,h:a};t.interiorRect=d,this.interiors.push(d),t.pois.push({x:i,z:n,type:"loot",label:h>1?"Building (2F)":"Building"})}})}function Qr(r,t=!1){let e=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ae,h=0;for(let c=0;c<r.length;++c){let u=r[c],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,c),h+=p}}if(e){let c=0,u=[];for(let f=0;f<r.length;++f){let p=r[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+c);c+=r[f].attributes.position.count}l.setIndex(u)}for(let c in s){let u=su(s[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,u)}for(let c in o){let u=o[c][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let f=0;f<u;++f){let p=[];for(let _=0;_<o[c].length;++_)p.push(o[c][_][f]);let g=su(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function su(r){let t,e,i,n=-1,s=0;for(let h=0;h<r.length;++h){let c=r[h];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=c.gpuType),n!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.array.length}let o=new t(s),a=0;for(let h=0;h<r.length;++h)o.set(r[h].array,a),a+=r[h].array.length;let l=new ve(o,e,i);return n!==void 0&&(l.gpuType=n),l}var to=null;function r_(){if(to)return to;let r=(a,l)=>{let h=document.createElement("canvas");return h.width=a,h.height=l,h},t=(a,l=!0)=>{let h=new Wi(a);return l&&(h.wrapS=h.wrapT=ln),h.anisotropy=4,h.colorSpace=be,h},e=(a,l=.22,h=["#ffd98a","#a7e8ff","#ff9ecb","#c9ffd0","#fff4c2"])=>{let c=r(128,256),u=r(128,256),f=c.getContext("2d"),p=u.getContext("2d");f.fillStyle=a,f.fillRect(0,0,128,256),p.fillStyle="#000",p.fillRect(0,0,128,256);let g=f.createLinearGradient(0,0,128,0);g.addColorStop(0,"rgba(0,0,0,.22)"),g.addColorStop(.5,"rgba(255,255,255,.08)"),g.addColorStop(1,"rgba(0,0,0,.28)"),f.fillStyle=g,f.fillRect(0,0,128,256);for(let _=0;_<12;_++)for(let m=0;m<4;m++){let d=14+m*28,v=10+_*20,y=Math.random()<l;f.fillStyle=y?"rgba(255,255,255,.16)":"rgba(26,34,48,.72)",f.fillRect(d,v,15,12),y&&(p.fillStyle=h[Math.random()*h.length|0],p.fillRect(d,v,15,12))}return{map:t(c),emissive:t(u)}},i=(a,l,h)=>{let c=r(128,128),u=c.getContext("2d");u.fillStyle=a,u.fillRect(0,0,128,128);for(let f=0;f<l;f++)u.fillStyle=`rgba(${h[0]},${h[1]},${h[2]},${.1+Math.random()*.25})`,u.fillRect(Math.random()*128,Math.random()*128,2,2);return t(c)},n=(()=>{let a=r(128,512),l=a.getContext("2d");l.fillStyle="#5b626d",l.fillRect(0,0,128,512);for(let h=0;h<3200;h++)l.fillStyle="rgba(190,195,205,.07)",l.fillRect(Math.random()*128,Math.random()*512,2,2);l.fillStyle="#e8c33a";for(let h=0;h<512;h+=64)l.fillRect(62,h,5,34);return t(a)})(),s=(()=>{let a=r(64,64),l=a.getContext("2d");return l.fillStyle="#787e88",l.fillRect(0,0,64,64),l.strokeStyle="rgba(24,26,30,.7)",l.lineWidth=3,l.strokeRect(0,0,64,64),t(a)})(),o=(()=>{let a=r(64,64),l=a.getContext("2d");return l.fillStyle="#8a8274",l.fillRect(0,0,64,64),l.strokeStyle="rgba(34,30,24,.55)",l.lineWidth=2,l.strokeRect(0,0,64,64),t(a)})();return to={facade:{slate:e("#6d7c9b"),navy:e("#71809d"),plum:e("#806d89"),teal:e("#657a8e"),wine:e("#846571"),brick:e("#8f6354"),school:e("#668d71"),glass:e("#33425c",.42,["#a7e8ff","#dff2ff","#8fd0ff"]),industrial:e("#7a8391",.16,["#ffd98a","#cfe0ff"])},road:n,sidewalk:s,paving:o,grass:i("#3a5a2e",4200,[60,120,50]),sand:i("#cbb078",3200,[200,170,110]),snow:i("#e6edf6",3200,[215,226,240]),mud:i("#463c2a",3200,[70,62,44]),dirt:i("#5c4a34",3e3,[110,90,60])},to}function eo(r,t){r.onBeforeCompile=e=>{e.uniforms.uTime=Il,e.vertexShader=`uniform float uTime;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float swayF = max(0.0, transformed.y) * `+t.toFixed(4)+`;
transformed.x += sin(uTime * 1.6 + (position.x + position.z) * 0.3) * swayF;
transformed.z += cos(uTime * 1.3 + (position.x - position.z) * 0.28) * swayF;
`)},r.needsUpdate=!0}var Qn=class{constructor(t,e={}){this.scene=t,this.seed=e.seed??1337,this.weights=e.weights??[["downtown",2],["city",5],["residential",3],["industrial",2],["jungle",2],["park",2],["playground",1],["school",1],["plaza",1]],this.clearZones=e.clearZones??[],this.chunks=new Map,this.staticGroup=new Kt,this.staticGroup.name="static",t.add(this.staticGroup),this.staticColliders=[],this.chunkSize=D,this.buildBudgetMs=6,this.interiors=[],this._buildQueue=[],this._queueCentre="",this._facadeMats=[],this._mats=this._materials()}_materials(){let t=r_(),e=a=>new Tt(a),i=a=>{let l=e({map:a.map,emissiveMap:a.emissive,emissive:new ct("#fff"),emissiveIntensity:1.25,roughness:.86,metalness:.12});return this._facadeMats.push(l),l},n={};for(let[a,l]of Object.entries(t.facade))n[a]=i(l);let s=(a,l)=>{let h=a.clone();return h.repeat.set(l,l),h.needsUpdate=!0,e({map:h,roughness:1})},o={facade:n,dark:e({color:"#39414f",roughness:1}),metal:e({color:"#2c333d",roughness:.55,metalness:.6}),trunk:e({color:"#4a3624",roughness:1}),leaf:eo(e({color:"#3f7d45",roughness:1,flatShading:!0}),.03),leaf2:eo(e({color:"#4a8f38",roughness:1,flatShading:!0}),.03),bush:eo(e({color:"#35702f",roughness:1,flatShading:!0}),.016),rock:e({color:"#6b6b70",roughness:1,flatShading:!0}),cone:e({color:"#ff6a2b",roughness:.8}),bench:e({color:"#6a4a2c",roughness:.9}),car:e({color:"#8b95a8",roughness:.45,metalness:.5}),carDark:e({color:"#1d2530",roughness:.5,metalness:.4}),water:e({color:"#3f93b8",roughness:.15,metalness:.4,transparent:!0,opacity:.85}),paving:e({map:t.paving,roughness:.95}),sidewalk:e({map:t.sidewalk,roughness:.95}),road:e({map:t.road,roughness:.96}),sandbag:e({color:"#8a7a58",roughness:1,flatShading:!0}),pine:eo(e({color:"#2f5a3a",roughness:1,flatShading:!0}),.022),cactus:e({color:"#4a7a3a",roughness:1,flatShading:!0}),reed:e({color:"#6a7a3a",roughness:1,flatShading:!0}),deadwood:e({color:"#5a5044",roughness:1,flatShading:!0}),crate:e({color:"#7a5a32",roughness:.9,flatShading:!0}),glass:e({color:"#9fd8f0",roughness:.12,metalness:.1,transparent:!0,opacity:.38}),barrel:e({color:"#8a3a2a",roughness:.7,metalness:.3,flatShading:!0}),wood:e({color:"#7a5530",roughness:.9}),white:e({color:"#d8dde6",roughness:.8}),red:e({color:"#c8442f",roughness:.8}),blue:e({color:"#3f74c8",roughness:.8}),yellow:e({color:"#e0b028",roughness:.8}),green:e({color:"#3f9e57",roughness:.8}),container:e({color:"#8a5a3a",roughness:.8,flatShading:!0}),neon:new Ot({vertexColors:!0,toneMapped:!1}),g_road:s(t.road,1),g_grass:s(t.grass,1),g_sand:s(t.sand,1),g_paving:s(t.paving,1),g_dirt:s(t.dirt,1),g_snow:s(t.snow,1),g_mud:s(t.mud,1),facade:n};for(let[a,l]of Object.entries(n))o["facade_"+a]=l;return o}setEmissive(t){if(this._lastEmissive!==t){this._lastEmissive=t,this._emissiveBase=t;for(let e of this._facadeMats)e.emissiveIntensity=t}}flicker(){let t=this._emissiveBase||0;if(!(t<=0))for(let e of this._facadeMats)e.emissiveIntensity=t*(.93+Math.random()*.12)}setWet(t){if(this._wet===t)return;this._wet=t;let e=this._mats.g_road,i=this._mats.road;for(let n of[e,i])n&&(n.roughness=1-t*.72,n.metalness=t*.55,n.needsUpdate=!0)}lampsNear(t,e=3,i=45){let n=[],s=Math.floor(t.x/D),o=Math.floor(t.z/D);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){let h=this.chunks.get(s+a+","+(o+l));if(h)for(let c of h.lamps){let u=c.distanceTo(t);u<i&&n.push({pos:c,d:u})}}return n.sort((a,l)=>a.d-l.d),n.slice(0,e).map(a=>a.pos)}biomeFor(t,e){let i=Dl(kl(Math.floor(t/2),Math.floor(e/2),this.seed^2654435769)),n=this.weights.reduce((o,a)=>o+a[1],0),s=i()*n;for(let[o,a]of this.weights)if(s-=a,s<=0)return o;return"city"}_inClear(t,e){for(let i of this.clearZones){let n=t-i.x,s=e-i.z;if(n*n+s*s<i.r*i.r)return!0}return!1}setWindTime(t){Il.value=t}isIndoor(t){for(let e=this.interiors.length-1;e>=0;e--){let i=this.interiors[e];if(t.x>i.minX&&t.x<i.maxX&&t.z>i.minZ&&t.z<i.maxZ&&t.y<i.h)return!0}return!1}warmup(t,e){let i=e===void 0?mi:e,n=Math.floor(t.x/D),s=Math.floor(t.z/D);for(let o=-i;o<=i;o++)for(let a=-i;a<=i;a++){let l=n+o+","+(s+a);this.chunks.has(l)||this._loadChunk(n+o,s+a)}}update(t,e){let i=e===void 0?this.buildBudgetMs:e,n=Math.floor(t.x/D),s=Math.floor(t.z/D),o=new Set;for(let h=-mi;h<=mi;h++)for(let c=-mi;c<=mi;c++)o.add(n+h+","+(s+c));let a=n+","+s;if(this._queueCentre!==a||this._buildQueue.length===0){this._queueCentre=a,this.interiors=[],this._buildQueue=[];for(let c of o)this.chunks.has(c)||this._buildQueue.push(c);let h=c=>{let[u,f]=c.split(",").map(Number);return Math.abs(u-n)+Math.abs(f-s)};this._buildQueue.sort((c,u)=>h(c)-h(u))}let l=performance.now();for(;this._buildQueue.length&&performance.now()-l<i;){let h=this._buildQueue.shift();if(this.chunks.has(h)||!o.has(h))continue;let[c,u]=h.split(",").map(Number);this._loadChunk(c,u)}for(let[h,c]of this.chunks)if(!o.has(h)&&(this.scene.remove(c.group),this.chunks.delete(h),c.interiorRect)){let u=this.interiors.indexOf(c.interiorRect);u>=0&&this.interiors.splice(u,1)}}_loadChunk(t,e){let i=Dl(kl(t,e,this.seed)),n=this.biomeFor(t,e),s=t*D,o=e*D,a={cx:t,cz:e,biome:n,ox:s,oz:o,group:new Kt,colliders:[],solids:[],spawns:[],lootSpots:[],pois:[],lamps:[],breakables:[],buckets:new Map},l=n==="jungle"||n==="park"?"g_grass":n==="playground"||n==="desert"?"g_sand":n==="industrial"?"g_dirt":n==="snow"?"g_snow":n==="swamp"?"g_mud":n==="plaza"?"g_paving":"g_road";this._push(a,l,mn(Wt.plane,s+D/2,0,o+D/2,D,D,1,-Math.PI/2,0,0,[D/8,D/8])),(this["_"+n]||this._city).call(this,a,i,s,o);for(let[c,u]of a.buckets){if(!u.length)continue;let f=u.length===1?u[0]:Qr(u,!1);if(!f)continue;let p=new V(f,this._mats[c]);if(p.castShadow=c!=="neon",p.receiveShadow=c!=="neon",a.group.add(p),a.solids.push(p),u.length>1)for(let g of u)g.dispose()}return a.buckets=null,this.scene.add(a.group),this.chunks.set(t+","+e,a),a}_push(t,e,i){t.buckets.has(e)||t.buckets.set(e,[]),t.buckets.get(e).push(i)}_box(t,e,i,n,s,o,a,l,h={}){if(this._inClear(i,s)&&!h.force)return;let c=h.tile?[Math.max(1,Math.round(o/Ll)),Math.max(1,Math.round(a/Ll))]:null,u=mn(Wt.box,i,n,s,o,a,l,h.rx||0,h.ry||0,h.rz||0,c);h.color&&(u=As(u,h.color)),this._push(t,e,u),h.collide&&t.colliders.push({minX:i-o/2,maxX:i+o/2,minZ:s-l/2,maxZ:s+l/2,height:n+a/2})}_shape(t,e,i,n,s,o,a,l,h,c={}){if(this._inClear(n,o)&&!c.force)return;let u=mn(i,n,s,o,a,l,h,c.rx||0,c.ry||0,c.rz||0,null);c.color&&(u=As(u,c.color)),this._push(t,e,u),c.collide&&t.colliders.push({minX:n-a/2,maxX:n+a/2,minZ:o-h/2,maxZ:o+h/2,height:s+l/2})}_plane(t,e,i,n,s,o,a,l,h={}){this._inClear(i,s)&&!h.force||this._push(t,e,mn(Wt.plane,i,n,s,o,a,1,-Math.PI/2,h.ry||0,0,l))}addStatic(t,e){if(t&&this.staticGroup.add(t),e)for(let i of e)this.staticColliders.push(i);return t}collidersNear(t,e,i,n){n=n||[],n.length=0;for(let a of this.staticColliders)a.maxX<t-i||a.minX>t+i||a.maxZ<e-i||a.minZ>e+i||n.push(a);let s=Math.floor(t/D),o=Math.floor(e/D);for(let a=-1;a<=1;a++)for(let l=-1;l<=1;l++){let h=this.chunks.get(s+a+","+(o+l));if(h)for(let c of h.colliders)c.maxX<t-i||c.minX>t+i||c.maxZ<e-i||c.minZ>e+i||n.push(c)}return n}solidsNear(t,e,i,n){n=n||[],n.length=0;for(let l of this.staticColliders)l.mesh&&!(l.maxX<t-i||l.minX>t+i||l.maxZ<e-i||l.minZ>e+i)&&n.push(l.mesh);let s=Math.floor(t/D),o=Math.floor(e/D),a=Math.ceil(i/D)+1;for(let l=-a;l<=a;l++)for(let h=-a;h<=a;h++){let c=this.chunks.get(s+l+","+(o+h));if(c)for(let u of c.solids)n.push(u)}return n}spawnAround(t,e,i,n=Math.random){let s=n()*Math.PI*2,o=e+n()*(i-e),a=t.x+Math.cos(s)*o,l=t.z+Math.sin(s)*o;for(let h of this.collidersNear(a,l,1.2))if(a>h.minX-1&&a<h.maxX+1&&l>h.minZ-1&&l<h.maxZ+1){a=t.x-Math.cos(s)*o*.6,l=t.z-Math.sin(s)*o*.6;break}return new w(a,0,l)}poisNear(t,e){let i=[],n=Math.floor(t.x/D),s=Math.floor(t.z/D);for(let o=-mi;o<=mi;o++)for(let a=-mi;a<=mi;a++){let l=this.chunks.get(n+o+","+(s+a));if(l)for(let h of l.pois)Math.hypot(h.x-t.x,h.z-t.z)<e&&i.push(h)}return i}};iu(Qn);nu(Qn);var io=class{constructor(t,e){this.camera=t,this.world=e,this.pos=new w(0,0,0),this.vel=new w,this.yaw=0,this.pitch=0,this.eye=1.7,this.radius=.45,this.onGround=!1,this.bobT=0,this.speedWalk=6,this.speedRun=10.5,this.jumpSpeed=8.6,this.gravity=26,this.maxHealth=100,this.health=100,this.armor=0,this.maxArmor=100,this.armorAbsorb=.5,this.maxStamina=100,this.stamina=100,this.carry=6,this.alive=!0,this.zoom=0,this.zoomTarget=0,this.baseFov=78,this.adsFov=42,this.recoilPitch=0,this.recoilYaw=0,this.shake=0,this.crouch=0,this.crouchTarget=0,this.prone=0,this.proneTarget=0,this.slideT=0,this.mantleT=0,this.mantleFrom=null,this.mantleTo=null,this.lean=0,this.leanTarget=0,this.fovPunch=0,this.stepT=0,this.coyote=0,this.jumpBuffer=0,this.landDip=0,this.lookVX=0,this.lookVY=0,this._cols=[],this.landVel=0,this.lastDamageAt=-99,this.lastDamageDir=0}breakFree(){return this.grabLock?(this.grabLock.t=Math.min(this.grabLock.t,.05),!0):!1}_tryMantle(){if(this.mantleT>0||!this.onGround||this.crouch>.5||!this._wantJump)return!1;let t=Math.hypot(this.vel.x,this.vel.z),e=t>.2?this.vel.x/t:-Math.sin(this.yaw),i=t>.2?this.vel.z/t:-Math.cos(this.yaw),n=this.pos.x+e*1.1,s=this.pos.z+i*1.1;for(let o of this.world.collidersNear(n,s,.6,this._cols))if(n>o.minX&&n<o.maxX&&s>o.minZ&&s<o.maxZ){let a=o.height-this.pos.y;if(a>1&&a<2.3)return this.mantleDur=.42,this.mantleT=this.mantleDur,this.mantleFrom={x:this.pos.x,y:this.pos.y,z:this.pos.z},this.mantleTo={x:n+e*.7,y:o.height,z:s+i*.7},this._wantJump=!1,this.onVault&&this.onVault(),!0}return!1}_tryVault(){if(!this.onGround||this.crouch>.5)return;let t=Math.hypot(this.vel.x,this.vel.z);if(t<3.4)return;let e=this.pos.x+this.vel.x/t*.95,i=this.pos.z+this.vel.z/t*.95;for(let n of this.world.collidersNear(e,i,.5,this._cols))if(e>n.minX&&e<n.maxX&&i>n.minZ&&i<n.maxZ&&n.height>.35&&n.height<=1.4){this.vel.y=Math.sqrt(2*this.gravity*(n.height+.6));let s=Math.min(1.8,t*.3);this.vel.x+=this.vel.x/t*s,this.vel.z+=this.vel.z/t*s,this.onGround=!1,this.coyote=0,this.onVault&&this.onVault();return}}registerHit(t){this.lastDamageAt=performance.now(),t&&(this.lastDamageDir=Math.atan2(t.x-this.pos.x,t.z-this.pos.z))}reset(t){this.pos.copy(t),this.vel.set(0,0,0),this.yaw=0,this.pitch=0,this.health=this.maxHealth,this.stamina=this.maxStamina,this.alive=!0}addLook(t,e){let i=(this.lookScale??.0022)*(1-this.zoom*.5);this.invertY&&(e=-e),this.yaw-=t*i,this.pitch-=e*i,this.lookVX=t,this.lookVY=e;let n=Math.PI/2-.05;this.pitch=de(this.pitch,-n,n)}addImpulse(t){this.vel.x+=t.x,this.vel.z+=t.z,t.y&&(this.vel.y+=t.y)}kick(t,e){this.recoilPitch+=t,this.recoilYaw+=e}addShake(t){this.shake=Math.min(1,this.shake+t)}update(t,e,i={}){this.zoomTarget=e.aim?1:0,this.zoom=Xe(this.zoom,this.zoomTarget,12,t),this.proneTarget=i.prone?1:0,this.prone=Xe(this.prone,this.proneTarget,8,t),this.crouchTarget=i.crouch&&!this.proneTarget?1:0,this.crouch=Xe(this.crouch,this.crouchTarget,10,t),this.leanTarget=(i.leanR?1:0)-(i.leanL?1:0),this.lean=Xe(this.lean,this.leanTarget,9,t),this.fovPunch=Xe(this.fovPunch,0,8,t);let n=this.baseFov+(this.adsFov-this.baseFov)*this.zoom-this.fovPunch;if(Math.abs(this.camera.fov-n)>.01&&(this.camera.fov=n,this.camera.updateProjectionMatrix()),!this.alive){this.applyToCamera(t);return}if(this.grabLock){let R=this.grabLock;R.t-=t,this.vel.set(0,0,0),R.tick===void 0&&(R.tick=0),R.tick+=t,R.tick>=.4&&(R.tick=0,this.damage(R.power),this.onGrabBite&&this.onGrabBite()),R.t<=0&&(this.grabLock=null,this.onGrabEnd&&this.onGrabEnd()),this.applyToCamera(t);return}if(this.mantleT>0){this.mantleT-=t;let R=1-Math.max(0,this.mantleT)/this.mantleDur,A=R*R*(3-2*R);this.pos.x=this.mantleFrom.x+(this.mantleTo.x-this.mantleFrom.x)*A,this.pos.z=this.mantleFrom.z+(this.mantleTo.z-this.mantleFrom.z)*A,this.pos.y=this.mantleFrom.y+(this.mantleTo.y-this.mantleFrom.y)*A,this.vel.set(0,0,0),this.onGround=!0,this.applyToCamera(t);return}let s=(e.forward?1:0)-(e.back?1:0),o=(e.right?1:0)-(e.left?1:0);e.axis&&(e.axis.x||e.axis.y)&&(s+=e.axis.y,o+=e.axis.x);let a=Math.hypot(s,o);a>1?(s/=a,o/=a):a===0&&(s=0,o=0);let l=Math.sin(this.yaw),h=Math.cos(this.yaw),c=-l*s+h*o,u=-h*s-l*o,f=s||o,p=e.sprint&&f&&this.stamina>1;p?this.stamina=Math.max(0,this.stamina-18*t):this.stamina=Math.min(this.maxStamina,this.stamina+12*t);let g=1-this.zoom*.45,_=(1-this.crouch*.55)*(1-this.prone*.65),m=(p?this.speedRun:this.speedWalk)*g*_,d=Math.hypot(this.vel.x,this.vel.z);if(this.onGround&&i.crouch&&p&&d>4.2&&this.slideT<=0&&(this.slideT=.62,this.onSlide&&this.onSlide()),this.slideT>0){this.slideT-=t;let R=Math.max(.2,this.slideT/.62);this.vel.x*=1-1.1*t,this.vel.z*=1-1.1*t,this.vel.x+=c*m*R*.35*t,this.vel.z+=u*m*R*.35*t,this.crouch=Math.max(this.crouch,.9),this.slideT<=0&&(this.slideT=0)}else{let R=this.onGround?14:4;this.vel.x+=(c*m-this.vel.x)*Math.min(1,R*t),this.vel.z+=(u*m-this.vel.z)*Math.min(1,R*t)}if(this.flying){this.vel.y=0,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t,i.jump&&(this.pos.y+=9*t),i.crouch&&(this.pos.y-=9*t),this.pos.y=Math.max(.2,this.pos.y),this.onGround=!0,this.applyToCamera(t);return}this.coyote=this.onGround?.12:Math.max(0,this.coyote-t),this._wantJump=!!i.jump,this.jumpBuffer=i.jump?.15:Math.max(0,this.jumpBuffer-t),this.jumpBuffer>0&&this.coyote>0&&(this.vel.y=this.jumpSpeed,this.onGround=!1,this.coyote=0,this.jumpBuffer=0),this.vel.y-=this.gravity*t;let v=Math.exp(-11*t);this.lookVX*=v,this.lookVY*=v,this.pos.x+=this.vel.x*t,this._resolve("x"),this.pos.z+=this.vel.z*t,this._resolve("z");let y=!this.onGround;this.landVel=this.vel.y,this.pos.y+=this.vel.y*t;let x=this._groundHeight();this.pos.y<=x?(this.pos.y=x,this.vel.y=0,this.onGround=!0):this.onGround=!1,y&&this.onGround&&this.landVel<-6&&(this.landDip=Math.min(1,(-this.landVel-6)/16),this.onLand&&this.onLand(this.landVel),this.landVel<-15&&this.damage((Math.abs(this.landVel)-15)*2.2)),this.landDip=Math.max(0,this.landDip-t*3.2),this._tryMantle()||this._tryVault(),this.onGround&&Math.hypot(this.vel.x,this.vel.z)>.5&&(this.bobT+=t),performance.now()-this.lastDamageAt>5e3&&this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+1.4*(this.regenMul||1)*t)),this.onGround&&!p&&(s||o)?(this.stepT-=t,this.stepT<=0&&(this.stepT=.52,this.onStep&&this.onStep())):this.onGround&&p&&(this.stepT-=t,this.stepT<=0&&(this.stepT=.33,this.onStep&&this.onStep())),this.applyToCamera(t)}_groundHeight(){let t=0,e=this.radius*.75;for(let i of this.world.collidersNear(this.pos.x,this.pos.z,e+.6,this._cols))i.height>this.pos.y+.55||this.pos.x>i.minX-e&&this.pos.x<i.maxX+e&&this.pos.z>i.minZ-e&&this.pos.z<i.maxZ+e&&i.height>t&&(t=i.height);return t}_resolve(t){let e=this.radius,i=this.pos.y,n=this.world.collidersNear(this.pos.x,this.pos.z,3,this._cols);for(let s of n)if(!(i>=s.height-.05)&&this.pos.x>s.minX-e&&this.pos.x<s.maxX+e&&this.pos.z>s.minZ-e&&this.pos.z<s.maxZ+e)if(t==="x"){let o=(s.minX+s.maxX)/2;this.pos.x=this.pos.x<o?s.minX-e:s.maxX+e,this.vel.x=0}else{let o=(s.minZ+s.maxZ)/2;this.pos.z=this.pos.z<o?s.minZ-e:s.maxZ+e,this.vel.z=0}}applyToCamera(t){this.recoilPitch=Xe(this.recoilPitch,0,9,t),this.recoilYaw=Xe(this.recoilYaw,0,9,t),this.shake=Math.max(0,this.shake-t*2.5);let e=!this.noBob&&this.onGround&&Math.hypot(this.vel.x,this.vel.z)>.5?Math.sin(this.bobT*11)*.045:0,i=this.shakeEnabled===!1?0:this.shake,n=(Math.random()-.5)*i*.06,s=(Math.random()-.5)*i*.06,o=this.eye-this.crouch*.72-this.prone*1.15,a=Math.cos(this.yaw)*this.lean*.55,l=-Math.sin(this.yaw)*this.lean*.55;this.camera.position.set(this.pos.x+a,this.pos.y+o+e-this.landDip*.34,this.pos.z+l),this.camera.rotation.set(0,0,0),this.camera.rotateY(this.yaw+this.recoilYaw+n),this.camera.rotateX(de(this.pitch+this.recoilPitch+s-this.landDip*.07,-1.55,1.55)),this.lean&&this.camera.rotateZ(-this.lean*.13)}damage(t){if(!this.alive)return!1;if(this.armor>0){let e=Math.min(this.armor,t*this.armorAbsorb);this.armor-=e,t-=e}return this.health-=t,this.lastDamageAt=performance.now(),this.health<=0&&(this.health=0,this.alive=!1),!0}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}addArmor(t){this.armor=Math.min(this.maxArmor,this.armor+t)}};var Rs=[{id:"forward",label:"Move forward",group:"Movement"},{id:"back",label:"Move back",group:"Movement"},{id:"left",label:"Strafe left",group:"Movement"},{id:"right",label:"Strafe right",group:"Movement"},{id:"jump",label:"Jump",group:"Movement"},{id:"sprint",label:"Sprint",group:"Movement"},{id:"crouch",label:"Crouch / slide",group:"Movement"},{id:"prone",label:"Prone",group:"Movement"},{id:"leanL",label:"Lean left",group:"Movement"},{id:"leanR",label:"Lean right",group:"Movement"},{id:"fire",label:"Fire",group:"Combat",mouse:0},{id:"aim",label:"Aim / zoom",group:"Combat",mouse:2},{id:"reload",label:"Reload",group:"Combat"},{id:"melee",label:"Melee",group:"Combat"},{id:"altFire",label:"Alt fire",group:"Combat"},{id:"throwable",label:"Throw",group:"Combat"},{id:"cycleThrow",label:"Cycle throwable",group:"Combat"},{id:"slowmo",label:"Bullet time",group:"Combat"},{id:"swap",label:"Swap weapon",group:"Combat"},{id:"use",label:"Interact / use",group:"Interaction"},{id:"map",label:"Map",group:"Interaction"},{id:"progress",label:"Progress panel",group:"Interaction"},{id:"disguise",label:"Disguise",group:"Interaction"},{id:"replay",label:"Replay last 20s",group:"Interaction"},{id:"photo",label:"Photo mode",group:"Interaction"},{id:"pause",label:"Pause",group:"Interaction"},{id:"mute",label:"Mute",group:"Interaction"},{id:"debug",label:"Debug overlay",group:"Interaction"},{id:"slot1",label:"Weapon slot 1",group:"Weapons"},{id:"slot2",label:"Weapon slot 2",group:"Weapons"},{id:"slot3",label:"Weapon slot 3",group:"Weapons"},{id:"slot4",label:"Weapon slot 4",group:"Weapons"},{id:"slot5",label:"Weapon slot 5",group:"Weapons"},{id:"slot6",label:"Weapon slot 6",group:"Weapons"},{id:"slot7",label:"Weapon slot 7",group:"Weapons"},{id:"slot8",label:"Weapon slot 8",group:"Weapons"},{id:"slot9",label:"Weapon slot 9",group:"Weapons"}];function ru(r,t){return t&&t[r.id]?t[r.id]:r.label}function so(r){return r?r.replace(/^Key/,"").replace(/^Digit/,"").replace(/^Arrow/,"Arrow ").replace("Left"," L").replace("Right"," R").replace("Control","Ctrl").replace("Shift","Shift").replace("Escape","Esc").replace("Space","Space"):"\u2014"}var no=class{constructor(t,e={}){this.canvas=t,this.isTouch=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,this.locked=!1,this.onPause=null,this.onKey=null,this.forward=this.back=this.left=this.right=!1,this.sprint=this.jump=!1,this.fire=this.aim=!1,this.crouch=!1,this.prone=!1,this.leanL=this.leanR=!1,this.altFire=!1,this.sprintToggled=!1,this.swapHeld=!1,this.axis={x:0,y:0},this.padIndex=null,this._padPrev={},this.rumbleSupported=!1,this.binds={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],crouch:["ControlLeft","ControlRight","KeyC"],prone:["KeyZ"],leanL:["KeyQ"],leanR:["KeyE"],reload:["KeyR"],melee:["KeyV"],use:["KeyF"],map:["KeyM"],mute:["KeyN"],progress:["KeyP"],debug:["F3"],throwable:["KeyG"],cycleThrow:["KeyH"],altFire:["KeyB"],photo:["KeyO"],disguise:["KeyJ"],replay:["KeyK"],slowmo:["KeyX"],swap:["Tab"],pause:["Escape"],slot1:["Digit1"],slot2:["Digit2"],slot3:["Digit3"],slot4:["Digit4"],slot5:["Digit5"],slot6:["Digit6"],slot7:["Digit7"],slot8:["Digit8"],slot9:["Digit9"]},this.capturing=null,this._once=new Set,this.lookDX=0,this.lookDY=0,this.wheelDir=0,addEventListener("keydown",i=>this._key(i,!0)),addEventListener("keyup",i=>this._key(i,!1)),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t,!this.locked&&this.onPause&&this.onPause()}),t.addEventListener("mousemove",i=>{this.locked&&(this.lookDX+=i.movementX,this.lookDY+=i.movementY)}),t.addEventListener("mousedown",i=>{i.button===0?this.fire=!0:i.button===2?this.aim=!0:i.button===1&&(this._once.add("ping"),i.preventDefault())}),addEventListener("mouseup",i=>{i.button===0?this.fire=!1:i.button===2&&(this.aim=!1)}),t.addEventListener("contextmenu",i=>i.preventDefault()),addEventListener("wheel",i=>{this.wheelDir=Math.sign(i.deltaY)},{passive:!0}),this.isTouch&&this._buildTouch()}_key(t,e){let i=this.binds;if(i.swap&&i.swap.includes(t.code)&&(this.swapHeld=e,t.preventDefault()),e&&this.capturing){let o=this.capturing;if(this.capturing=null,t.code!=="Escape"){let a=this.whoHas(t.code,o);a&&(this.binds[a]=[]),this.binds[o]=[t.code],this.onBind&&this.onBind(o,t.code,a)}else this.onBind&&this.onBind(null,null,null);t.preventDefault();return}let n=this.binds,s={reload:"reload",melee:"melee",slowmo:"slowmo",interact:"interact",use:"interact",map:"map",mute:"mute",progress:"progress",debug:"debug",throwable:"throwable",cycleThrow:"cycleThrow",photo:"photo",disguise:"disguise",replay:"replay"};if(n.slowmo&&n.slowmo.includes(t.code)){e&&this._once.add("slowmo");return}if(n.forward.includes(t.code))this.forward=e;else if(n.back.includes(t.code))this.back=e;else if(n.left.includes(t.code))this.left=e;else if(n.right.includes(t.code))this.right=e;else if(n.sprint.includes(t.code))this.sprint=e;else if(n.crouch.includes(t.code))this.crouch=e,e&&t.preventDefault();else if(n.prone.includes(t.code))this.prone=e;else if(n.leanL.includes(t.code))this.leanL=e;else if(n.leanR.includes(t.code))this.leanR=e;else if(n.altFire.includes(t.code))this.altFire=e;else if(n.jump.includes(t.code))e&&this._once.add("jump"),this.jump=e,e&&t.preventDefault();else if(e){let o=!1;for(let[a,l]of Object.entries(s))if(n[a]&&n[a].includes(t.code)){this._once.add(l),o=!0;break}if(!o)if(i.swap&&i.swap.includes(t.code))this._once.add("swap"),t.preventDefault();else if(i.pause&&i.pause.includes(t.code))this.onPause&&this.onPause();else for(let a=1;a<=9;a++){let l="slot"+a;if(i[l]&&i[l].includes(t.code)){this._once.add(l),o=!0;break}}}this.onKey&&e&&this.onKey(t.code)}whoHas(t,e){for(let i of Object.keys(this.binds))if(i!==e&&(this.binds[i]||[]).includes(t))return i;return null}unbound(){return Rs.filter(t=>t.mouse===void 0&&(!this.binds[t.id]||!this.binds[t.id].length))}startRebind(t){this.capturing=t}cancelRebind(){this.capturing=null}_buildTouch(){let t=document.createElement("div");t.id="touch",t.innerHTML=`
      <div id="stick"><div id="stickknob"></div></div>
      <div id="lookpad"></div>
      <button class="tbtn" id="tb-fire">FIRE</button>
      <button class="tbtn" id="tb-aim">AIM</button>
      <button class="tbtn" id="tb-jump">JUMP</button>
      <div id="tcol">
        <button class="tsm" id="tb-reload">R</button>
        <button class="tsm" id="tb-melee">F</button>
        <button class="tsm" id="tb-swap">SWAP</button>
        <button class="tsm" id="tb-slow">TIME</button>
      </div>
      <button id="tb-use" class="hidden">USE</button>`,document.body.appendChild(t),this.touchRoot=t;let e=g=>t.querySelector(g),i=e("#stick"),n=e("#stickknob"),s=e("#lookpad"),o=null,a=0,l=0;i.addEventListener("touchstart",g=>{let _=g.changedTouches[0];if(o===null){o=_.identifier;let m=i.getBoundingClientRect();a=m.left+m.width/2,l=m.top+m.height/2,g.preventDefault()}},{passive:!1});let h=g=>{let _=g.clientX-a,m=g.clientY-l,d=54,v=Math.min(d,Math.hypot(_,m)),y=Math.atan2(m,_);n.style.transform=`translate(calc(-50% + ${Math.cos(y)*v}px), calc(-50% + ${Math.sin(y)*v}px))`;let x=Math.cos(y)*(v/d),R=Math.sin(y)*(v/d);this.left=x<-.28,this.right=x>.28,this.forward=R<-.28,this.back=R>.28,this.sprint=v/d>.86};addEventListener("touchmove",g=>{for(let _ of g.changedTouches)_.identifier===o&&(h(_),g.preventDefault())},{passive:!1}),addEventListener("touchend",g=>{for(let _ of g.changedTouches)_.identifier===o&&(o=null,this.forward=this.back=this.left=this.right=!1,this.sprint=!1,n.style.transform="translate(-50%,-50%)")});let c=null,u=0,f=0;s.addEventListener("touchstart",g=>{let _=g.changedTouches[0];c===null&&(c=_.identifier,u=_.clientX,f=_.clientY,g.preventDefault())},{passive:!1}),addEventListener("touchmove",g=>{for(let _ of g.changedTouches)_.identifier===c&&(this.lookDX+=(_.clientX-u)*1.5,this.lookDY+=(_.clientY-f)*1.5,u=_.clientX,f=_.clientY,g.preventDefault())},{passive:!1}),addEventListener("touchend",g=>{for(let _ of g.changedTouches)_.identifier===c&&(c=null)});let p=(g,_,m)=>{g.addEventListener("touchstart",d=>{_(),d.preventDefault()},{passive:!1}),g.addEventListener("touchend",d=>{m&&m(),d.preventDefault()},{passive:!1})};p(e("#tb-fire"),()=>{this.fire=!0},()=>{this.fire=!1}),p(e("#tb-aim"),()=>{this.aim=!this.aim}),p(e("#tb-jump"),()=>{this._once.add("jump"),this.jump=!0},()=>{this.jump=!1}),p(e("#tb-reload"),()=>{this._once.add("reload")}),p(e("#tb-melee"),()=>{this._once.add("melee")}),p(e("#tb-swap"),()=>{this._once.add("swap")}),p(e("#tb-slow"),()=>{this._once.add("slowmo")}),p(e("#tb-use"),()=>{this._once.add("interact")})}showTouch(t){this.touchRoot&&this.touchRoot.classList.toggle("hidden",!t)}setUseVisible(t){let e=document.getElementById("tb-use");e&&e.classList.toggle("hidden",!t)}sprinting(t){return t?(this._sprintEdge!==this.sprint&&(this._sprintEdge=this.sprint,this.sprint&&(this.sprintToggled=!this.sprintToggled)),this.sprintToggled):this.sprint}pollGamepad(){if(typeof navigator>"u"||!navigator.getGamepads)return;let t=navigator.getGamepads(),e=null;for(let u of t)if(u&&u.connected){e=u;break}if(!e){this.axis.x=0,this.axis.y=0,this.padIndex=null;return}this.padIndex=e.index,this.rumbleSupported=!!(e.vibrationActuator||e.hapticActuators&&e.hapticActuators.length);let i=u=>Math.abs(u)<.18?0:(u-Math.sign(u)*.18)/.82,n=i(e.axes[0]||0),s=i(e.axes[1]||0);this.axis.x=n,this.axis.y=-s;let o=i(e.axes[2]||0),a=i(e.axes[3]||0);(o||a)&&(this.lookDX+=o*14,this.lookDY+=a*14);let l=e.buttons||[],h=u=>!!(l[u]&&(l[u].pressed||l[u].value>.5)),c=(u,f)=>{let p=h(f);p&&!this._padPrev[u]&&this._once.add(u),this._padPrev[u]=p};h(0)&&this._once.add("jump"),this.jump=h(0),this.sprint=h(10)||l[7]&&l[7].value>.5,this.crouch=h(11),this.fire=h(7),this.aim=h(6)||h(4),h(1)&&this._once.add("reload"),this.prone=h(8),this.leanL=h(4),this.leanR=h(5),c("interact",2),c("swap",3),c("throwable",5),c("melee",4),c("map",8),h(9)&&this._once.add("pausePad"),this.forward=this.back=this.left=this.right=!1}rumble(t=.4,e=90){if(!(typeof navigator>"u"||!navigator.getGamepads))for(let i of navigator.getGamepads()){if(!i||!i.connected)continue;let n=i.vibrationActuator||i.hapticActuators&&i.hapticActuators[0];if(n)try{n.playEffect?n.playEffect("dual-rumble",{duration:e,strongMagnitude:t,weakMagnitude:t*.6}):n.pulse&&n.pulse(t,e)}catch{}}}consumeLook(){let t={dx:this.lookDX,dy:this.lookDY};return this.lookDX=0,this.lookDY=0,t}once(t){return this._once.has(t)?(this._once.delete(t),!0):!1}clearOnce(){this._once.clear()}requestLock(){try{let t=this.canvas.requestPointerLock?.();t&&t.catch&&t.catch(()=>{})}catch{}}};var ao=4.2,o_=.9;function ro(r,t,e,i,n){let{gapAt:s=null,gapW:o=5,mat:a,h:l=ao,t:h=o_}=n,c=Math.abs(e-r)>Math.abs(i-t),u=Math.abs(c?e-r:i-t),f=[],p=[],g=[];if(s===null)g.push([0,u]);else{let _=Math.max(0,s-o/2),m=Math.min(u,s+o/2);_>.01&&g.push([0,_]),m<u-.01&&g.push([m,u])}for(let[_,m]of g){let d=m-_;if(d<=.01)continue;let v=new xt(c?d:h,l,c?h:d),y=new V(v,a);y.castShadow=!0,y.receiveShadow=!0;let x=(_+m)/2,R=c?Math.min(r,e)+x:r,A=c?t:Math.min(t,i)+x;y.position.set(R,l/2,A),f.push(y),p.push({minX:R-(c?d:h)/2,maxX:R+(c?d:h)/2,minZ:A-(c?h:d)/2,maxZ:A+(c?h:d)/2,height:l})}return{meshes:f,colliders:p}}function oo(r,t,e,i){let n=[];for(let s of[-1,1]){let o=new V(new xt(1.1,ao+1.2,1.1),i);o.position.set(e?r+s*3.2:r,(ao+1.2)/2,e?t:t+s*3.2),o.castShadow=!0,n.push(o)}return n}function ou(r,t,e,i,n={}){let s=n.doorSide||"south",o=n.colour||"#5a6070",a=new Vr({color:o}),l=new Kt;l.name="safe-compound";let h=[],c=v=>{l.add(...v.meshes),h.push(...v.colliders)},u=t-i,f=t+i,p=e-i,g=e+i,_=n.gateWidth||5;c(ro(u,p,f,p,{mat:a,gapAt:s==="south"?i:null,gapW:_})),c(ro(u,g,f,g,{mat:a,gapAt:s==="north"?i:null,gapW:_})),c(ro(u,p,u,g,{mat:a,gapAt:s==="west"?i:null,gapW:_})),c(ro(f,p,f,g,{mat:a,gapAt:s==="east"?i:null,gapW:_}));let m={x:t,z:p};s==="south"?(l.add(...oo(t,p,!0,a)),m={x:t,z:p}):s==="north"?(l.add(...oo(t,g,!0,a)),m={x:t,z:g}):s==="west"?(l.add(...oo(u,e,!1,a)),m={x:u,z:e}):(l.add(...oo(f,e,!1,a)),m={x:f,z:e});let d=new V(new xt(1.4,.28,1.4),new Ot({color:"#ffd9a0"}));return d.position.set(m.x,ao+1,m.z),l.add(d),r&&r.addStatic&&r.addStatic(l,h),{group:l,colliders:h,door:m}}var Cs={safehouse:{c:"#38f2c8",s:"square",n:5,label:"Safe House"},shop:{c:"#ffd23a",s:"square",n:4,label:"Merchant"},upgrade:{c:"#8affd8",s:"diamond",n:4,label:"Upgrade Station"},boss:{c:"#ff2d55",s:"star",n:7,label:"Boss"},crime:{c:"#ff2d55",s:"ring",n:6,label:"Crime"},surrender:{c:"#ffd23a",s:"dot",n:4,label:"Surrendered"},ping:{c:"#ff9ecb",s:"star",n:6,label:"Ping"},downtown:{c:"#a78bfa",s:"diamond",n:4,label:"Downtown"},residential:{c:"#7dd3fc",s:"diamond",n:3,label:"Residential"},industrial:{c:"#94a3b8",s:"diamond",n:3,label:"Industrial"},park:{c:"#4ade80",s:"diamond",n:3,label:"Park"},school:{c:"#6ab0ff",s:"diamond",n:3,label:"School"},playground:{c:"#facc15",s:"diamond",n:3,label:"Playground"},plaza:{c:"#c8a86a",s:"diamond",n:3,label:"Plaza"},desert:{c:"#e0c078",s:"diamond",n:3,label:"Wastes"},snow:{c:"#dbe9f7",s:"diamond",n:3,label:"Frozen Ground"},swamp:{c:"#7a8a4a",s:"diamond",n:3,label:"Marsh"},loot:{c:"#38f2c8",s:"dot",n:2},stash:{c:"#ffb03a",s:"square",n:5,label:"Cache"},enemy:{c:"#ff4d4d",s:"dot",n:3}},a_={safehouse:"safe",shop:"safe",upgrade:"safe",loot:"loot",stash:"loot",crate:"loot",boss:"threat",enemy:"threat",crime:"threat",ping:"threat"},l_=new Set(["safehouse","shop","upgrade","boss","crime","ping","stash"]),h_={downtown:"rgba(167,139,250,.30)",residential:"rgba(125,211,252,.22)",industrial:"rgba(148,163,184,.22)",city:"rgba(120,140,170,.22)",park:"rgba(74,222,128,.26)",jungle:"rgba(34,197,94,.26)",playground:"rgba(250,204,21,.22)",school:"rgba(106,176,255,.24)",plaza:"rgba(200,168,106,.24)",desert:"rgba(224,192,120,.26)",snow:"rgba(219,233,247,.28)",swamp:"rgba(122,138,74,.28)"},au=new Set(["city","downtown","residential","industrial"]),c_=[[0,"N"],[45,"NE"],[90,"E"],[135,"SE"],[180,"S"],[225,"SW"],[270,"W"],[315,"NW"]];function lu(r,t,e,i,n){if(t==="square")r.fillRect(e-n,i-n,n*2,n*2);else if(t==="ring")r.beginPath(),r.arc(e,i,n+2,0,7),r.strokeStyle=r.fillStyle,r.lineWidth=2,r.stroke();else if(t==="diamond")r.beginPath(),r.moveTo(e,i-n),r.lineTo(e+n,i),r.lineTo(e,i+n),r.lineTo(e-n,i),r.closePath(),r.fill();else if(t==="star"){r.beginPath();for(let s=0;s<10;s++){let o=-Math.PI/2+s*Math.PI/5,a=s%2?n*.45:n;r.lineTo(e+Math.cos(o)*a,i+Math.sin(o)*a)}r.closePath(),r.fill()}else r.beginPath(),r.arc(e,i,n,0,7),r.fill()}var lo=class{constructor(){this._build(),this._fpsAcc=0,this._fpsN=0,this._lastFps=0,this.mapZoom=1,this.mapFilter={safe:!0,loot:!0,threat:!0,terrain:!0},this.waypoint=null,this.onWaypoint=null}_build(){let t=document.createElement("div");t.id="hud",t.innerHTML=`
      <div id="crosshair">
        <span class="t up"></span><span class="t dn"></span>
        <span class="t lf"></span><span class="t rt"></span><span class="dot"></span>
      </div>
      <div id="hitmarker"></div>
      <div id="hitdir"></div>
      <div id="compass"><canvas id="compassc" width="320" height="26"></canvas></div>
      <div id="topbar">
        <div class="pill"><span class="lbl">LV</span><span class="val" id="hud-level">1</span></div>
        <div class="pill gold"><span class="lbl">COINS</span><span class="val" id="hud-coins">0</span></div>
        <div class="pill pts hidden" id="pill-pts"><span class="lbl">PTS</span><span class="val" id="hud-points">0</span></div>
        <div class="pill"><span class="lbl">TIME</span><span class="val" id="hud-clock">--:--</span></div>
        <div class="pill" id="pill-fps"><span class="lbl">FPS</span><span class="val" id="hud-fps">0</span></div>
      </div>
      <div id="centertop">
        <div id="objective" aria-live="polite" aria-label="Objective"></div>
        <div id="bossbar" class="hidden"><div id="bossname">BOSS</div><div class="bbar"><i id="bossfill"></i></div></div>
        <div id="safezone" class="hidden">SAFE ZONE \u2014 enemies cannot reach you here</div>
        <div id="waypoint" class="hidden"></div>
        <div id="evidence" class="hidden"></div>
        <div id="notif"></div>
      </div>
      <div id="banner" class="hidden"></div>
      <div id="killfeed" role="log" aria-live="polite" aria-label="Notifications"></div>
      <div id="wheel" class="hidden"></div>
      <div id="dmgwrap"></div>
      <div id="elitebars"></div>
      <div id="scope" class="hidden"></div>
      <div id="wanted" class="hidden"></div>
      <div id="ally" class="hidden"></div>
      <div id="throwable"><b id="th-count">0</b><span id="th-name">\u2014</span></div>
      <div id="achtoast"></div>
      <div id="runsummary" class="hidden"></div>
      <div id="minimap-wrap"><canvas id="minimap" width="176" height="176"></canvas><div id="mm-label">M \xB7 MAP</div></div>
      <div id="bottomleft">
        <div class="bar hp"><i id="hud-hp"></i><span id="hud-hpt">100</span></div>
        <div class="bar ar"><i id="hud-ar"></i><span id="hud-art">0</span></div>
        <div class="bar st"><i id="hud-st"></i><span id="hud-stt">100</span></div>
        <div class="bar bt"><i id="hud-bt"></i><span id="hud-btt">100</span></div>
      </div>
      <div id="bottomright">
        <div id="weaponname">\u2014</div>
        <div class="ammo"><span id="ammo">0</span><span class="slash">/</span><span id="reserve">0</span></div>
        <div id="heatwrap" class="hidden"><i id="heatfill"></i></div>
        <div id="reloading" class="hidden">RELOADING\u2026</div>
      </div>
      <div id="xpwrap">
        <div id="xptop"><span id="hud-lvl2">LV 1</span><span id="hud-xpt">0 / 100 XP</span></div>
        <div id="xpbar"><div id="xpfill"></div></div>
      </div>
      <div id="combo" class="hidden"></div>
      <div id="xpfloats"></div>
      <div id="levelflash"></div>
      <div id="credit">Neon Engine &middot; created by Dr. Sohil Momin</div>
      <div id="bullettime"></div>
      <div id="damageflash"></div>
      <div id="bloodhit"></div>
      <div id="lowhealth"></div>
      <div id="centerbottom">
        <div id="prompt" class="hidden"></div>
        <div id="usehint" class="hidden">PRESS F</div>
      </div>
      <canvas id="framegraph" width="260" height="58" class="hidden"></canvas>
      <pre id="debug" class="hidden"></pre>`,document.body.appendChild(t),this.el=t,this.$=i=>t.querySelector(i),this.mm=t.querySelector("#minimap"),this.mmCtx=this.mm.getContext("2d"),this.comp=t.querySelector("#compassc"),this.compCtx=this.comp.getContext("2d"),this.objEl=this.$("#objective"),this.bossEl=this.$("#bossbar"),this.dirEl=this.$("#hitdir");let e=document.createElement("div");e.id="bigmap",e.className="hidden",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Sector map"),e.innerHTML=`<div class="map-inner"><canvas id="bigcanvas" width="900" height="620"></canvas>
      <div class="map-legend" id="map-legend"></div>
      <div class="map-title">SECTOR MAP <span>M close \xB7 scroll to zoom \xB7 middle-click to ping</span></div></div>`,document.body.appendChild(e),this.mapEl=e,this.big=e.querySelector("#bigcanvas"),this.bigCtx=this.big.getContext("2d"),this._legendBuilt=!1,this.big.addEventListener("click",i=>{if(!this._lastPlayer)return;let n=this.big.getBoundingClientRect(),s=(i.clientX-n.left)*(this.big.width/n.width),o=(i.clientY-n.top)*(this.big.height/n.height),a=this.fullMapToWorld(s,o,this._lastPlayer);this.onWaypoint&&this.onWaypoint(a)})}show(){this.el.classList.remove("hidden")}applyVisibility(t={}){let e=(i,n)=>{let s=this.$(i);s&&s.classList.toggle("hidden",n===!1)};e("#minimap-wrap",t.minimap),e("#compass",t.compass),e("#killfeed",t.killfeed),e("#credit",t.credit),e("#objective",t.objective),e("#topbar",t.topbar)}setImmersive(t){this._immersive=!!t,this.el.classList.toggle("immersive",!!t)}hide(){this.el.classList.add("hidden")}toggleCategory(t){return this.mapFilter[t]=!this.mapFilter[t],this._legendBuilt=!1,this.mapFilter[t]}_catVisible(t){let e=a_[t];return e?this.mapFilter[e]!==!1:this.mapFilter.terrain!==!1}fullMapToWorld(t,e,i){let n=this.big.width,s=this.big.height,o=300/this.mapZoom,a=Math.min(n,s)/(o*2);return{x:i.pos.x+(t-n/2)/a,z:i.pos.z+(e-s/2)/a}}setWaypoint(t){this.waypoint=t,this._fitCentre()}setWaypointHud(t,e){let i=this.$("#waypoint");if(!t){i.classList.add("hidden");return}let n=t.x-e.pos.x,s=t.z-e.pos.z,o=Math.hypot(n,s),a=Math.atan2(n,-s)-e.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),i.classList.remove("hidden");let l=(t.label||"WAYPOINT").toString().toUpperCase();i.innerHTML=`<span class="wp-lbl">${l}</span> <b>\u25C6</b> ${Math.round(o)}m <span style="transform:rotate(${a}rad)">\u2191</span>`}showMap(){this.mapEl.classList.remove("hidden")}hideMap(){this.mapEl.classList.add("hidden")}setFpsVisible(t){this.$("#pill-fps").classList.toggle("hidden",!t)}setObjective(t,e){this.objEl.innerHTML=t+(e?`<small>${e}</small>`:""),this._fitCentre()}setUseVisible(t,e){let i=this.$("#usehint");i.classList.toggle("hidden",!t),e&&(i.textContent=e)}update(t,e){this._fpsAcc+=t,this._fpsN++,this._fpsAcc>=.5&&(this._lastFps=Math.round(this._fpsN/this._fpsAcc),this.$("#hud-fps").textContent=this._lastFps,this._fpsAcc=0,this._fpsN=0),this.$("#hud-level").textContent=e.level,this.$("#hud-coins").textContent=e.coins,e.clock&&(this.$("#hud-clock").textContent=e.clock),this.$("#pill-pts").classList.toggle("hidden",!e.points),this.$("#hud-points").textContent=e.points;let i=Math.max(0,e.health),n=e.maxHealth||100;this.$("#hud-hp").style.width=i/n*100+"%",this.$("#hud-hpt").textContent=Math.round(i);let s=e.maxArmor||0;this.$("#hud-ar").style.width=s?e.armor/s*100+"%":"0%",this.$("#hud-art").textContent=s?Math.round(e.armor):"\u2014",this.$("#hud-st").style.width=e.stamina/(e.maxStamina||100)*100+"%",this.$("#hud-stt").textContent=Math.round(e.stamina),this.$("#ammo").textContent=e.ammo,this.$("#reserve").textContent=e.reserve;let o=this.$("#ammo"),a=e.ammoMax&&e.ammo!=="\u221E"?parseInt(e.ammo,10)/e.ammoMax:1;o.style.color=a<=.001?"#ff3d81":a<.26?"#ffd23a":"";let l=this.$("#weaponname");l.textContent=e.weapon||"\u2014",l.style.color=e.weaponColor||"var(--dim)",l.style.textShadow=e.weaponColor?`0 0 10px ${e.weaponColor}55`:"none",this.$("#reloading").classList.toggle("hidden",!e.reloading);let h=e.heat||0;this.$("#heatwrap").classList.toggle("hidden",h<.06),this.$("#heatfill").style.width=h*100+"%",this.$("#heatfill").style.background=e.overheated?"#ff3d81":"linear-gradient(90deg,#ffb03a,#ff6a2a)",this.$("#heatwrap").title=e.overheated?"OVERHEATED":"",this.$("#hud-lvl2").textContent="LV "+e.level,this.$("#hud-xpt").textContent=`${Math.floor(e.xp)} / ${e.xpNext} XP`,this.$("#xpfill").style.width=e.xp/e.xpNext*100+"%",this.$("#crosshair").style.setProperty("--gap",6+(e.spread||0)*260+"px"),this.$("#lowhealth").style.opacity=i/n<.3?"1":"0";let u=e.focus===void 0?100:e.focus;this.$("#hud-bt").style.width=u+"%",this.$("#hud-btt").textContent=Math.round(u),this.$("#bullettime").style.opacity=e.slowmo?"1":"0"}setSprint(){}combo(t){let e=this.$("#combo");e.textContent="x"+t+" COMBO",e.classList.remove("hidden","pop"),e.offsetWidth,e.classList.add("pop"),clearTimeout(this._comboT),this._comboT=setTimeout(()=>e.classList.add("hidden"),2200)}levelFlash(){let t=this.$("#levelflash");t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}updateBoss(t,e){if(!t){this.bossEl.classList.add("hidden");return}this.bossEl.classList.remove("hidden"),this.$("#bossname").textContent=t.t.name.toUpperCase()+(e?`   ${Math.round(e)}m`:""),this.$("#bossfill").style.width=Math.max(0,t.health/t.maxHealth*100)+"%",this._fitCentre()}setCompass(t){let e=this.compCtx,i=this.comp.width,n=this.comp.height,s=(-t*180/Math.PI%360+360)%360,o=140;e.clearRect(0,0,i,n);for(let[a,l]of c_){let h=(a-s+540)%360-180;if(Math.abs(h)>o/2)continue;let c=i/2+h/o*i;e.fillStyle=l.length===1?"rgba(56,242,200,.95)":"rgba(200,215,235,.6)",e.font=(l.length===1?"bold 15px":"11px")+" system-ui, sans-serif",e.textAlign="center",e.fillText(l,c,l.length===1?18:16),e.fillRect(c-.5,20,1,5)}e.fillStyle="#38f2c8",e.fillRect(i/2-1,0,2,7)}hitDirection(t,e=1){if(t==null){this.dirEl.style.opacity="0";return}let i=78,n=Math.sin(t)*i,s=-Math.cos(t)*i;this.dirEl.style.opacity=String(e*.95),this.dirEl.style.transform=`translate(-50%,-50%) rotate(${t}rad) translateY(${-i}px)`}headshot(){let t=this.$("#hitmarker");t.classList.remove("show"),t.classList.add("kill"),t.offsetWidth,t.classList.add("show"),this.$("#hitmarker").style.filter="hue-rotate(150deg)",setTimeout(()=>{this.$("#hitmarker").style.filter=""},220)}hitmarker(t=!1){let e=this.$("#hitmarker");e.classList.remove("show"),e.classList.toggle("kill",t),e.offsetWidth,e.classList.add("show")}bloodHit(){let t=this.$("#bloodhit");t.style.background=`radial-gradient(circle at ${20+Math.random()*60}% ${20+Math.random()*60}%, rgba(150,10,10,.55), transparent 45%)`,t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}flashDamage(){let t=this.$("#damageflash");t.style.opacity="1",clearTimeout(this._dmgT),this._dmgT=setTimeout(()=>t.style.opacity="0",110)}kill(t){let e=this.$("#killfeed"),i=document.createElement("div");for(i.className="kf",i.textContent=t,e.appendChild(i),setTimeout(()=>{i.style.opacity="0",i.style.transition="opacity .4s",setTimeout(()=>i.remove(),400)},2600);e.children.length>5;)e.removeChild(e.firstChild)}damageAt(t,e,i){if(!this.camera||!t)return;let n=t.clone().project(this.camera);if(n.z>1)return;let s=document.createElement("div");s.className="dmg"+(i==="crit"?" crit":""),s.textContent=Math.round(e),s.style.left=(n.x*.5+.5)*innerWidth+"px",s.style.top=(-n.y*.5+.5)*innerHeight+"px",s.style.setProperty("--dx",Math.random()*34-17+"px"),this.$("#dmgwrap").appendChild(s),setTimeout(()=>s.remove(),780)}setAlly(t){let e=this.$("#ally");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),e.innerHTML=`<b>${t.name}</b><i style="width:${Math.round(t.health/t.maxHealth*100)}%"></i>`+(t.down?"<span>DOWN</span>":""),e.classList.toggle("down",t.down)}setSafeZone(t){let e=this.$("#safezone");e&&e.classList.toggle("hidden",!t),this._fitCentre()}setPrompt(t){let e=this.$("#prompt");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent!==t&&(e.textContent=t),this._fitCentre()}setEvidence(t){let e=this.$("#evidence");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),e.textContent="EVIDENCE "+t+" / 5",this._fitCentre()}setWanted(t){let e=this.$("#wanted");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),e.dataset.n!==String(t)&&(e.dataset.n=t,e.innerHTML="<span>WANTED</span>"+"\u2605".repeat(t)+"\u2606".repeat(Math.max(0,5-t)))}setThrowable(t,e){this.$("#th-name").textContent=t,this.$("#th-count").textContent=e,this.$("#throwable").classList.toggle("dim",e<=0)}drawWheel(t,e,i){let n=this.$("#wheel");if(!t||!t.length){n.classList.add("hidden"),n.innerHTML="",n.dataset.n="";return}let s=t.length+":"+t.map(o=>o.def.id).join(",");if(n.dataset.n!==s){n.dataset.n=s;let o=132;n.innerHTML='<div class="wheel-hub">WEAPONS</div>'+t.map((a,l)=>{let h=-Math.PI/2+l/t.length*Math.PI*2;return`<div class="wseg" data-i="${l}" style="left:calc(50% + ${Math.cos(h)*o}px);top:calc(50% + ${Math.sin(h)*o}px)">
          <b>${l+1}</b><span>${a.def.name}</span></div>`}).join("")}n.classList.remove("hidden"),n.querySelectorAll(".wseg").forEach(o=>{o.classList.toggle("on",+o.dataset.i===i),o.classList.toggle("cur",+o.dataset.i===e)})}eliteBars(t){let e=this.$("#elitebars");if(!t||!t.length){e.childElementCount&&(e.innerHTML="");return}e.childElementCount!==t.length&&(e.innerHTML=t.map(()=>'<div class="ebar"><i></i><b></b></div>').join(""));let i=e.children;for(let n=0;n<t.length;n++){let s=t[n],o=i[n],a=s.group.position.clone();a.y+=s.headHeight()+.55;let l=a.project(this.camera);if(l.z>1){o.style.display="none";continue}o.style.display="",o.style.left=(l.x*.5+.5)*innerWidth+"px",o.style.top=(-l.y*.5+.5)*innerHeight+"px";let h=Math.max(0,s.health/s.maxHealth);o.querySelector("i").style.width=h*100+"%",o.querySelector("b").textContent=s.t.name+(s.isBoss?"  "+Math.ceil(h*100)+"%":"")}}setScope(t){this.$("#scope").classList.toggle("hidden",!t)}achievement(t){let e=this.$("#achtoast"),i=document.createElement("div");for(i.className="achtoast",i.innerHTML=`<em>ACHIEVEMENT</em><b>${t.name}</b><span>${t.desc}</span>`,e.appendChild(i),setTimeout(()=>{i.style.transition="opacity .4s",i.style.opacity="0",setTimeout(()=>i.remove(),400)},3400);e.children.length>3;)e.removeChild(e.firstChild)}notify(t,e=!1){let i=this.$("#notif"),n=document.createElement("div");for(n.className="nt"+(e?" gold":""),n.textContent=t,i.appendChild(n),setTimeout(()=>{n.style.transition="opacity .4s",n.style.opacity="0",setTimeout(()=>n.remove(),400)},1900);i.children.length>3;)i.removeChild(i.firstChild);this._fitCentre()}_fitCentre(){let t=this.$("#centertop"),e=this.$("#centerbottom"),i=this.$("#notif");if(!t||!e||!i)return;let n=e.getBoundingClientRect().top,s=6;for(;i.children.length&&t.getBoundingClientRect().bottom>n-6&&s-- >0;)i.removeChild(i.firstChild)}xpFloat(t,e=!1){let i=this.$("#xpfloats"),n=document.createElement("div");n.className="xpf"+(e?" gold":""),n.textContent=t,n.style.setProperty("--dx",Math.random()*40-20+"px"),i.appendChild(n),setTimeout(()=>n.remove(),950)}banner(t,e){let i=this.$("#banner");i.innerHTML=`${t}${e?`<small>${e}</small>`:""}`,i.classList.remove("hidden"),i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop"),clearTimeout(this._bannerT),this._bannerT=setTimeout(()=>i.classList.add("hidden"),2200)}pushFrame(t){this._ft||(this._ft=new Float32Array(120),this._ftIdx=0),this._ft[this._ftIdx]=t,this._ftIdx=(this._ftIdx+1)%120}drawFrameGraph(t){let e=this.$("#framegraph");if(e.classList.toggle("hidden",!t),!t||!this._ft)return;let i=e.getContext("2d"),n=e.width,s=e.height;i.clearRect(0,0,n,s),i.fillStyle="rgba(6,10,16,.72)",i.fillRect(0,0,n,s);let o=a=>s-Math.min(1,a/50)*s;i.strokeStyle="rgba(56,242,200,.3)",i.lineWidth=1,i.beginPath(),i.moveTo(0,o(16.7)),i.lineTo(n,o(16.7)),i.stroke(),i.strokeStyle="rgba(255,210,58,.35)",i.beginPath(),i.moveTo(0,o(33)),i.lineTo(n,o(33)),i.stroke(),i.strokeStyle="#38f2c8",i.beginPath();for(let a=0;a<120;a++){let l=this._ft[(this._ftIdx+a)%120]||0,h=a/119*n,c=o(l);a?i.lineTo(h,c):i.moveTo(h,c)}i.stroke(),i.fillStyle="#8ba0bb",i.font="9px ui-monospace,monospace",i.fillText("16.7ms",3,o(16.7)-2),i.fillText("33ms",3,o(33)-2)}debug(t){let e=this.$("#debug");e.classList.toggle("hidden",!t),t&&(e.textContent=t.join(`
`))}_transform(t,e,i,n,s,o,a,l){let h=l?a:0,c=Math.cos(h),u=Math.sin(h);return{tx:(f,p)=>{let g=f-n,_=p-s;return e/2+(g*c-_*u)*o},ty:(f,p)=>{let g=f-n,_=p-s;return i/2+(g*u+_*c)*o}}}drawMinimap(t,e,i,n=!1){let s=this.mmCtx,o=this.mm.width,a=this.mm.height,l=100,h=o/(l*2),c=e.pos.x,u=e.pos.z,{tx:f,ty:p}=this._transform(s,o,a,c,u,h,e.yaw,n),g=(m,d)=>[f(m,d),p(m,d)];s.clearRect(0,0,o,a),s.fillStyle="rgba(8,12,20,.68)",s.fillRect(0,0,o,a),s.fillStyle="rgba(70,78,92,.55)";for(let m of t.chunks.values())if(au.has(m.biome))for(let[d,v,y,x]of[[m.ox,m.oz,18,96],[m.ox,m.oz,96,18]]){let[R,A]=g(d,v),[C,k]=g(d+y,v+x);s.fillRect(Math.min(R,C),Math.min(A,k),Math.abs(C-R),Math.abs(k-A))}s.fillStyle="rgba(120,140,175,.5)";for(let m of t.chunks.values())for(let d of m.colliders){if(d.height<2)continue;let[v,y]=g(d.minX,d.minZ),[x,R]=g(d.maxX,d.maxZ);Math.min(v,x)>o||Math.min(y,R)>a||s.fillRect(Math.min(v,x),Math.min(y,R),Math.abs(x-v),Math.abs(R-y))}for(let m of i){if(!m.radius)continue;let d=Cs[m.type];if(!d)continue;let[v,y]=g(m.x,m.z);s.beginPath(),s.arc(v,y,m.radius*h,0,7),s.globalAlpha=.16,s.fillStyle=d.c,s.fill(),s.globalAlpha=1}let _=[];for(let m of i){let d=Cs[m.type]||Cs.enemy,[v,y]=g(m.x,m.z);if(v<6||y<6||v>o-6||y>a-6){["safehouse","shop","upgrade","boss","crime","ping"].includes(m.type)&&_.push({x:v,y,st:d});continue}s.fillStyle=d.c,lu(s,d.s,v,y,d.n)}for(let m of _){let d=Math.atan2(m.y-a/2,m.x-o/2),v=o/2+Math.cos(d)*(o/2-9),y=a/2+Math.sin(d)*(a/2-9);s.fillStyle=m.st.c,s.beginPath(),s.moveTo(v+Math.cos(d)*7,y+Math.sin(d)*7),s.lineTo(v+Math.cos(d+2.5)*6,y+Math.sin(d+2.5)*6),s.lineTo(v+Math.cos(d-2.5)*6,y+Math.sin(d-2.5)*6),s.closePath(),s.fill()}s.save(),s.translate(o/2,a/2),n||s.rotate(-e.yaw),s.fillStyle="#38f2c8",s.beginPath(),s.moveTo(0,-8),s.lineTo(5.5,6),s.lineTo(0,3),s.lineTo(-5.5,6),s.closePath(),s.fill(),s.restore()}drawFullMap(t,e,i){this._lastPlayer=e;let n=this.bigCtx,s=this.big.width,o=this.big.height,a=300/this.mapZoom,l=Math.min(s,o)/(a*2),h=e.pos.x,c=e.pos.z,u=d=>s/2+(d-h)*l,f=d=>o/2+(d-c)*l;n.clearRect(0,0,s,o),n.fillStyle="#0a0f18",n.fillRect(0,0,s,o),n.strokeStyle="rgba(56,242,200,.10)",n.lineWidth=1;for(let d=0;d<=s;d+=60)n.beginPath(),n.moveTo(d,0),n.lineTo(d,o),n.stroke();for(let d=0;d<=o;d+=60)n.beginPath(),n.moveTo(0,d),n.lineTo(s,d),n.stroke();for(let d of t.chunks.values()){let v=u(d.ox),y=f(d.oz),x=t.chunkSize*l;n.fillStyle=h_[d.biome]||"rgba(120,140,170,.2)",n.fillRect(v,y,x,x)}n.fillStyle="rgba(80,88,102,.55)";for(let d of t.chunks.values())au.has(d.biome)&&(n.fillRect(u(d.ox),f(d.oz),18*l,t.chunkSize*l),n.fillRect(u(d.ox),f(d.oz),t.chunkSize*l,18*l));n.fillStyle="rgba(150,170,205,.45)";for(let d of t.chunks.values())for(let v of d.colliders)v.height<3||n.fillRect(u(v.minX),f(v.minZ),(v.maxX-v.minX)*l,(v.maxZ-v.minZ)*l);let p=["boss","ping","safehouse","shop","upgrade","crime","stash"],g=d=>{let v=p.indexOf(d);return v<0?p.length:v},_=i.slice().sort((d,v)=>g(d.type)-g(v.type)),m=[];for(let d of _){if(!this._catVisible(d.type))continue;let v=Cs[d.type]||Cs.enemy,y=u(d.x),x=f(d.z);if(!(y<-20||x<-20||y>s+20||x>o+20)&&(d.radius&&(n.beginPath(),n.arc(y,x,d.radius*l,0,7),n.globalAlpha=.14,n.fillStyle=v.c,n.fill(),n.globalAlpha=1),n.fillStyle=v.c,lu(n,v.s,y,x,v.n),l_.has(d.type))){let R=Math.hypot(d.x-h,d.z-c),A=`${d.label} ${Math.round(R)}m`;n.font="bold 11px system-ui, sans-serif";let C=n.measureText(A).width,k=12,M=y+10;M+C>s-4&&(M=y-10-C);let E=x+4,U=M<4||E-k<0||E>o-2;if(!U){for(let F of m)if(M<F.x+F.w&&F.x<M+C&&E-k<F.y&&F.y-k<E){U=!0;break}}U||(m.push({x:M,y:E,w:C}),n.fillStyle="rgba(0,0,0,.65)",n.fillText(A,M+1,E+1),n.fillStyle="rgba(232,241,255,.95)",n.fillText(A,M,E))}}if(this.waypoint){let[d,v]=txz(this.waypoint.x,this.waypoint.z);n.strokeStyle="#ffd23a",n.lineWidth=2,n.beginPath(),n.moveTo(d,v-8),n.lineTo(d+8,v),n.lineTo(d,v+8),n.lineTo(d-8,v),n.closePath(),n.stroke()}if(n.save(),n.translate(s/2,o/2),n.rotate(-e.yaw),n.fillStyle="#38f2c8",n.beginPath(),n.moveTo(0,-10),n.lineTo(7,8),n.lineTo(0,4),n.lineTo(-7,8),n.closePath(),n.fill(),n.restore(),this.waypoint){let d=u(this.waypoint.x),v=f(this.waypoint.z);n.strokeStyle="#ffd23a",n.lineWidth=3,n.beginPath(),n.moveTo(d,v-12),n.lineTo(d+12,v),n.lineTo(d,v+12),n.lineTo(d-12,v),n.closePath(),n.stroke()}if(!this._legendBuilt){let d=[["safe","Safe houses","#38f2c8"],["loot","Loot","#ffd23a"],["threat","Threats","#ff5a7a"],["terrain","Terrain","#8ba0bb"]],v=this.mapEl.querySelector("#map-legend");v.innerHTML=d.map(([y,x,R])=>`<span class="leg-toggle${this.mapFilter[y]?"":" off"}" data-cat="${y}"><i style="background:${R}"></i>${x}</span>`).join("")+'<span class="leg-hint">click to filter \xB7 click the map to set a waypoint</span>',v.querySelectorAll("[data-cat]").forEach(y=>{y.onclick=()=>{this.toggleCategory(y.dataset.cat),this._legendBuilt=!1}}),this._legendBuilt=!0}}};var Ai={common:{c:"#9aa6b8",name:"Common"},rare:{c:"#4aa8ff",name:"Rare"},epic:{c:"#b06aff",name:"Epic"},legendary:{c:"#ffb03a",name:"Legendary"}},ts={neon:{name:"Neon",accent:null},military:{name:"Military",accent:"#7d9a4e"},crimson:{name:"Crimson",accent:"#e0432f"},gold:{name:"Gold",accent:"#e8c33a"},ice:{name:"Ice",accent:"#5fd4ff"},violet:{name:"Violet",accent:"#a86aff"}},Pe={knife:{id:"knife",name:"Combat Knife",kind:"melee",damage:70,rpm:150,mag:1/0,reserve:1/0,spread:0,pellets:1,range:2.9,reload:0,auto:!0,unlock:1,price:0,ch:.5,rarity:"common",palette:{body:"#5f6d84",accent:"#dbe6f5",barrel:"#9aa7bb"}},pistol:{id:"pistol",name:"M9 Pistol",kind:"pistol",damage:28,rpm:320,mag:12,reserveMax:120,spread:.014,pellets:1,range:90,reload:1.1,auto:!1,unlock:1,price:0,ch:1,rarity:"common",altFire:{kind:"burst",count:2,delay:.06},palette:{body:"#4d5a72",accent:"#38f2c8",barrel:"#2a3140"}},revolver:{id:"revolver",name:".44 Revolver",kind:"revolver",damage:62,rpm:150,mag:6,reserveMax:60,spread:.02,pellets:1,range:80,reload:1.7,auto:!1,unlock:2,price:700,ch:1.25,rarity:"rare",palette:{body:"#6f5844",accent:"#e0a04a",barrel:"#463626"}},smg:{id:"smg",name:"Vex SMG",kind:"smg",damage:16,rpm:800,mag:32,reserveMax:320,spread:.032,pellets:1,range:70,reload:1.3,auto:!0,unlock:3,price:700,ch:1.6,rarity:"rare",palette:{body:"#4e5c72",accent:"#4aa8ff",barrel:"#2c3648"}},shotgun:{id:"shotgun",name:"Breacher 12g",kind:"shotgun",damage:14,rpm:75,mag:6,reserveMax:60,spread:.1,pellets:9,range:26,reload:1.8,auto:!1,unlock:4,price:850,ch:2.4,rarity:"rare",altFire:{kind:"slug",mult:3.4},palette:{body:"#6f4c3a",accent:"#ff9142",barrel:"#3e2a20"}},crossbow:{id:"crossbow",name:"Compound Bow",kind:"crossbow",damage:215,rpm:55,mag:1,reserveMax:40,spread:.002,pellets:1,range:190,reload:1.5,auto:!1,unlock:5,price:650,ch:.6,rarity:"epic",silent:!0,palette:{body:"#6f5840",accent:"#7fd85a",barrel:"#463626"}},rifle:{id:"rifle",name:"AR-7 Rifle",kind:"rifle",damage:26,rpm:620,mag:30,reserveMax:300,spread:.02,pellets:1,range:140,reload:1.6,auto:!0,unlock:6,price:1200,ch:1.3,rarity:"epic",altFire:{kind:"burst",count:3,delay:.07},palette:{body:"#566a90",accent:"#9a7cff",barrel:"#2e3a52"}},sniper:{id:"sniper",name:"Longshot .50",kind:"sniper",damage:195,rpm:64,mag:5,reserveMax:40,spread:.0015,pellets:1,range:260,reload:2.3,auto:!1,unlock:8,price:1400,ch:.28,rarity:"epic",pierce:2,ricochet:1,palette:{body:"#41506a",accent:"#59d0ff",barrel:"#243044"}},lmg:{id:"lmg",name:"M249 LMG",kind:"lmg",damage:24,rpm:760,mag:100,reserveMax:400,spread:.05,pellets:1,range:110,reload:3.2,auto:!0,unlock:9,price:1800,ch:2,rarity:"legendary",pierce:1,heat:.011,palette:{body:"#5c6444",accent:"#e8c33a",barrel:"#333a26"}},launcher:{id:"launcher",name:"RPG Launcher",kind:"launcher",damage:55,rpm:35,mag:1,reserveMax:12,spread:.01,pellets:1,range:220,reload:2.6,auto:!1,unlock:11,price:2e3,ch:1.8,rarity:"legendary",explosive:{radius:9,damage:190},palette:{body:"#6f4034",accent:"#ff6a3a",barrel:"#3e241c"}},taser:{id:"taser",name:"Arc Taser",kind:"taser",damage:30,rpm:90,mag:2,reserveMax:20,spread:.006,pellets:1,range:9,reload:1.4,auto:!1,effect:"shock",effectTime:2.4,unlock:3,price:600,ch:.8,rarity:"rare",palette:{body:"#3f4a5a",accent:"#ffe14d",barrel:"#20262f"}},flame:{id:"flame",name:"Purifier",kind:"flame",damage:9,rpm:900,mag:120,reserveMax:400,spread:.09,pellets:1,range:13,reload:2.4,auto:!0,effect:"burn",effectTime:3.2,unlock:12,price:2e3,ch:2.2,rarity:"legendary",palette:{body:"#5a4038",accent:"#ff6a2a",barrel:"#2f211c"}},minigun:{id:"minigun",name:"Vulcan Minigun",kind:"minigun",damage:18,rpm:1400,mag:200,reserveMax:600,spread:.06,pellets:1,range:90,reload:4.5,auto:!0,spinup:.9,unlock:13,price:2600,ch:2.6,rarity:"legendary",pierce:1,heat:.0075,palette:{body:"#5a5442",accent:"#ffb03a",barrel:"#33302a"}}},hu=[{key:"optic",name:"Optic"},{key:"muzzle",name:"Muzzle"},{key:"mag",name:"Magazine"},{key:"grip",name:"Grip"}],Ps={optic:[{id:"none",name:"Iron Sights",price:0,mod:{}},{id:"holo",name:"Holo Sight",price:350,mod:{spread:-.1},note:"-10% spread"},{id:"scope",name:"4x Scope",price:700,mod:{spread:-.18,ads:.25},note:"-18% spread, slower ADS"}],muzzle:[{id:"none",name:"Bare",price:0,mod:{}},{id:"comp",name:"Compensator",price:400,mod:{spread:-.22,recoil:-.15},note:"-22% spread, less recoil"},{id:"supp",name:"Suppressor",price:650,mod:{silent:!0,damage:-.08},note:"silent, -8% damage"}],mag:[{id:"none",name:"Standard",price:0,mod:{}},{id:"ext",name:"Extended Mag",price:450,mod:{mag:.5},note:"+50% magazine"},{id:"drum",name:"Drum Mag",price:900,mod:{mag:1,reload:.2},note:"+100% mag, +20% reload"}],grip:[{id:"none",name:"None",price:0,mod:{}},{id:"vert",name:"Vertical Grip",price:300,mod:{spread:-.15},note:"-15% spread"},{id:"ang",name:"Angled Grip",price:380,mod:{recoil:-.25},note:"-25% recoil"}]};function u_(r){let t={};if(!r)return t;for(let e of Object.keys(r)){let i=Ps[e];if(!i)continue;let n=i.find(s=>s.id===r[e]);if(n)for(let[s,o]of Object.entries(n.mod))s==="silent"?t.silent=!0:t[s]=(t[s]||0)+o}return t}var Ri=[{key:"damage",name:"Damage",max:5,step:"+8% damage"},{key:"mag",name:"Magazine",max:5,step:"+20% mag size"},{key:"reload",name:"Reload",max:5,step:"-6% reload time"},{key:"spread",name:"Accuracy",max:5,step:"-7% spread"}];function gn(r,t,e=0,i=null,n=0){let s=t||{},o=s.damage||0,a=s.mag||0,l=s.reload||0,h=s.spread||0,c=r.mag===1/0?0:Math.max(1,Math.round(r.mag*.2)),u={damage:r.damage*(1+.08*o),mag:r.mag===1/0?1/0:r.mag+c*a,magStep:c,reload:r.reload*Math.max(.35,1-.06*l-.12*e),spread:r.spread*Math.max(.35,1-.07*h)};r.explosive&&(u.explosive={radius:r.explosive.radius,damage:r.explosive.damage*(1+.08*o)});let f=u_(i);return f.damage&&(u.damage*=1+f.damage),f.mag&&r.mag!==1/0&&(u.mag=Math.max(1,Math.round(u.mag*(1+f.mag)))),f.spread&&(u.spread*=Math.max(.25,1+f.spread)),f.reload&&(u.reload*=1+f.reload),f.recoil&&(u.recoil=1+f.recoil),f.ads&&(u.adsSlow=1+f.ads),f.silent&&(u.silent=!0),n&&(u.damage*=1+n),u}function co(r,t,e){return r==="damage"?`${Math.round(t.damage)} \u2192 ${Math.round(e.damage)} dmg`:r==="mag"?`${t.mag} \u2192 ${e.mag} rounds`:r==="reload"?`${t.reload.toFixed(2)}s \u2192 ${e.reload.toFixed(2)}s reload`:`${(t.spread*1e3).toFixed(0)} \u2192 ${(e.spread*1e3).toFixed(0)} spread`}var Ls=["knife","pistol","revolver","smg","shotgun","crossbow","rifle","sniper","lmg","launcher","taser","flame","minigun"];function d_(r,t){let e=new Tt({color:"#232a33",roughness:.85,flatShading:!0}),i=new Tt({color:"#c8a884",roughness:.9,flatShading:!0}),n=new Tt({color:"#39424f",roughness:.8,flatShading:!0}),s=(l,h,c,u)=>{let f=new Kt,p=new V(new xt(.13,.1,.17),e),g=new V(new xt(.05,.06,.1),e);g.position.set(.07,.04,-.02);let _=new V(new xt(.11,.09,.09),n);_.position.set(0,-.02,.13);let m=new V(new xt(.12,.05,.06),i);return m.position.set(0,.06,-.06),f.add(p,g,_,m),f.position.set(l,-.1,h),f.rotation.set(c||0,0,u||0),r.add(f),f},o=s(.055,.02,.18,-.1),a=s(-.075,-.3,.1,.16);return{right:o,left:a}}function f_(r,t){let e=new Kt,i=r.palette||{body:"#2b3342",accent:"#38f2c8",barrel:"#12161f"},n=t&&t.accent||i.accent,s=new Tt({color:i.body,roughness:.46,metalness:.6,emissive:i.body,emissiveIntensity:.38}),o=new Tt({color:i.barrel,roughness:.66,metalness:.45,emissive:i.barrel,emissiveIntensity:.32}),a=new Tt({color:n,roughness:.28,metalness:.55,emissive:n,emissiveIntensity:.75});if(r.kind==="melee"){let d=new V(new xt(.05,.02,.5),s);d.position.set(0,0,-.35),e.add(d);let v=new V(new xt(.07,.07,.18),o);v.position.set(0,0,.02),e.add(v),e.position.set(.28,-.26,-.45);let y=new ce;return y.position.set(0,0,-.6),e.add(y),{g:e,muzzle:y,flashPos:new w(0,0,-.6)}}if(r.kind==="crossbow"){let d=new V(new xt(.09,.12,.75),s);d.position.set(0,0,-.18),e.add(d);let v=new V(new xt(.8,.05,.06),o);v.position.set(0,.04,-.42),e.add(v);let y=new V(new xt(.02,.02,.02),a);y.position.set(0,.04,-.05),e.add(y);let x=new V(new ue(.012,.012,.5,5),a);x.rotation.x=Math.PI/2,x.position.set(0,.04,-.4),e.add(x),e.position.set(.26,-.24,-.42);let R=new ce;return R.position.set(0,.04,-.9),e.add(R),{g:e,muzzle:R,flashPos:new w(0,.04,-.9)}}if(r.kind==="launcher"){let d=new V(new ue(.09,.11,.95,10),s);d.rotation.x=Math.PI/2,d.position.set(0,.02,-.42),e.add(d);let v=new V(new xt(.08,.2,.1),o);v.position.set(0,-.17,.02),v.rotation.x=.3,e.add(v);let y=new V(new xt(.02,.07,.02),a);y.position.set(0,.14,-.2),e.add(y),e.position.set(.26,-.22,-.42);let x=new ce;return x.position.set(0,.02,-.92),e.add(x),{g:e,muzzle:x,flashPos:new w(0,.02,-.92)}}let l=r.kind==="sniper"?.75:r.kind==="shotgun"?.6:r.kind==="rifle"?.55:.42,h=new V(new xt(.13,.16,l),s);h.position.set(0,0,-l/2+.1),e.add(h);let c=new V(new ue(.026,.026,l*.9,8),o);c.rotation.x=Math.PI/2,c.position.set(0,.03,-l-.12),e.add(c);let u=r.kind==="smg"?.26:.2,f=new V(new xt(.08,u,.11),a);f.position.set(0,-.16,-.02),e.add(f);let p=new V(new xt(.09,.2,.1),o);p.position.set(0,-.16,.14),p.rotation.x=.25,e.add(p);let g=new V(new xt(.1,.12,.22),s);if(g.position.set(0,-.02,.24),e.add(g),r.kind==="sniper"||r.kind==="rifle"){let d=new V(new ue(.04,.04,.24,8),o);d.rotation.x=Math.PI/2,d.position.set(0,.12,-.25),e.add(d);let v=new V(new ii(.035,10),a);v.position.set(0,.12,-.37),e.add(v)}else{let d=new V(new xt(.02,.05,.02),a);d.position.set(0,.12,-.3),e.add(d)}e.position.set(.26,-.24,-.42);let _=new ce;_.position.set(0,.03,-l-.5),e.add(_);let m=d_(e,i);return{g:e,muzzle:_,hands:m,flashPos:new w(0,.03,-l-.5)}}var ho=class{constructor(t,e,i,n){this.camera=t,this.scene=e,this.player=i,this.audio=n,this.slots=[],this.index=0,this.cool=0,this.reloading=!1,this.reloadT=0,this.recoil=0,this.adsPos=0,this.onHit=null,this.onKill=null,this.raycaster=new Kn,this.raycaster.far=400,this._tracers=[],this._tracerPool=[],this._decals=[],this._decalPool=[],this._projectiles=[],this._buildDecalTex(),this._vmHolder=new Kt,this._vmHolder.frustumCulled=!1,t.add(this._vmHolder),this.muzzleLight=new Ve("#ffd98a",0,9),this._vmHolder.add(this.muzzleLight),this._model=null,this.theme="neon",this.upgrades={},this._sway=new rt,this.spin=0,this.heat=0,this.overheated=!1,this._burstN=0,this.stats={}}setTheme(t){!ts[t]||this.theme===t||(this.theme=t,this._equip(this.index))}stat(t){return this.stats[t]||(this.stats[t]={shots:0,hits:0,kills:0}),this.stats[t]}_st(t){let e=this.progression?this.progression.weaponUp[t.id]:this.upgrades[t.id],i=this.progression?this.progression.perk("reload"):0,n=this.progression?this.progression.attachments[t.id]:null;return gn(t,e,i,n)}currentMag(){let t=this.current;return t?this._st(t.def).mag:0}has(t){return this.slots.some(e=>e.def.id===t)}slotOf(t){return this.slots.findIndex(e=>e.def.id===t)}remove(t){let e=this.slots.findIndex(i=>i.def.id===t);return e<0||this.slots.length<=1?!1:(this.slots.splice(e,1),this.index>=this.slots.length&&(this.index=this.slots.length-1),this._equip(this.index),!0)}add(t){if(this.has(t))return!1;let e=Pe[t];return this.slots.push({def:e,ammo:this._st(e).mag,reserve:e.reserveMax??0}),this.slots.length===1&&this._equip(0),!0}switchTo(t){t<0||t>=this.slots.length||t===this.index||(this._equip(t),this.audio&&this.audio.reload())}next(){this.switchTo((this.index+1)%this.slots.length)}_equip(t){this.index=t,this.reloading=!1,this._model&&this._vmHolder.remove(this._model);let e=f_(this.slots[t].def,ts[this.theme]);this._model=e.g,this._muzzle=e.muzzle,this._hands=e.hands,this.muzzleLight.position.copy(e.flashPos),this._vmHolder.add(this._model),this.basePos=this._model.position.clone(),this.handBase=this._hands?this._hands.left.position.clone():null}get current(){return this.slots[this.index]}_buildDecalTex(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),i=e.createRadialGradient(32,32,2,32,32,26);i.addColorStop(0,"rgba(6,8,12,.95)"),i.addColorStop(.5,"rgba(20,22,28,.7)"),i.addColorStop(1,"rgba(20,22,28,0)"),e.fillStyle=i,e.beginPath(),e.arc(32,32,26,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.22)",e.lineWidth=2;for(let n=0;n<6;n++){let s=Math.random()*Math.PI*2;e.beginPath(),e.moveTo(32,32),e.lineTo(32+Math.cos(s)*20,32+Math.sin(s)*20),e.stroke()}this._decalTex=new Wi(t)}_decal(t,e){let i=this._decalPool.pop();if(!i){let n=new Ot({map:this._decalTex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4});i=new V(new ze(.3,.3),n)}if(i.visible=!0,this.scene.add(i),i.position.copy(t).addScaledVector(e,.01),i.lookAt(t.clone().add(e)),i.rotation.z=Math.random()*Math.PI,this._decals.push(i),this._decals.length>50){let n=this._decals.shift();n.visible=!1,this.scene.remove(n),this._decalPool.push(n)}}_tracer(t,e,i="#ffe9a8"){let n=this._tracerPool.pop();if(!n){let o=new ae().setFromPoints([new w,new w]);n=new Yn(o,new cn({color:i,transparent:!0,opacity:.9}))}n.material.color.set(i),n.material.opacity=.9;let s=n.geometry.attributes.position;if(s.setXYZ(0,t.x,t.y,t.z),s.setXYZ(1,e.x,e.y,e.z),s.needsUpdate=!0,n.visible=!0,this.scene.add(n),this._tracers.push({line:n,life:.05}),this._tracers.length>30){let o=this._tracers.shift();o.line.visible=!1,this.scene.remove(o.line),this._tracerPool.push(o.line)}}fire(t){let e=this.current;if(!e)return!1;let i=e.def;if(this.reloading)if(e.ammo>0)this.reloading=!1;else return!1;if(this.cool>0)return!1;if(i.kind==="melee")return this._melee(t,i),!0;if(this.overheated)return!1;if(t.alt&&i.altFire&&this._burstN<=0&&e.ammo>0&&(i.altFire.kind==="burst"?(this._burstN=i.altFire.count-1,this._burstCtx=t,this._burstDelay=i.altFire.delay,this._burstT=i.altFire.delay):i.altFire.kind==="slug"&&(this._slug=i.altFire.mult)),e.ammo<=0)return this.startReload(),!1;e.ammo--,this.cool=60/i.rpm,this.recoil=Math.min(1,this.recoil+.9);let n=new w;this.camera.getWorldPosition(n);let s=new w;this.camera.getWorldDirection(s);let o=this._st(i),a=o.spread*(1-this.player.zoom*.7);this._slug&&(o.damage*=this._slug,a*=.15);let l=new w;if(this._muzzle.getWorldPosition(l),i.explosive){let u=s.clone().normalize();return this._launch(t,i,o,l.clone(),u),this.recoil=1.1,this.muzzleLight.intensity=3.5,this.player.kick(.05,(Math.random()-.5)*.008),this.player.addShake(.4),this.audio&&this.audio.shot("shotgun"),!0}let h=i.spinup?i.rpm*(.22+.78*Math.min(1,this.spin/i.spinup)):i.rpm;this.cool=60/h,this.stat(i.id).shots++,i.heat&&(this.heat=Math.min(1,this.heat+i.heat),this.heat>=1&&(this.overheated=!0,this.audio&&this.audio.error()));for(let u=0;u<(i.pellets||1);u++){let f=s.clone();f.x+=(Math.random()-.5)*a*2,f.y+=(Math.random()-.5)*a*2,f.z+=(Math.random()-.5)*a*2,f.normalize(),this.raycaster.set(n,f),this.raycaster.far=i.range;let p=this.raycaster.intersectObjects(t.hittables,!0),g=n.clone().addScaledVector(f,i.range),_=0,m=i.pierce||0,d=new Set;for(let v of p){let y=v.object.userData.enemy;if(!y||!y.alive){g=v.point.clone();let M=v.face?v.face.normal.clone().transformDirection(v.object.matrixWorld).normalize():f.clone().negate();if(this._decal(v.point,M),t.particles&&t.particles.impact(v.point,5),this.onWorldHit&&this.onWorldHit(v.point,v.object,f),i.ricochet&&!u._bounced){let E=f.clone().reflect(M).normalize();this.raycaster.set(v.point.clone().addScaledVector(E,.05),E);let U=this.raycaster.intersectObjects(t.hittables,!0);if(U.length){let F=U[0],K=F.object.userData.enemy;if(K&&K.alive){let L=o.damage*.6;K.damage(L,F.point,E),this.onDamage&&this.onDamage(F.point,L,"normal"),K.alive||(this.stat(i.id).kills++,this.onKill&&this.onKill(K))}g=F.point.clone()}else g=v.point.clone().addScaledVector(E,i.range)}break}if(d.has(y))continue;d.add(y);let x=de(1-v.distance/i.range,.4,1),R=v.object.userData.weakPoint&&!y.weakBroken,A=R||v.point.y>=y.headHeight(),C=A?1.5:1;R&&(C=2.6);let k=o.damage*x*C;if(y.damage(k,v.point,f),i.effect&&y.alive&&y.applyEffect(i.effect,i.effectTime||2),k>28&&y.stagger(.25),this.stat(i.id).hits++,R&&y.hitWeak(k),this.onDamage&&this.onDamage(v.point,k,A?"crit":"normal"),this.onHit&&this.onHit(y,v.point,k,A),A&&this.onHeadshot&&this.onHeadshot(y),y.alive||(this.stat(i.id).kills++,this.onKill&&this.onKill(y)),g=v.point.clone(),_>=m)break;_++}!i.silent&&!o.silent&&this._tracer(l,g)}t.particles&&(t.particles.impact(l,3,[1,.85,.5]),t.particles.smoke(l,2),t.particles.casing(l,s)),this.muzzleLight.intensity=3.2;let c=de(i.damage*(i.pellets||1)/260+i.rpm/1600*.6,.25,2.2)*(o.recoil||1);return this._slug=0,this.player.kick(.01*c,(Math.random()-.5)*.01*c),(i.kind==="sniper"||i.kind==="shotgun")&&this.player.kick(.045,(Math.random()-.5)*.012),this.player.addShake(i.kind==="shotgun"||i.kind==="sniper"?.25:.08),this.player.fovPunch=i.kind==="sniper"||i.kind==="shotgun"?2.4:i.kind==="launcher"?3:1.1,this.audio&&!i.silent&&!o.silent&&this.audio.shot(i.kind),!0}_launch(t,e,i,n,s){let o=new V(new Ce(.15,8,8),new Ot({color:"#ffb03a"}));o.position.copy(n);let a=new Ve("#ffb03a",1.6,9);o.add(a),this.scene.add(o),this._projectiles.push({mesh:o,pos:n.clone(),vel:s.clone().multiplyScalar(46),life:5,def:e,st:i,ctx:t})}_explode(t,e,i){i.particles&&i.particles.explosion(t,55),this.audio&&this.audio.explosion(),this.player.addShake(.95);let n=e.explosive.radius;for(let s of i.enemies){if(!s.alive)continue;let o=s.group.position.distanceTo(t);if(o<n){let a=1-o/n;s.damage(e.explosive.damage*(.4+.6*a),s.group.position.clone(),new w(0,.35,0).normalize()),this.onHit&&this.onHit(s,s.group.position,0),!s.alive&&this.onKill&&this.onKill(s)}}this.player.pos.distanceTo(t)<n*.7&&this.player.damage(e.explosive.damage*.12)}_updateProjectiles(t){for(let e=this._projectiles.length-1;e>=0;e--){let i=this._projectiles[e];i.life-=t,i.pos.addScaledVector(i.vel,t),i.mesh.position.copy(i.pos);let n=i.life<=0;if(!n){for(let s of i.ctx.enemies)if(s.alive&&s.group.position.distanceTo(i.pos)<s.radius+.7){n=!0;break}}if(!n){for(let s of this.player.world.collidersNear(i.pos.x,i.pos.z,.7))if(i.pos.x>s.minX&&i.pos.x<s.maxX&&i.pos.z>s.minZ&&i.pos.z<s.maxZ&&i.pos.y<s.height){n=!0;break}}n&&(this._explode(i.pos,i.st,i.ctx),this.scene.remove(i.mesh),this._projectiles.splice(e,1))}}_melee(t,e){let i=this._st(e);this.cool=60/e.rpm,this.recoil=.7,this.audio&&this.audio.shot("melee");let n=new w;this.camera.getWorldPosition(n);let s=new w;this.camera.getWorldDirection(s),s.y=0,s.normalize(),this.player.addImpulse(new w(s.x*5.5,0,s.z*5.5));for(let o of t.enemies){if(!o.alive)continue;let a=o.group.position.clone().sub(n);a.y=0,!(a.length()>e.range+o.radius)&&(a.normalize(),a.dot(s)>.5&&(o.damage(i.damage,o.group.position.clone().setY(1.2),s),this.onHit&&this.onHit(o,o.group.position,i.damage),!o.alive&&this.onKill&&this.onKill(o)))}}startReload(){let t=this.current;if(!t||this.reloading)return;let e=t.def;e.kind!=="melee"&&(t.ammo>=this._st(e).mag||t.reserve<=0||(this.reloading=!0,this.reloadT=0,this.audio&&this.audio.reload()))}addAmmo(t=.5){for(let e of this.slots)e.def.kind!=="melee"&&(e.reserve=Math.min(e.def.reserveMax,e.reserve+Math.ceil(e.def.reserveMax*t)))}update(t,e,i){this.cool=Math.max(0,this.cool-t);let n=this.current;if(!n)return;let s=n.def;if(this.reloading){this.reloadT+=t;let l=this._st(s),h=Math.sin(Math.min(1,this.reloadT/l.reload)*Math.PI);if(this._model&&(this._model.rotation.x=h*.9),this._hands&&this.handBase&&(this._hands.left.position.y=this.handBase.y-h*.22,this._hands.left.position.z=this.handBase.z+h*.1,this._hands.right.rotation.x=.18-h*.4),this.reloadT>=l.reload){let c=l.mag-n.ammo,u=Math.min(c,n.reserve);n.ammo+=u,n.reserve-=u,this.reloading=!1,this._model&&(this._model.rotation.x=0),this._hands&&this.handBase&&(this._hands.left.position.copy(this.handBase),this._hands.right.rotation.x=.18)}}this.adsPos=this.player.zoom,this.recoil=Math.max(0,this.recoil-t*6);let o=this.recoil*this.recoil;if(this._model){let l=performance.now()/1e3,h=Math.sin(l*2)*.006,c=Math.cos(l*4)*.006,u=de(-this.player.lookVX*42e-5,-.035,.035),f=de(-this.player.lookVY*42e-5,-.035,.035);this._sway.x=Xe(this._sway.x,u,9,t),this._sway.y=Xe(this._sway.y,f,9,t);let p=this.basePos,g=new w(0,-.16,-.32),_=1-this.adsPos*.6;this._model.position.set(p.x+(g.x-p.x)*this.adsPos+h+this._sway.x*_,p.y+(g.y-p.y)*this.adsPos+c+this._sway.y*_-o*.02,p.z+(g.z-p.z)*this.adsPos+o*.09),this._model.rotation.x=-o*.25}if(this.muzzleLight.intensity=Math.max(0,this.muzzleLight.intensity-t*40),e&&e.fire&&this.current&&this.current.def.spinup&&this.cool<=0?this.spin=Math.min(this.current.def.spinup||1,this.spin+t):this.spin=Math.max(0,this.spin-t*2.2),this.heat>0){let l=e&&e.fire?.1:.42;this.heat=Math.max(0,this.heat-l*t),this.overheated&&this.heat<=.25&&(this.overheated=!1)}this._burstN>0&&(this._burstT-=t,this._burstT<=0&&(this._burstT=this._burstDelay,this._burstN--,this.cool=0,this.fire(this._burstCtx||{hittables:[],particles:null}))),this._updateProjectiles(i===void 0?t:i);for(let l=this._tracers.length-1;l>=0;l--){let h=this._tracers[l];h.life-=t,h.line.material.opacity=Math.max(0,h.life/.05)*.9,h.life<=0&&(h.line.visible=!1,this.scene.remove(h.line),this._tracerPool.push(h.line),this._tracers.splice(l,1))}}ammoText(){let t=this.current;return t?t.def.kind==="melee"?["\u221E","\u221E"]:[String(t.ammo),String(t.reserve)]:["0","0"]}};function Nl(r,t,e,i){i=Math.min(i,r/2-.001,t/2-.001,e/2-.001);let n=new bs,s=r/2-i,o=t/2-i;n.moveTo(-s-i,-o),n.lineTo(-s-i,o),n.quadraticCurveTo(-s-i,o+i,-s,o+i),n.lineTo(s,o+i),n.quadraticCurveTo(s+i,o+i,s+i,o),n.lineTo(s+i,-o),n.quadraticCurveTo(s+i,-o-i,s,-o-i),n.lineTo(-s,-o-i),n.quadraticCurveTo(-s-i,-o-i,-s-i,-o);let a=new Hr(n,{depth:Math.max(.001,e-i*2),bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,curveSegments:3});return a.center(),a.computeVertexNormals(),a}function cu(r,t,e,i,n){let s=Nl(Math.max(r,t),e,i,n),o=s.attributes.position;for(let a=0;a<o.count;a++){let l=(o.getY(a)+e/2)/e,h=t+(r-t)*l;o.setX(a,o.getX(a)*(h/Math.max(r,t)))}return o.needsUpdate=!0,s.computeVertexNormals(),s}var uu=new Map;function du(r,t,e,i){let n=r.toFixed(2)+","+t.toFixed(2)+","+e.toFixed(2)+","+i.toFixed(2),s=uu.get(n);return s||(s=Nl(r,t,e,i),uu.set(n,s)),s}var ee={box:new xt(1,1,1),capsule:new Fr(.5,1,3,8),round:Nl(1,1,1,.16),cyl:new ue(.5,.5,1,8),sph:new Ce(.5,8,6),ico:new qi(.5,0),cone:new Xi(.5,1,6)},fu=["box","round","long","hood","helm"],pu=["plain","broad","hunch","bloat"],mu=["none","none","cap","helmet","pack","belt","pad"],gu=["#6a2020","#7a2a2a","#4a1a1a"];function p_(r){let t=r>>>0||2654435769;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}function Is(r,t,e=.1){let i=new ct(r),n={};return i.getHSL(n),n.h=(n.h+(t()-.5)*e+1)%1,n.s=de(n.s+(t()-.5)*e*1.6,.05,1),n.l=de(n.l+(t()-.5)*e,.06,.72),i.setHSL(n.h,n.s,n.l)}var uo=class{constructor(t,e,i){this.group=t,this.t=e;let n=p_(i);this.rnd=n,this.sizeJitter=e.boss?1:.88+n()*.26,this.headShape=fu[n()*fu.length|0],this.torsoShape=e.boss?"broad":pu[n()*pu.length|0],this.accessory=e.boss?"pad":mu[n()*mu.length|0],this.walkStyle=n()*3|0,this.deathPose=n()*3|0,this.stance=(n()-.5)*.18,this.eyeColor=e.behavior==="flee"?"#ffb03a":e.ranged?"#59d0ff":"#ff4d4d";let s=e.scale*this.sizeJitter;this.s=s,this.bodyMat=new Tt({color:Is(e.color,n),roughness:.85,flatShading:!0}),this.skinMat=new Tt({color:Is(e.skin,n,.16),roughness:.9,flatShading:!0}),this.darkMat=new Tt({color:Is("#20242c",n,.05),roughness:.9,flatShading:!0}),this.mats=[this.bodyMat,this.skinMat,this.darkMat],e.elite&&(this.bodyMat.emissive=new ct(this.eyeColor),this.bodyMat.emissiveIntensity=.16,this.skinMat.emissive=new ct(this.eyeColor),this.skinMat.emissiveIntensity=.1);let o=new V(ee.sph,new Ot({color:"#000",transparent:!0,opacity:.28,depthWrite:!1}));o.scale.set(1.5*s,.02*s,1.5*s),o.position.y=.02,t.add(o),this.contact=o,this._buildTorso(s),this._buildHead(s),this._buildCue(s),this._buildLimbs(s),this._buildAccessory(s),e.boss&&(this._buildBossProps(s),this._buildWeakPoint(s)),this.baseHeight=2.3*s,this.baseRadius=e.radius,this._damageStage=0,this._limbsLost=0,this.crawling=!1}_buildTorso(t){let e=this.group,i=this.torsoShape,n=ee.round,s=.72*t,o=1*t,a=.42*t,l=1.35*t,h=0;i==="broad"?(s=.94*t,o=.96*t,a=.52*t):i==="hunch"?(o=.92*t,h=.26,l=1.3*t):i==="bloat"&&(n=ee.sph,s=1.02*t,o=1.12*t,a=1.02*t,l=1.32*t);let c=n===ee.round,u=new V(c?du(s,o,a,.13*t):n,this.bodyMat);c||u.scale.set(s,o,a),u.position.set(0,l,0),u.rotation.x=h,u.rotation.z=this.stance,u.castShadow=!0,e.add(u),this.torso=u,this.torsoY=l}_buildHead(t){let e=this.group,i=this.headShape,n=this.torsoShape==="hunch"?2.02*t:2.08*t,s=ee.round,o=.44*t,a=.46*t,l=.44*t;i==="round"?(s=ee.ico,o=a=l=.48*t):i==="long"?(o=.34*t,a=.58*t,l=.38*t):(i==="hood"||i==="helm")&&(o=.42*t,a=.44*t,l=.42*t);let h=s===ee.round,c=new V(h?du(o,a,l,.11*t):s,this.skinMat);h||c.scale.set(o,a,l),c.position.y=n,c.rotation.z=this.stance*1.4,c.castShadow=!0,e.add(c),this.head=c,this.headY=n;let u=new V(ee.round,this.skinMat);u.scale.set(o*.78,a*.3,l*.82),u.position.set(0,n-a*.62,l*.12),u.castShadow=!0;let f=new V(ee.round,this.darkMat);f.scale.set(o*.94,a*.22,l*.4),f.position.set(0,n+a*.28,l*.72),e.add(u,f),this.faceParts=[u,f];let p=new V(ee.capsule,this.skinMat);if(p.scale.set(.19*t,.24*t,.19*t),p.position.set(0,n-a*1.05,-.02*t),e.add(p),this.neck=p,i==="hood"){let _=new V(ee.cone,this.darkMat);_.scale.set(.5*t,.5*t,.5*t),_.position.set(0,n+.24*t,.06*t),e.add(_)}else if(i==="helm"){let _=new V(ee.sph,this.darkMat);_.scale.set(.46*t,.3*t,.46*t),_.position.set(0,n+.2*t,0),e.add(_)}let g=new Ot({color:this.eyeColor});if(this.mats.push(g),i==="round"||i==="long"){this.eyes=[];for(let _ of[-1,1]){let m=new V(ee.box,g);m.scale.set(.09*t,.07*t,.05*t),m.position.set(.11*t*_,n+.04*t,-l*.95),e.add(m),this.eyes.push(m)}}else{let _=new V(ee.box,g);_.scale.set(.4*t,.09*t,.05*t),_.position.set(0,n+.02*t,-l*.95),e.add(_),this.eyes=[_]}}_buildCue(t){let e=new V(ee.box,new Ot({color:"#ff4d4d"}));e.scale.set(.15*t,.52*t,.15*t),e.position.set(0,this.headY+.78*t,0),e.visible=!1,this.group.add(e),this.alertCue=e}_buildLimbs(t){let e=this.group;this.legs=[],this.arms=[];let i=this.torsoShape==="bloat"?.72:.85,n=cu(.27*t,.19*t,i*t,.26*t,.07*t),s=.42*t*(i/.85);for(let h of[-1,1]){let c=new V(n,this.darkMat);c.position.set(.18*t*h,s,0),c.castShadow=!0,e.add(c),this.legs.push(c)}this.legY=s;let o=this.torsoShape==="broad"?.95:.85,a=cu(.22*t,.15*t,o*t,.21*t,.06*t),l=this.torsoY+.05*t;for(let h of[-1,1]){let c=new V(a,this.bodyMat);c.position.set(.47*t*h,l,0),c.castShadow=!0,e.add(c),this.arms.push(c)}this.armY=l}_buildAccessory(t){let e=this.group,i=this.accessory;if(i!=="none"){if(i==="cap"){let n=new V(ee.box,this.darkMat);n.scale.set(.46*t,.1*t,.46*t),n.position.set(0,this.headY+.22*t,0);let s=new V(ee.box,this.darkMat);s.scale.set(.42*t,.05*t,.2*t),s.position.set(0,this.headY+.18*t,-.26*t),e.add(n,s),this.accessoryParts=[n,s]}else if(i==="helmet"){let n=new V(ee.sph,this.darkMat);n.scale.set(.5*t,.34*t,.5*t),n.position.set(0,this.headY+.18*t,0),e.add(n),this.accessoryParts=[n]}else if(i==="pack"){let n=new V(ee.box,this.darkMat);n.scale.set(.5*t,.6*t,.26*t),n.position.set(0,this.torsoY+.05*t,.3*t),e.add(n),this.accessoryParts=[n]}else if(i==="belt"){let n=new V(ee.box,this.darkMat);n.scale.set(.76*t,.12*t,.46*t),n.position.set(0,this.torsoY-.5*t,0),e.add(n),this.accessoryParts=[n]}else if(i==="pad"){let n=this.rnd()<.5?-1:1,s=new V(ee.box,this.darkMat);s.scale.set(.3*t,.22*t,.42*t),s.position.set(.5*t*n,this.armY+.22*t,0),e.add(s),this.accessoryParts=[s]}}}_buildBossProps(t){let e=this.group,i=new Tt({color:"#2a2430",roughness:.5,metalness:.55,flatShading:!0,emissive:new ct(this.eyeColor),emissiveIntensity:.25});this.mats.push(i),this.bossParts=[];for(let o of[-1,1]){let a=new V(ee.cone,i);a.scale.set(.28*t,.72*t,.28*t),a.position.set(.62*t*o,this.armY+.5*t,0),a.rotation.z=-.35*o,e.add(a),this.bossParts.push(a)}for(let o=0;o<5;o++){let a=o/5*Math.PI*2,l=new V(ee.cone,i);l.scale.set(.1*t,.42*t,.1*t),l.position.set(Math.cos(a)*.18*t,this.headY+.42*t,Math.sin(a)*.18*t),e.add(l),this.bossParts.push(l)}let n=new Ot({color:this.eyeColor,transparent:!0,opacity:.1,side:Re,depthWrite:!1}),s=new V(ee.sph,n);s.scale.setScalar(3.1*t),s.position.y=this.torsoY,e.add(s),this.aura=s}_buildWeakPoint(){let t=new V(ee.sphere,new Tt({color:"#ff3d81",emissive:"#ff3d81",emissiveIntensity:1.4,roughness:.4}));t.scale.setScalar(.55),t.position.set(0,1.75,-.45),t.userData.weakPoint=!0,this.weakCore=t,this.group.add(t);let e=new V(ee.sphere,new Ot({color:"#ff8ab4",transparent:!0,opacity:.25,depthWrite:!1}));e.scale.setScalar(.95),e.position.copy(t.position),this.weakHalo=e,this.group.add(e)}breakWeak(){this.weakCore&&(this.group.remove(this.weakCore),this.group.remove(this.weakHalo),this.weakCore.material.dispose(),this.weakHalo.material.dispose(),this.weakCore=null,this.weakHalo=null)}resetVisual(){this.bodyMat.color.copy(Is(this.t.color,this.rnd)),this.skinMat.color.copy(Is(this.t.skin,this.rnd,.16)),this.t.elite&&(this.bodyMat.emissive=new ct(this.eyeColor),this.bodyMat.emissiveIntensity=.16,this.skinMat.emissive=new ct(this.eyeColor),this.skinMat.emissiveIntensity=.1);for(let t of this.legs)t.visible=!0;for(let t of this.arms)t.visible=!0;if(this.crawling=!1,this._damageStage=0,this._limbsLost=0,this._wounds){for(let t of this._wounds)this.group.remove(t),t.material.dispose();this._wounds=null}if(this._stumps){for(let t of this._stumps)this.group.remove(t),t.material.dispose();this._stumps=null}this.torso&&(this.torso.rotation.x=this.torsoShape==="hunch"?.26:0),this.head&&(this.head.position.y=this.headY,this.head.position.z=0),this.aura&&(this.aura.visible=!0),this.weakCore&&(this.weakCore.visible=!0),this.alertCue&&(this.alertCue.visible=!1);for(let t of this.mats)t.transparent=!1,t.opacity=1,t.depthWrite=!0}setDamage(t){let e=t>.6?0:t>.3?1:2;if(e!==this._damageStage){if(this._damageStage=e,this.skinMat.color.lerp(new ct("#5a2a2a"),e===1?.25:.5),this.bodyMat.color.lerp(new ct("#2a2028"),e===1?.18:.38),e>=1&&!this._wounds){this._wounds=[];for(let i=0;i<(e===2?4:2);i++){let n=new V(ee.box,new Tt({color:gu[this.rnd()*gu.length|0],roughness:1,flatShading:!0})),s=.62*this.s,o=.9*this.s,a=.46*this.s;n.scale.set(.16*this.s,.14*this.s,.06*this.s),n.position.set((this.rnd()-.5)*s,this.torsoY+(this.rnd()-.5)*o*.8,(this.rnd()<.5?-1:1)*a*.5),this.group.add(n),this._wounds.push(n),this.mats.push(n.material)}}e===2&&this._limbsLost===0&&!this.t.boss&&this.rnd()<.55&&this.loseLimb(),e===2&&!this.crawling&&!this.t.boss&&this.rnd()<.45&&this.crawl()}}loseLimb(){if(this._limbsLost>=2||this.arms.length===0)return!1;let t=this._limbsLost===0?1:0,e=this.arms[t];if(!e)return!1;e.visible=!1;let i=new V(ee.box,new Tt({color:"#5a2020",roughness:1,flatShading:!0}));return i.scale.set(.24*this.s,.24*this.s,.24*this.s),i.position.copy(e.position),i.position.y-=.36*this.s,this.group.add(i),this.mats.push(i.material),this._stumps=this._stumps||[],this._stumps.push(i),this._limbsLost++,!0}crawl(){if(!this.crawling){this.crawling=!0;for(let t of this.legs)t.visible=!1;this.torso.rotation.x=Math.max(this.torso.rotation.x,.85),this.head.position.y=this.torsoY-.1*this.s,this.head.position.z=-.3*this.s,this.aura&&(this.aura.visible=!1)}}};var Hy={box:new xt(1,1,1)},fo=1;function _u(r){fo=Math.max(.1,r||1)}var Ci={walker:{name:"Walker",hp:60,speed:2,dmg:9,radius:.5,scale:1,color:"#5a7a4a",skin:"#7a9a5a",behavior:"chase",xp:12,coins:10,unlock:0},runner:{name:"Runner",hp:42,speed:4.6,dmg:7,radius:.45,scale:.95,color:"#7a5a3a",skin:"#9a7a4a",behavior:"chase",xp:16,coins:12,unlock:0},spitter:{name:"Spitter",hp:70,speed:1.8,dmg:11,radius:.55,scale:1.05,color:"#3a7a5a",skin:"#5aaa6a",behavior:"chase",ranged:!0,range:26,xp:26,coins:20,unlock:2},brute:{name:"Brute",hp:320,speed:1.6,dmg:24,radius:.95,scale:1.7,color:"#4a3a5a",skin:"#6a5a7a",behavior:"chase",xp:110,coins:56,unlock:4,elite:!0,charge:!0},crawler:{name:"Crawler",hp:34,speed:5.2,dmg:6,radius:.4,scale:.8,color:"#6a8a4a",skin:"#88a85a",behavior:"chase",xp:14,coins:10,unlock:1,leap:!0},bloater:{name:"Bloater",hp:140,speed:1.3,dmg:18,radius:.8,scale:1.35,color:"#5a6a3a",skin:"#7a8a4a",behavior:"chase",xp:34,coins:26,unlock:3,explodes:{radius:6.5,damage:34}},screamer:{name:"Screamer",hp:90,speed:2.6,dmg:8,radius:.55,scale:1.05,color:"#8a4a6a",skin:"#a86a8a",behavior:"chase",xp:30,coins:22,unlock:3,summoner:!0},pickpocket:{name:"Pickpocket",hp:70,speed:4,dmg:6,radius:.45,scale:.95,color:"#4a6a4a",skin:"#8aa06a",behavior:"thief",xp:30,coins:28,unlock:3,thief:!0},behemoth:{name:"Behemoth",hp:900,speed:1.5,dmg:34,radius:1.5,scale:2.6,color:"#3a2a4a",skin:"#5a4a6a",behavior:"chase",xp:420,coins:300,unlock:6,boss:!0,elite:!0},warlord:{name:"Warlord",hp:620,speed:3.2,dmg:26,radius:.85,scale:1.5,color:"#2a2a3a",skin:"#9a8a7a",behavior:"guard",ranged:!0,range:34,xp:380,coins:260,unlock:7,boss:!0,elite:!0},vandal:{name:"Vandal",hp:45,speed:3,dmg:6,radius:.45,scale:1,color:"#c86a2f",skin:"#e0a070",behavior:"flee",crime:"Vandalism",xp:12,coins:10,unlock:0},thief:{name:"Thief",hp:55,speed:3.6,dmg:8,radius:.45,scale:1,color:"#3a3a4a",skin:"#c0a080",behavior:"flee",crime:"Theft",xp:18,coins:18,unlock:0},burglar:{name:"Burglar",hp:65,speed:3.2,dmg:10,radius:.5,scale:1.05,color:"#2a2a38",skin:"#b09070",behavior:"flee",crime:"Burglary",xp:24,coins:28,unlock:1},dealer:{name:"Dealer",hp:75,speed:2.6,dmg:12,radius:.5,scale:1.05,color:"#4a3a2a",skin:"#a08060",behavior:"guard",ranged:!0,range:22,crime:"Drug Deal",xp:36,coins:44,unlock:1},carjacker:{name:"Carjacker",hp:80,speed:3.4,dmg:14,radius:.5,scale:1.05,color:"#3a2a2a",skin:"#a08070",behavior:"flee",crime:"Carjacking",xp:30,coins:36,unlock:2},kidnapper:{name:"Kidnapper",hp:110,speed:3,dmg:16,radius:.55,scale:1.15,color:"#2a1a2a",skin:"#a08878",behavior:"guard",ranged:!0,range:20,crime:"Kidnapping",xp:52,coins:60,unlock:3},homicide:{name:"Homicide Suspect",hp:160,speed:3.4,dmg:20,radius:.6,scale:1.2,color:"#1a1a22",skin:"#a08878",behavior:"guard",ranged:!0,range:28,crime:"Homicide",xp:85,coins:96,unlock:4,elite:!0},gangster:{name:"Gangster",hp:120,speed:3.2,dmg:16,radius:.55,scale:1.1,color:"#3a2a3a",skin:"#a08070",behavior:"guard",ranged:!0,range:26,crime:"Gang Activity",xp:46,coins:52,unlock:2},smuggler:{name:"Smuggler",hp:95,speed:3,dmg:12,radius:.5,scale:1,color:"#2a3a2a",skin:"#b09070",behavior:"flee",crime:"Smuggling",xp:34,coins:44,unlock:2},pyromaniac:{name:"Pyromaniac",hp:130,speed:2.8,dmg:18,radius:.6,scale:1.15,color:"#5a2a1a",skin:"#c09070",behavior:"guard",crime:"Arson",xp:62,coins:72,unlock:3},ringleader:{name:"Ringleader",hp:420,speed:3,dmg:24,radius:.85,scale:1.5,color:"#1a1a26",skin:"#a08878",behavior:"guard",ranged:!0,range:30,crime:"Organised Crime",xp:320,coins:220,unlock:5,boss:!0,elite:!0}},Ol=class r{constructor(t,e,i,n=1){let s=Ci[t]||Ci.walker;this.type=t,this.t=s,this.world=i,this.maxHealth=Math.round(s.hp*(1+(n-1)*.28)),this.health=this.maxHealth,this.speed=s.speed*(1+Math.min(.3,(n-1)*.04)),this.attackDamage=s.dmg*(1+(n-1)*.16),this.radius=s.radius*s.scale,this.alive=!0,this.removeMe=!1,this.attackCool=.6+Math.random(),this.hitFlash=0,this.deadT=0,this.isBoss=!!s.boss,this._onDeath=null,this.staggerT=0,this.windup=0,this.bias=new w,this.cohesionT=Math.random()*.5,this.passive=!1,this.alert="idle",this.alertT=0,this.losT=99,this.lastKnown=new w,this._losTick=Math.random()*.25,this._canSee=!1,this._cueT=0,this._cols=[],this._tgt=new w,this._toP=new w;let o=this.body?this.body.rnd:Math.random;this.flank=o()<.42,this.flankSide=o()<.5?-1:1,this.phase=1,this.fearT=0,this.leapCool=0,this.hopT=0,this.hopDur=0,this.hopDir=new w,this.chargeCool=0,this.chargeT=0,this.chargeDir=new w,this.slamCool=0,this.leaps=!!s.leap,this.charger=!!s.charge,this.knock=new w,this.wander=new w,this.wanderT=0,this.facing=Math.random()*Math.PI*2,this.surrendered=!1,this.arrested=!1,this.arrestT=0,this.safeZones=[],this.stolen=0,this.grabbing=null,this.grabCool=0,this.fleeing=!1,this.weak=null,this.weakBroken=!1,this.group=new Kt,this.group.position.copy(e),this._build(s),this._mats=[],this.group.traverse(a=>{a.isMesh&&(a.userData.enemy=this,this._mats.push(a.material))}),this._pickWander()}reset(t,e,i=1){let n=Ci[t]||Ci.walker,s=this.type!==t;return this.type=t,this.t=n,this.maxHealth=Math.round(n.hp*(1+(i-1)*.28)),this.health=this.maxHealth,this.speed=n.speed*(1+Math.min(.3,(i-1)*.04)),this.attackDamage=n.dmg*(1+(i-1)*.16),this.radius=n.radius*n.scale,this.alive=!0,this.removeMe=!1,this.attackCool=.6+Math.random(),this.hitFlash=0,this.deadT=0,this.isBoss=!!n.boss,this._onDeath=null,this.staggerT=0,this.windup=0,this._cueT=0,this._canSee=!1,this.losT=99,this.cohesionT=Math.random()*.5,this.passive=!1,this.alert="idle",this.alertT=0,this.flank=Math.random()<.42,this.flankSide=Math.random()<.5?-1:1,this.phase=1,this.fearT=0,this.leapCool=0,this.hopT=0,this.hopDur=0,this.chargeCool=0,this.chargeT=0,this.slamCool=0,this.grabCool=0,this.leaps=!!n.leap,this.charger=!!n.charge,this.knock.set(0,0,0),this.wanderT=0,this.facing=Math.random()*Math.PI*2,this.surrendered=!1,this.arrested=!1,this.arrestT=0,this.effects=null,this.group.position.copy(e),this.group.rotation.set(0,0,0),this.group.visible=!0,s||!this.body?(this._clearBody(),this._build(n)):this.body.resetVisual(),this._mats=[],this.group.traverse(o=>{o.isMesh&&(o.userData.enemy=this,this._mats.push(o.material))}),this._pickWander(),this}_clearBody(){for(let t=this.group.children.length-1;t>=0;t--){let e=this.group.children[t];this.group.remove(e),e.isMesh&&e.material.dispose()}this.body=null}dispose(){this._clearBody(),this.group.parent&&this.group.parent.remove(this.group)}_build(t){r._seq=(r._seq||0)+1;let e=Math.round(this.group.position.x*100)*73856093^Math.round(this.group.position.z*100)*19349663^r._seq*83492791;this.body=new uo(this.group,t,e),this.legs=this.body.legs,this.arms=this.body.arms}_hasLOS(t){let e=this.group.position.x,i=this.group.position.z,n=t.pos.x,s=t.pos.z,o=Math.hypot(n-e,s-i);if(o<3)return!0;let a=Math.min(10,3+o/6|0);for(let l=1;l<a;l++){let h=l/a,c=e+(n-e)*h,u=i+(s-i)*h;for(let f of this.world.collidersNear(c,u,.4))if(c>f.minX&&c<f.maxX&&u>f.minZ&&u<f.maxZ&&f.height>1.4)return!1}return!0}hear(t,e){return!this.alive||this.surrendered||this.passive||Math.hypot(t.x-this.group.position.x,t.z-this.group.position.z)>e||this.alert==="hunting"?!1:(this.lastKnown.set(t.x,0,t.z),this.alert="suspicious",this.alertT=0,!0)}_spot(){this._cueT>0||(this._cueT=.9,this.body&&this.body.alertCue&&(this.body.alertCue.visible=!0))}headHeight(){return this.body?this.body.headY:1.78*this.t.scale}stagger(t){this.staggerT=Math.max(this.staggerT,t)}applyEffect(t,e){this.effects||(this.effects={}),this.effects[t]=Math.max(this.effects[t]||0,e),this._fxT=0}surrender(){!this.alive||this.surrendered||(this.surrendered=!0,this.knock.set(0,0,0))}_pickWander(){let t=Math.random()*Math.PI*2,e=10+Math.random()*22;this.wander.set(this.group.position.x+Math.cos(t)*e,0,this.group.position.z+Math.sin(t)*e),this.wanderT=0}rnd(){return Math.random()}damage(t,e,i){if(!this.alive)return;this.health-=t,this.hitFlash=.12;for(let s of this._mats)s.emissive&&(s.emissive.setRGB(1,1,1),s.emissiveIntensity=1.5);let n=de(t/40,.2,2.5)/this.t.scale;i&&this.knock.addScaledVector(i,n*6),this.body&&(this.body.setDamage(Math.max(0,this.health/this.maxHealth)),t>55&&this.rnd()<.35&&this.body.loseLimb()),this.health<=0&&this._die(i)}hitWeak(t){return this.weakBroken||!this.t.boss?!1:(this.weakHp===void 0&&(this.weakHp=150+this.maxHealth*.12),this.weakHp-=t,this.weakHp<=0?(this.weakBroken=!0,this.body&&this.body.breakWeak(),this.staggerT=Math.max(this.staggerT,1.8),this._onWeakBreak&&this._onWeakBreak(this),!0):!1)}_die(t,e=0){this.alive=!1;let i=e||(this.t.explodes?10:this.isBoss?8:this.t.elite?5:0);i>0&&this._onGib&&this._onGib(this,i),this.deadT=0,t&&this.knock.addScaledVector(t,4/this.t.scale),this.knock.y+=3,this._onDeath&&this._onDeath(this)}update(t,e,i){let n=this.group.position;if(!this.alive){this.deadT+=t,this.knock.y-=20*t,n.addScaledVector(this.knock,t),n.y<0&&(n.y=0,this.knock.y=0,this.knock.multiplyScalar(.85));let d=this.body?this.body.deathPose:0,v=d===1?-Math.PI/2:d===2?Math.PI/3:Math.PI/2;if(this.group.rotation.x+=(v-this.group.rotation.x)*Math.min(1,t*5),this.group.rotation.z+=t*(d===2?4.5:1.5)*(d===1?-1:1),this.deadT>.8){let y=Math.max(0,1-(this.deadT-.8)/1.8);for(let x of this._mats)x.transparent=!0,x.opacity=y,x.depthWrite=y>.6}this.deadT>2.6&&(this.removeMe=!0);return}if(this.hitFlash>0&&(this.hitFlash-=t,this.hitFlash<=0))for(let d of this._mats)d.emissive&&(d.emissiveIntensity=0);if(this._cueT>0&&(this._cueT-=t,this._cueT<=0&&this.body&&this.body.alertCue&&(this.body.alertCue.visible=!1)),this.effects){let d=!1;for(let v in this.effects)this.effects[v]<=0||(this.effects[v]-=t,v==="burn"?(this.health-=11*t,d=!0):v==="bleed"&&(this.health-=7*t));if(d){this._fxT=(this._fxT||0)-t,this._fxT<=0&&i.particles&&(this._fxT=.08,i.particles.impact(this.group.position.clone().setY(1.1*(this.t.scale||1)),1,[1,.5,.15]));for(let v of this._mats)v.emissive&&(v.emissive.setRGB(1,.35,.1),v.emissiveIntensity=.8)}if(this.health<=0){this._die(null);return}if(this.t.charge&&o<2.4&&this.grabCool<=0&&e.grabLock===void 0&&(this.grabCool=8,this.grabbing=e,e.grabLock={t:1.6,e:this,power:this.t.dmg*.5},this._onGrab&&this._onGrab(this)),this.effects.shock>0){this.group.rotation.z=Math.sin(performance.now()/35)*.16,this.arms[0].rotation.x=Math.sin(performance.now()/40)*.7,this.arms[1].rotation.x=-Math.sin(performance.now()/40)*.7,i.particles&&Math.random()<t*10&&i.particles.impact(this.group.position.clone().setY(1.2),1,[.6,.85,1]);return}}if(this.staggerT>0){this.staggerT-=t,this.group.rotation.z=Math.sin(performance.now()/40)*.12;return}if(this.group.rotation.z=0,this.t.explodes&&this.hitFlash<=0){let d=1-this.health/this.maxHealth,v=.5+.5*Math.sin(performance.now()/90);for(let y of this._mats)y.emissive&&(y.emissive.setRGB(1,.32,.08),y.emissiveIntensity=.15+d*1.7*v)}if(this.arrested){if(this.arrestT=(this.arrestT||0)+t,this.arrestT>.8){let d=Math.max(0,1-(this.arrestT-.8)/.7);for(let v of this._mats)v.transparent=!0,v.opacity=d,v.depthWrite=d>.6}this.arrestT>1.5&&(this.removeMe=!0);return}if(this.surrendered){this.arms[0].rotation.x=-2.3,this.arms[1].rotation.x=-2.3,this.group.rotation.y+=t*.8;return}this.knock.lengthSq()>.01&&(n.addScaledVector(this.knock,t),this.knock.multiplyScalar(1-Math.min(1,8*t)),this.knock.lengthSq()<.01&&this.knock.set(0,0,0));let s=this._toP.set(e.pos.x-n.x,0,e.pos.z-n.z),o=s.length(),a=this.passive?"wander":this.t.behavior,l=this.t.sightRange??(this.t.ranged?60:44);if(this._losTick-=t,this._losTick<=0&&(this._losTick=.22+Math.random()*.12,this._canSee=e.alive&&o<l&&this._hasLOS(e)),this._canSee?(this.losT=0,this.lastKnown.set(e.pos.x,0,e.pos.z),this.alert!=="hunting"&&this.alert!=="suspicious"&&(this._spot(),i.onSound&&i.onSound(this,"spot")),this.alert="hunting",this.alertT=0):(this.losT+=t,this.alert==="hunting"&&(this.alertT+=t,this.alertT>3.5&&(this.alert="suspicious",this.alertT=0))),this.isBoss){let d=this.health/this.maxHealth;this.phase=d>.66?1:d>.33?2:3}if(this.fearT=Math.max(0,this.fearT-t),!this.t.elite&&!this.passive&&!this.isBoss&&this.health/this.maxHealth<.35){let d=0;for(let v of i.enemies||[])if(v!==this&&v.alive&&v.group.position.distanceToSquared(n)<196&&(d++,d>0))break;d===0&&(this.fearT=2.5)}let c=null;if(e.alive&&this._inSafe(e.pos.x,e.pos.z)){let d=this.safeZones.find(v=>Math.hypot(e.pos.x-v.x,e.pos.z-v.z)<v.r);d&&(this.alert="hunting",this._pacing=d,this.speed=Math.max(this.speed,(this.t.speed||2)*.9))}if(!c&&this.t.thief&&e.alive)this.stolen<=0?(c=this._tgt.set(n.x-s.x*.4,0,n.z-s.z*.4),o<2.4&&(this.stolen=60+Math.floor(Math.random()*80),this.fleeing=!0,i.onSteal&&i.onSteal(this.stolen,this),this._onSteal&&this._onSteal(this,this.stolen))):(c=this._tgt.set(n.x+s.x*3,0,n.z+s.z*3),this.speed=(this.t.speed||4)*1.25,o>58&&(this.stolen=0,this.removeMe=!0));else if(!c&&this.passive)c=null;else if(!c&&this.fearT>0&&e.alive)c=this._tgt.set(n.x-s.x*2,0,n.z-s.z*2);else if(!c&&this.alert==="hunting"&&e.alive&&this.t.ranged&&o<this.t.range*.45)c=this._tgt.set(n.x-s.x*1.6+s.z*.5*this.flankSide,0,n.z-s.z*1.6-s.x*.5*this.flankSide);else if(!c&&this.alert==="hunting"&&e.alive)if(this.flank){let d=o||1,v=-s.z/d,y=s.x/d,x=this.flankSide*3.4;c=this._tgt.set(e.pos.x+v*x,0,e.pos.z+y*x)}else c=this._tgt.set(e.pos.x,0,e.pos.z);else this.alert==="suspicious"?Math.hypot(this.lastKnown.x-n.x,this.lastKnown.z-n.z)<2.5?(this.alertT+=t,this.alertT>3&&(this.alert="idle")):(c=this.lastKnown.clone(),this.alertT=0):a==="flee"&&e.alive&&o<34&&this.alert!=="idle"&&(c=this._tgt.set(n.x-s.x,0,n.z-s.z));if(this._pacing){let d=this._pacing,v=this.speed*(this.fearT>0?1.35:1),y=n.x-d.x,x=n.z-d.z,R=Math.hypot(y,x)||.001,A=d.r+1.1,C=y/R,k=x/R,M=-k*(this.flankSide||1),E=C*(this.flankSide||1),U=(A-R)*Math.min(1,t*3);n.x+=M*v*t+C*U,n.z+=E*v*t+k*U,this.facing=Math.atan2(M,E),this.moving=!0,this._pacing=null;return}if(c){let d=c.clone().sub(n);if(d.y=0,d.lengthSq()>.01){d.normalize(),d.x+=this.bias.x,d.z+=this.bias.z,d.normalize();let v=(this.body&&this.body.crawling?this.speed*.5:this.speed)*(this.isBoss?1+(this.phase-1)*.16:1)*(this.fearT>0?1.35:1);this._steer(d,0,0,n,t,v)}}else{this.wanderT+=t;let d=(this._wanderV||(this._wanderV=new w)).set(this.wander.x-n.x,0,this.wander.z-n.z);d.length()<1.5||this.wanderT>6?this._pickWander():(d.normalize(),this._steer(d,0,0,n,t,this.speed*.5))}if(this._pacing=null,this.group.rotation.y=this.facing,this.body&&this.body.weakCore&&!this.weakBroken){let d=1+Math.sin(performance.now()/260)*.14;this.body.weakCore.scale.setScalar(.55*d),this.body.weakHalo.scale.setScalar(.95*d),this.body.weakHalo.material.opacity=.16+.16*d}if(this.leapCool=Math.max(0,this.leapCool-t),this.chargeCool=Math.max(0,this.chargeCool-t),this.leaps&&this.alert==="hunting"&&this.hopT<=0&&this.leapCool<=0&&o>2.2&&o<8.5&&(this.leapCool=3.6,this.hopT=.55,this.hopDur=.55,this.hopDir.copy(s).normalize(),i.onSound&&i.onSound(this,"groan")),this.charger&&this.alert==="hunting"&&this.chargeT<=0&&this.chargeCool<=0&&o>5&&o<17&&(this.chargeCool=7,this.chargeT=.9,this.chargeDir.copy(s).normalize()),this.chargeT>0){this.chargeT-=t;let d=n.x+this.chargeDir.x*this.speed*2.6*t,v=n.z+this.chargeDir.z*this.speed*2.6*t;this._blocked(d,n.z)||(n.x=d),this._blocked(n.x,v)||(n.z=v)}if(this.hopT>0){this.hopT-=t;let d=1-this.hopT/this.hopDur;this.group.position.y=Math.sin(d*Math.PI)*1.5;let v=n.x+this.hopDir.x*this.speed*2.2*t,y=n.z+this.hopDir.z*this.speed*2.2*t;this._blocked(v,n.z)||(n.x=v),this._blocked(n.x,y)||(n.z=y),this.hopT<=0&&(this.group.position.y=0)}if(this.cohesionT-=t,a==="chase"&&i.enemies&&this.cohesionT<=0){this.cohesionT=.5;let d=0,v=0,y=0,x=0,R=0,A=0;for(let C of i.enemies){if(C===this||!C.alive)continue;if(++A>10)break;let k=C.group.position.x-n.x,M=C.group.position.z-n.z,E=k*k+M*M;E<150&&y<6&&(d+=k,v+=M,y++);let U=(this.radius+C.radius)*1.25;if(E>.02&&E<U*U){let F=Math.sqrt(E),K=(1-F/U)*2.4;x-=k/F*K,R-=M/F*K}}y?this.bias.set(d/y,0,v/y).normalize().multiplyScalar(.3):this.bias.set(0,0,0),this.bias.x+=x,this.bias.z+=R,this.bias.lengthSq()>1&&this.bias.normalize()}let u=this.body&&this.body.crawling,f=this.body?this.body.walkStyle:0,p=this.speed*(u?1.2:f===2?3:2.4),g=u?.7:f===1?.32:.45,_=Math.sin(performance.now()/1e3*p)*g;u?(this.arms[0].rotation.x=-_,this.arms[1].rotation.x=_):f===1?(this.legs[0].rotation.x=_*1.5,this.legs[1].rotation.x=_*.3,this.arms[0].rotation.x=-_*.6,this.arms[1].rotation.x=_*.6):(this.legs[0].rotation.x=_,this.legs[1].rotation.x=-_,this.arms[0].rotation.x=-_*.7,this.arms[1].rotation.x=_*.7);let m=this._inSafe(e.pos.x,e.pos.z);if(this.attackCool-=t,this.windup>0&&(this.windup-=t,this.windup<=0&&e.alive&&!m&&o<2.2+this.radius)){e.damage(this.attackDamage*fo);let d=s.clone().normalize().multiplyScalar(-2.5);e.addImpulse(new w(d.x,0,d.z)),i.onMelee&&i.onMelee(this)}if(this.slamCool=Math.max(0,this.slamCool-t),this.isBoss&&this.phase>=2&&this.slamCool<=0&&e.alive&&!m&&o<9&&(this.slamCool=this.phase>=3?4.5:7,i.particles&&i.particles.explosion(this.group.position.clone(),40),this.audio&&this.audio.explosion(),e.addShake(1),o<9)){e.damage(this.attackDamage*.6*fo);let d=s.clone().normalize().multiplyScalar(-5);e.addImpulse(new w(d.x,0,d.z)),i.onMelee&&i.onMelee(this)}e.alive&&!m&&!this.passive&&this.attackCool<=0&&(this.t.summoner?(this.attackCool=4.5,i.onSummon&&i.onSummon(this)):this.t.ranged&&o<this.t.range?(this.attackCool=(1.6+Math.random())/(this.isBoss?1+(this.phase-1)*.4:1),Math.random()<.55&&(i.onProjectile?i.onProjectile(this):(e.damage(this.attackDamage*fo),i.onRanged&&i.onRanged(this,e)))):o<1.9+this.radius&&this.windup<=0&&(this.windup=.38,i.onSound&&this.t.summoner&&i.onSound(this,"scream"),this.attackCool=(1+Math.random()*.5)/(this.isBoss?1+(this.phase-1)*.4:1))),this.windup>0&&(this.arms[0].rotation.x=-1.9,this.arms[1].rotation.x=-1.9)}_inSafe(t,e){for(let i of this.safeZones){let n=t-i.x,s=e-i.z;if(n*n+s*s<i.r*i.r)return!0}return!1}_steer(t,e,i,n,s,o){for(let l=0;l<=4;l++)for(let h of l===0?[1]:[1,-1]){let c=.5*l*h,u=Math.cos(c),f=Math.sin(c),p=t.x*u-t.z*f,g=t.x*f+t.z*u,_=n.x+p*o*s,m=n.z+g*o*s;if(!this._blocked(_,m))return this._steerSide=h,n.x=_,n.z=m,this.facing=Math.atan2(p,g),!0}return n.x+=t.x*o*s,n.z+=t.z*o*s,this.facing=Math.atan2(t.x,t.z),!1}_blocked(t,e,i){if(this._inSafe(t,e))return!0;for(let n of this.world.collidersNear(t,e,1.2))if(t>n.minX-this.radius&&t<n.maxX+this.radius&&e>n.minZ-this.radius&&e<n.maxZ+this.radius&&n.height>1.2)return!0;return!1}},po=class{constructor(t,e,i={}){this.scene=t,this.world=e,this.enemies=[],this.pool=i.pool??["walker","runner"],this.maxAlive=i.maxAlive??14,this.difficulty=1,this.autoSpawn=i.autoSpawn??!0,this.spawnInterval=i.spawnInterval??2.2,this.safeZones=i.safeZones??[],this.timer=0,this.onSpawn=null,this.onDeath=null,this.onGib=null,this.onWeakBreak=null,this.onSummon=null,this._alive=[],this._hittables=[],this._recycle=[],this.recycleMax=i.recycleMax??24}refreshLists(){let t=this._alive||(this._alive=[]);t.length=0;let e=this._hittables||(this._hittables=[]);e.length=0;for(let i of this.enemies)i.alive&&(t.push(i),e.push(i.group));return t}get alive(){return this._alive||this.refreshLists()}makeNoise(t,e=40){let i=0;for(let n of this.enemies)n.hear(t,e)&&i++;return i}spawnHorde(t,e,i){let n=[];for(let s=0;s<e;s++){let o=s/e*Math.PI*2,a=2+Math.random()*5,l=new w(t.x+Math.cos(o)*a,0,t.z+Math.sin(o)*a),h=this.spawnAt(this.pool[Math.random()*this.pool.length|0],l,i);h&&n.push(h)}return n}spawnAt(t,e,i){let n=null;for(let s=0;s<this._recycle.length;s++)if(this._recycle[s].type===t){n=this._recycle.splice(s,1)[0];break}return n?n.reset(t,e,i??this.difficulty):n=new Ol(t,e,this.world,i??this.difficulty),n.safeZones=this.safeZones,this.scene.add(n.group),this.enemies.push(n),this.onSpawn&&this.onSpawn(n),n}spawnAround(t,e=26,i=44){let n=this.pool[Math.random()*this.pool.length|0],s=this.world.spawnAround(t.pos,e,i);for(let o=0;o<6;o++){let a=!1;for(let l of this.safeZones){let h=s.x-l.x,c=s.z-l.z;if(h*h+c*c<(l.r+4)*(l.r+4)){a=!0;break}}if(!a)break;s=this.world.spawnAround(t.pos,e,i)}return this.spawnAt(n,s)}update(t,e,i){this.onSummon&&(i.onSummon=this.onSummon);for(let l of this.enemies)l._onDeath=this.onDeath,l._onGib=this.onGib,l._onWeakBreak=this.onWeakBreak,l.update(t,e,i);for(let l=this.enemies.length-1;l>=0;l--){let h=this.enemies[l];h.removeMe&&(this.enemies.splice(l,1),this._recycle.length<this.recycleMax?(h.group.visible=!1,this._recycle.push(h)):h.dispose())}if(!this.autoSpawn)return;this.timer-=t;let n=this.enemies.filter(l=>l.alive).length,s=Math.max(1,this.difficulty),o=Math.min(38,Math.round(this.maxAlive+(s-1)*2.2)),a=Math.max(.55,this.spawnInterval/(1+(s-1)*.16));if(this.timer<=0&&n<o){this.timer=a;let l=s>=3?1+Math.floor((s-2)/3):1;for(let h=0;h<l&&n+h<o;h++)this.spawnAround(e)}}getHittables(){return this._hittables||(this.refreshLists(),this._hittables)}clear(){for(let t of this.enemies)t.dispose();for(let t of this._recycle)t.dispose();this.enemies.length=0,this._recycle.length=0}};var Yi={box:new xt(1,1,1),cyl:new ue(1,1,1,8),torus:new $i(1,.2,6,14),ico:new qi(1,0)},Bl={ammo:{color:"#38f2c8",size:.55,label:"AMMO"},health:{color:"#ff3d81",size:.55,label:"HEALTH"},armor:{color:"#4aa8ff",size:.55,label:"ARMOR"},coin:{color:"#ffd23a",size:.4,label:"COIN"},magnet:{color:"#c05aff",size:.5,label:"MAGNET"},upgrade:{color:"#ffe066",size:.6,label:"UPGRADE"}};function m_(r){let t=Bl[r].color,e=new Tt({color:t,emissive:t,emissiveIntensity:.6,roughness:.35,metalness:.5}),i=new Kt;if(r==="coin"){let s=new V(Yi.cyl,e);s.rotation.x=Math.PI/2,s.scale.set(.35,.08,.35),i.add(s)}else if(r==="health"){let s=new V(Yi.box,e);s.scale.set(.5,.16,.16),i.add(s);let o=new V(Yi.box,e);o.scale.set(.16,.5,.16),i.add(o)}else if(r==="magnet"){let s=new V(Yi.torus,e);s.scale.set(.3,.3,.3),s.rotation.x=Math.PI/2,i.add(s);let o=new V(Yi.torus,e);o.scale.set(.3,.3,.3),o.position.y=-.3,i.add(o)}else if(r==="upgrade"){let s=new V(Yi.ico,e);s.scale.setScalar(.35),i.add(s)}else{let s=new V(Yi.box,e);s.scale.setScalar(.5),i.add(s)}let n=new V(Yi.torus,new Ot({color:t,transparent:!0,opacity:.5}));return n.rotation.x=Math.PI/2,n.scale.setScalar(Bl[r].size*1.5),n.position.y=-.45,i.add(n),i.traverse(s=>{s.castShadow=!1}),i}var mo=class{constructor(t,e){this.scene=t,this.audio=e,this.items=[],this.onPickup=null}spawn(t,e,i=1){if(!Bl[t])return;let n=m_(t);n.position.set(e.x,Math.max(.9,e.y||.9),e.z),this.scene.add(n),this.items.push({type:t,amount:i,mesh:n,home:n.position.clone(),vy:1.5+Math.random(),life:26,active:!0})}dropFrom(t){let e=t.group.position.clone(),i=t.t,n=Math.min(6,Math.max(1,Math.round(i.coins/5)));for(let s=0;s<n;s++)this.spawn("coin",e.clone().add(new w((Math.random()-.5)*1.5,0,(Math.random()-.5)*1.5)));Math.random()<.5&&this.spawn("ammo",e.clone().add(new w((Math.random()-.5)*1.2,0,(Math.random()-.5)*1.2))),Math.random()<.28&&this.spawn("health",e.clone().add(new w((Math.random()-.5)*1.2,0,(Math.random()-.5)*1.2))),i.elite&&Math.random()<.55&&this.spawn("armor",e.clone().add(new w((Math.random()-.5)*1.2,0,(Math.random()-.5)*1.2))),Math.random()<.04&&this.spawn("magnet",e.clone()),i.elite&&Math.random()<.22&&this.spawn("upgrade",e.clone())}update(t,e,i,n){let s=i>0,o=e.pos.x,a=e.pos.z,l=e.pos.y+1;for(let h=this.items.length-1;h>=0;h--){let c=this.items[h];if(!c.active)continue;c.life-=t,c.mesh.rotation.y+=t*1.6,c.mesh.position.y=c.home.y+Math.sin(n*2+c.home.x)*.16;let u=o-c.mesh.position.x,f=a-c.mesh.position.z,p=l-c.mesh.position.y,g=Math.hypot(u,p,f);if((s&&g<12||c.type==="coin"&&g<(this.baseMagnet||2.6))&&g>.1){let _=9*t;c.mesh.position.x+=u/g*_,c.mesh.position.y+=p/g*_,c.mesh.position.z+=f/g*_,c.home.copy(c.mesh.position)}if(g<1.5){c.active=!1,this.scene.remove(c.mesh),this.items.splice(h,1),this.audio&&(c.type==="coin"?this.audio.coin():this.audio.pickup()),this.onPickup&&this.onPickup(c.type,c.amount,c.mesh.position);continue}c.life<=0&&(c.active=!1,this.scene.remove(c.mesh),this.items.splice(h,1))}}clear(){for(let t of this.items)this.scene.remove(t.mesh);this.items.length=0}};var go=[{id:"lifesteal",name:"Vampirism",desc:"+5 HP per kill",cost:2,max:3},{id:"thorns",name:"Retribution",desc:"reflect 18% of melee damage",cost:2,max:3},{id:"reload",name:"Quick Hands",desc:"-12% reload time",cost:2,max:3},{id:"magnet",name:"Scavenger",desc:"+2.5m pickup radius",cost:1,max:3},{id:"plating",name:"Plating",desc:"+2% damage absorbed",cost:2,max:3},{id:"learner",name:"Fast Learner",desc:"+12% XP gained",cost:2,max:3}],Ge={max:6,perArmor:12,perAbsorb:.02,base:180,growth:1.42},ni=[{name:"No Armour",max:0,absorb:0,price:0},{name:"Light Vest",max:60,absorb:.4,price:250},{name:"Medium Vest",max:110,absorb:.55,price:700},{name:"Heavy Plate",max:170,absorb:.68,price:1500}],Fl=[{id:"ammo",name:"Ammo Crate",scrap:12,note:"+90 reserve ammo",give:r=>{r.pendingAmmo=(r.pendingAmmo||0)+90}},{id:"medkit",name:"Field Medkit",scrap:25,note:"instant full heal",give:r=>{r.pendingHeal=1}},{id:"grenade",name:"Frag Grenade",scrap:20,note:"+2 grenades",give:r=>{r.pendingThrow=(r.pendingThrow||0)+2}},{id:"molotov",name:"Molotov",scrap:20,note:"+2 molotovs",give:r=>{r.pendingThrow=(r.pendingThrow||0)+2}},{id:"plate",name:"Armour Plate",scrap:60,note:"+1 armour tier",give:r=>{r.armorTier=Math.min(3,r.armorTier+1)}},{id:"coin",name:"Sell Scrap",scrap:30,coins:120,note:"+120 coins"}],_o=[{id:"assault",name:"Assault Kit",price:1200,note:"+22% reload, +10% weapon damage",mods:{reload:.22,damage:.1}},{id:"juggernaut",name:"Juggernaut Rig",price:1600,note:"+45 armour, -12% speed",mods:{armor:45,speed:-.12}},{id:"scout",name:"Scout Harness",price:1e3,note:"+18% speed, -15% health",mods:{speed:.18,health:-.15}},{id:"ghost",name:"Ghost Suit",price:1400,note:"40% quieter, heat decays faster",mods:{noise:-.4,heat:.35}}],yo=class{constructor(t={}){this.level=1,this.xp=0,this.coins=t.coins??0,this.points=0,this.upgrades={vitality:0,speed:0,stamina:0,carry:0},this.armorTier=0,this.armorLevel=0,this.weaponUp={},this.perks={},this.attachments={},this.attachOwned={},this.mastery={},this.scrap=0,this.ngPlus=0,this.stash={},this.installs={},this.insurance=0,this.setId=null,this.setsOwned={},this.prestige=0,this.unlocked=new Set(["knife","pistol"]),this.onLevelUp=null,this.onChange=null,this.key=t.key??"ow-progress",this.weaponList=t.weaponList??Ls}xpToNext(){return Math.round(90*Math.pow(1.16,this.level-1))}addXp(t){this.xp+=t;let e=0;for(;this.xp>=this.xpToNext();)this.xp-=this.xpToNext(),this.level++,e++,this.points++,this._unlockForLevel();return e&&this.onLevelUp&&this.onLevelUp(this.level,e),this.onChange&&this.onChange(),e}_unlockForLevel(){for(let t of this.weaponList){let e=Pe[t];e&&e.unlock<=this.level&&!this.unlocked.has(t)&&this.unlocked.add(t)}}addCoins(t){this.coins+=Math.round(t*this.coinMul),this.onChange&&this.onChange()}spend(t){return this.coins<t?!1:(this.coins-=t,this.onChange&&this.onChange(),!0)}applyUpgrade(t){return this.points<=0||!(t in this.upgrades)?!1:(this.upgrades[t]++,this.points--,this.onChange&&this.onChange(),!0)}get maxHealth(){return Math.round((100+this.upgrades.vitality*25)*(1+(this.setMods().health||0)))}get runSpeed(){return(10.5+this.upgrades.speed*.7)*(1+(this.setMods().speed||0))}get walkSpeed(){return 6+this.upgrades.speed*.35}get maxStamina(){return 100+this.upgrades.stamina*20}get carry(){return 6+this.upgrades.carry*3}perk(t){return this.perks[t]||0}perkCost(t){let e=go.find(i=>i.id===t);return e?e.cost:0}buyPerk(t){let e=go.find(i=>i.id===t);return!e||this.perk(t)>=e.max||this.points<e.cost?!1:(this.points-=e.cost,this.perks[t]=this.perk(t)+1,this.onChange&&this.onChange(),!0)}setMods(){let t=_o.find(e=>e.id===this.setId);return t&&t.mods||{}}ownsSet(t){return!!this.setsOwned[t]}buySet(t){let e=_o.find(i=>i.id===t);if(!e)return!1;if(!this.ownsSet(t)){if(this.coins<e.price)return!1;this.coins-=e.price,this.setsOwned[t]=!0}return this.setId=this.setId===t?null:t,this.save(),this.onChange&&this.onChange(),!0}get xpMul(){return(1+this.prestige*.08)*(1+this.perk("learner")*.12)}get coinMul(){return 1+this.prestige*.1}canPrestige(){return this.level>=20}doPrestige(){return this.canPrestige()?(this.prestige++,this.level=1,this.xp=0,this.points=0,this.coins=0,this.upgrades={vitality:0,speed:0,stamina:0,carry:0},this.armorTier=0,this.armorLevel=0,this.weaponUp={},this.attachments={},this.unlocked=new Set(["knife","pistol"]),this.onChange&&this.onChange(),!0):!1}get maxArmor(){return(ni[this.armorTier]?.max??0)+this.armorLevel*Ge.perArmor+(this.setMods().armor||0)}get armorAbsorb(){return Math.min(.85,(ni[this.armorTier]?.absorb??.4)+this.armorLevel*Ge.perAbsorb+this.perk("plating")*.02)}get armourName(){return(ni[this.armorTier]?.name??"No Armour")+(this.armorLevel?` +${this.armorLevel}`:"")}weaponUpLevel(t,e){let i=this.weaponUp[t];return i&&i[e]||0}weaponUpCost(t,e){let i=Pe[t];return i?Math.round((50+i.price*.05)*Math.pow(1.4,this.weaponUpLevel(t,e))):0}upgradeWeapon(t,e){let i=Pe[t];if(!i)return!1;let n=Ri.find(o=>o.key===e);if(!n||i.mag===1/0&&e==="mag"||this.weaponUpLevel(t,e)>=n.max)return!1;let s=this.weaponUpCost(t,e);return this.coins<s?!1:(this.coins-=s,this.weaponUp[t]||(this.weaponUp[t]={}),this.weaponUp[t][e]=this.weaponUpLevel(t,e)+1,this.onChange&&this.onChange(),!0)}statsFor(t){let e=this.setMods();return gn(Pe[t],this.weaponUp[t],this.perk("reload")+(e.reload||0),this.attachments[t],this.masteryBonus(t)+(e.damage||0))}masteryTier(t){return Math.min(5,Math.floor((this.mastery[t]||0)/40))}masteryBonus(t){return this.masteryTier(t)*.03}addMastery(t,e=1){return this.mastery[t]=(this.mastery[t]||0)+e,this.masteryTier(t)}equippedAttach(t,e){let i=this.attachments[t];return i&&i[e]||"none"}ownsAttach(t,e,i){if(i==="none")return!0;let n=this.attachOwned[t];return!!(n&&n[e]&&n[e][i])}attachPrice(t,e,i){let n=Ps[e];if(!n)return 0;let s=n.find(o=>o.id===i);return s?s.price:0}buyAttach(t,e,i){if(this.ownsAttach(t,e,i))return this.equipAttach(t,e,i),!0;let n=this.attachPrice(t,e,i);return this.coins<n?!1:(this.coins-=n,this.attachOwned[t]||(this.attachOwned[t]={}),this.attachOwned[t][e]||(this.attachOwned[t][e]={}),this.attachOwned[t][e][i]=!0,this.equipAttach(t,e,i),!0)}equipAttach(t,e,i){return this.ownsAttach(t,e,i)?(this.attachments[t]||(this.attachments[t]={}),this.attachments[t][e]=i,this.onChange&&this.onChange(),!0):!1}armorUpCost(){return Math.round(Ge.base*Math.pow(Ge.growth,this.armorLevel))}upgradeArmor(){if(this.armorTier<1||this.armorLevel>=Ge.max)return!1;let t=this.armorUpCost();return this.coins<t?!1:(this.coins-=t,this.armorLevel++,this.onChange&&this.onChange(),!0)}setArmourTier(t){return t<=this.armorTier||t>=ni.length?!1:(this.armorTier=t,this.onChange&&this.onChange(),!0)}addScrap(t){this.scrap=Math.max(0,this.scrap+t),this.onChange&&this.onChange()}get ngMul(){return 1+this.ngPlus*.35}get ngReward(){return 1+this.ngPlus*.5}canCraft(t){return this.scrap>=t.scrap}craft(t){let e=Fl.find(i=>i.id===t);return!e||!this.canCraft(e)?!1:(this.scrap-=e.scrap,e.coins&&this.addCoins(e.coins),e.give&&e.give(this),this.onChange&&this.onChange(),!0)}slotKey(t){return this.key+":slot"+t}slotInfo(t){try{let e=JSON.parse(localStorage.getItem(this.slotKey(t))||"null");return e?{level:e.level,coins:e.coins,prestige:e.prestige||0,ng:e.ngPlus||0,at:e._at}:null}catch{return null}}saveSlot(t){try{let e=this._blob();return e._at=Date.now(),localStorage.setItem(this.slotKey(t),JSON.stringify(e)),!0}catch{return!1}}loadSlot(t){try{let e=JSON.parse(localStorage.getItem(this.slotKey(t))||"null");return e?(this._apply(e),this.save(),this.onChange&&this.onChange(),!0):!1}catch{return!1}}deleteSlot(t){try{return localStorage.removeItem(this.slotKey(t)),!0}catch{return!1}}canAscend(){return this.level>=20}ascend(){return this.canAscend()?(this.ngPlus++,this.level=1,this.xp=0,this.points=0,this.coins=Math.floor(this.coins*.25),this.prestige++,this.save(),this.onChange&&this.onChange(),!0):!1}_blob(){return{level:this.level,xp:this.xp,coins:this.coins,points:this.points,upgrades:this.upgrades,armorTier:this.armorTier,armorLevel:this.armorLevel,weaponUp:this.weaponUp,perks:this.perks,prestige:this.prestige,attachments:this.attachments,attachOwned:this.attachOwned,mastery:this.mastery,scrap:this.scrap,ngPlus:this.ngPlus,stash:this.stash,installs:this.installs,insurance:this.insurance,setId:this.setId,setsOwned:this.setsOwned,unlocked:[...this.unlocked]}}_apply(t){this.level=t.level??1,this.xp=t.xp??0,this.coins=t.coins??0,this.points=t.points??0,this.upgrades=t.upgrades??this.upgrades,this.armorTier=t.armorTier??0,this.armorLevel=t.armorLevel??0,this.weaponUp=t.weaponUp??{},this.perks=t.perks??{},this.attachments=t.attachments??{},this.attachOwned=t.attachOwned??{},this.mastery=t.mastery??{},this.prestige=t.prestige??0,this.scrap=t.scrap??0,this.ngPlus=t.ngPlus??0,this.stash=t.stash??{},this.installs=t.installs??{},this.insurance=t.insurance??0,this.setId=t.setId??null,this.setsOwned=t.setsOwned??{},t.unlocked&&(this.unlocked=new Set(t.unlocked))}save(){try{localStorage.setItem(this.key,JSON.stringify(this._blob()))}catch{}}load(){try{let t=JSON.parse(localStorage.getItem(this.key)||"null");return t?(this._apply(t),!0):!1}catch{return!1}}reset(){this.level=1,this.xp=0,this.coins=0,this.points=0,this.upgrades={vitality:0,speed:0,stamina:0,carry:0},this.armorTier=0,this.armorLevel=0,this.weaponUp={},this.scrap=0,this.ngPlus=0,this.unlocked=new Set(["knife","pistol"])}};var vo=class{constructor(t,e,i){this.scene=t,this.world=e,this.audio=i,this.active=!1,this.group=null,this.timer=45,this.cooldown=0,this.onBuy=null,this.open=!1,this._buildUI()}_buildUI(){let t=document.createElement("div");t.id="shop",t.className="hidden",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Merchant"),t.innerHTML=`<div class="shop-panel">
      <div class="shop-head"><span id="shop-title">MERCHANT</span>
        <span id="shop-coins">\u25C8 0</span></div>
      <div id="shop-items" class="shop-items"></div>
      <div class="shop-foot"><button id="shop-close">CLOSE (E)</button></div>
    </div>`,document.body.appendChild(t),this.el=t,this.itemsEl=t.querySelector("#shop-items"),this.coinsEl=t.querySelector("#shop-coins"),t.querySelector("#shop-close").addEventListener("click",()=>this.close())}_buildStall(){let t=new Kt,e=new Tt({color:"#6a4a2a",roughness:.9}),i=new Tt({color:"#c8442f",roughness:.8}),n=new V(new xt(4,.2,2.4),i);n.position.y=2.6,n.castShadow=!0,t.add(n);for(let[l,h]of[[-1.8,-1],[1.8,-1],[-1.8,1],[1.8,1]]){let c=new V(new xt(.15,2.6,.15),e);c.position.set(l,1.3,h),c.castShadow=!0,t.add(c)}let s=new V(new xt(4,.9,.6),e);s.position.set(0,.45,1),s.castShadow=!0,t.add(s);let o=new V(new xt(2.4,.6,.1),new Tt({color:"#ffd23a",emissive:"#ffd23a",emissiveIntensity:.7}));o.position.set(0,3.2,0),t.add(o);let a=new Ve("#ffd98a",1.4,12);return a.position.set(0,3,0),t.add(a),t}spawnNear(t){let e=this.world.spawnAround(t.pos,16,26);this.group=this._buildStall(),this.group.position.copy(e),this.scene.add(this.group),this.active=!0,this.pos=e,this.audio&&this.audio.buy()}despawn(){this.group&&this.scene.remove(this.group),this.group=null,this.active=!1,this.close()}update(t,e,i,n,s){if(!this.active){this.cooldown-=t,this.cooldown<=0&&(this.spawnNear(e),this.cooldown=this.timer);return}let a=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z)<3.2;s&&s.setUseVisible(a&&!this.open,"PRESS "+(s.keyName?s.keyName("use"):"F")+" TO SHOP"),a&&n&&n.once("interact")&&(this.open?this.close():this.show(i)),this.open&&!a&&this.close()}show(t){this.open=!0,this.el.classList.remove("hidden"),this._render(t)}close(){this.open=!1,this.el.classList.add("hidden")}_dailyDeals(t){let e=t.filter(o=>o.price>0&&o.kind!=="craft"&&o.kind!=="set"&&!o.deal);if(!e.length)return[];let i=0,n=new Date().toISOString().slice(0,10);for(let o=0;o<n.length;o++)i=i*31+n.charCodeAt(o)>>>0;let s=[];for(let o=0;o<3&&e.length;o++)i=i*1103515245+12345>>>0,s.push(e.splice(i%e.length,1)[0]);return s.map(o=>Object.assign({},o,{key:"deal_"+o.key,price:Math.max(1,Math.round(o.price*.75)),sub:(o.sub||"")+"   \u2014 25% OFF TODAY"}))}_render(t){let e=this.priceMod||1;this.coinsEl.textContent="\u25C8 "+t.coins+"   \u2699 "+(t.scrap||0)+" scrap"+(e<.999?"   ("+Math.round((1-e)*100)+"% rep discount)":"");let i=[];for(let a of["smg","shotgun","rifle","sniper"]){let l=Pe[a];t.unlocked.has(a)||i.push({key:"w_"+a,label:l.name,sub:`${Ai[l.rarity].name} weapon \u2022 unlock Lv${l.unlock}`,price:l.price,kind:"weapon",rarity:l.rarity})}let n=this.arsenal&&this.arsenal.current,s=n?n.def:null;if(n){let a=t.statsFor(s.id);for(let l of Ri){if(s.mag===1/0&&l.key==="mag")continue;let h=t.weaponUpLevel(s.id,l.key);if(h>=l.max){i.push({key:"wmax_"+l.key,kind:"info",label:l.name+" \u2014 MAX",sub:s.name,price:0});continue}let c=gn(s,Object.assign({},t.weaponUp[s.id],{[l.key]:h+1})),u=t.weaponUpCost(s.id,l.key);i.push({key:"wu_"+l.key,kind:"wup",wid:s.id,track:l.key,selfPay:!0,label:`${l.name} Lv${h+1}`,sub:`${s.name} \u2022 ${co(l.key,a,c)}`,price:u,rarity:s.rarity,disabled:t.coins<u})}}if(n)for(let a of hu)for(let l of Ps[a.key]){if(l.id==="none")continue;let h=t.ownsAttach(s.id,a.key,l.id);if(t.equippedAttach(s.id,a.key)===l.id){i.push({key:"at_"+a.key+l.id,kind:"info",label:`${a.name}: ${l.name}`,sub:"equipped",price:0});continue}i.push({key:"at_"+a.key+l.id,kind:"attach",wid:s.id,slot:a.key,aid:l.id,selfPay:!0,label:`${a.name}: ${l.name}`,sub:l.note||s.name,price:h?0:l.price,rarity:s.rarity,disabled:!h&&t.coins<l.price})}for(let a of Fl){let l=t.scrap>=a.scrap;i.push({key:"cr_"+a.id,kind:"craft",rid:a.id,selfPay:!0,label:a.name,sub:a.note,price:a.scrap,cost:a.scrap,costKind:"scrap",disabled:!l})}if(t.armorTier>=1&&t.armorLevel<Ge.max){let a=t.armorUpCost();i.push({key:"aup",kind:"aup",selfPay:!0,label:`Armour Plating Lv${t.armorLevel+1}`,sub:`+${Ge.perArmor} armour \u2022 +${Math.round(Ge.perAbsorb*100)}% absorb`,price:a,disabled:t.coins<a})}i.push({key:"ammo",label:"Ammo Crate",sub:"refill all reserves",price:60,kind:"ammo"}),i.push({key:"health",label:"Medkit",sub:"restore 60 HP",price:50,kind:"health"}),i.push({key:"armor",label:"Armour Plate",sub:"top up +50 armour",price:90,kind:"armor"});for(let a=t.armorTier+1;a<ni.length;a++){let l=ni[a];i.push({key:"at"+a,label:l.name,sub:`${l.max} armour \u2022 ${Math.round(l.absorb*100)}% absorb`,price:l.price,kind:"armourTier",tier:a})}i.push({key:"magnet",label:"Loot Magnet",sub:"auto-collect 30s",price:70,kind:"magnet"}),i.push({key:"up_vitality",label:"Upgrade: Vitality",sub:"+25 max HP",price:250,kind:"up",stat:"vitality"}),i.push({key:"up_speed",label:"Upgrade: Speed",sub:"+0.7 run speed",price:250,kind:"up",stat:"speed"}),i.push({key:"up_stamina",label:"Upgrade: Stamina",sub:"+20 stamina",price:220,kind:"up",stat:"stamina"}),i.push({key:"up_carry",label:"Upgrade: Carry",sub:"+3 carry",price:200,kind:"up",stat:"carry"});for(let a of i)a.price&&a.kind!=="craft"&&(a.price=Math.max(1,Math.round(a.price*e)));let o=this._dailyDeals(i);o.length&&i.unshift(...o.map(a=>Object.assign({},a,{deal:!0})));for(let a of _o){let l=t.ownsSet(a.id),h=t.setId===a.id;i.push({key:"set_"+a.id,kind:"set",sid:a.id,selfPay:!0,label:a.name+(h?"  \u2713 worn":""),sub:a.note,price:l?0:a.price,disabled:!l&&t.coins<a.price})}this.itemsEl.innerHTML="";for(let a of i){let l=document.createElement("div"),h=a.costKind==="scrap",c=h?t.scrap||0:t.coins,u=h?"\u2699":"\u25C8",f=c<a.price?` \xB7 short ${a.price-c}`:"";if(l.className="shop-row"+(c<a.price?" dim":""),a.kind==="info"){l.innerHTML=`<div class="shop-info"><b style="color:#5f7f9a">${a.label}</b><span>${a.sub}</span></div>
          <span class="shop-max">MAX</span>`,this.itemsEl.appendChild(l);continue}l.innerHTML=`<div class="shop-info"><b style="color:${a.rarity?Ai[a.rarity].c:""}">${a.label}</b><span>${a.sub}${f}</span></div>
        <button class="shop-buy">${u} ${a.price}</button>`,l.querySelector(".shop-buy").addEventListener("click",()=>{if(c<a.price){this.audio&&this.audio.error();return}this.onBuy&&this.onBuy(a)&&(a.selfPay||t.spend(a.price),this.audio&&this.audio.buy(),this._render(t))}),this.itemsEl.appendChild(l)}}};var Hl=[{id:"bed",name:"Field Bed",price:600,note:"heal twice as fast in a safe zone"},{id:"stash",name:"Ammo Stash",price:800,note:"+50% reserve ammo on respawn"},{id:"turret",name:"Auto Turret",price:1500,note:"shoots anything hostile near the base"},{id:"forge",name:"Scrap Forge",price:1100,note:"passively accrues scrap over time"}],xo=class{constructor(t,e,i){this.scene=t,this.world=e,this.audio=i,this.installed={},this.turret=null,this.origin=new w,this._acc=0,this.forgeT=0}setOrigin(t){this.origin.copy(t)}has(t){return!!this.installed[t]}install(t,e){let i=Hl.find(n=>n.id===t);return!i||this.has(t)||e.coins<i.price?!1:(e.spend(i.price),this.installed[t]=!0,e.installs&&(e.installs[t]=!0),t==="turret"&&this._buildTurret(),this.audio&&this.audio.buy(),!0)}_buildTurret(){if(this.turret)return;let t=new Kt,e=new V(new ue(.5,.6,.7,8),new Tt({color:"#2b3342",roughness:.7,flatShading:!0}));e.position.y=.35,t.add(e);let i=new Kt;i.position.y=1;let n=new V(new xt(.6,.45,.7),new Tt({color:"#39424f",roughness:.6,metalness:.5,flatShading:!0}));i.add(n);let s=new V(new ue(.08,.08,1.1,6),new Tt({color:"#12161f",roughness:.5,metalness:.7}));s.rotation.x=Math.PI/2,s.position.z=-.75,i.add(s);let o=new V(new Ce(.09,8,6),new Ot({color:"#ff5a7a"}));o.position.set(0,.18,-.3),i.add(o),t.add(i),t.position.copy(this.origin),this.scene.add(t),this.turret={group:t,head:i,cool:0}}update(t,e,i={}){this.has("forge")&&i.progression&&(this.forgeT+=t,this.forgeT>=12&&(this.forgeT=0,i.progression.addScrap(1)));let n=this.turret;if(!n)return;let s=null,o=34;for(let h of e){if(!h.alive||h.passive)continue;let c=h.group.position.distanceTo(n.group.position);c<o&&(o=c,s=h)}if(!s){n.head.rotation.y+=t*.4;return}let l=Math.atan2(s.group.position.x-n.group.position.x,s.group.position.z-n.group.position.z)-n.head.rotation.y;if(l=Math.atan2(Math.sin(l),Math.cos(l)),n.head.rotation.y+=l*Math.min(1,t*6),n.cool-=t,n.cool<=0&&Math.abs(l)<.35){n.cool=.22;let h=22;if(s.damage(h,s.group.position.clone().setY(1.2),null),i.onDamage&&i.onDamage(s.group.position.clone().setY(1.2),h,"normal"),!s.alive&&i.onKill&&i.onKill(s),this.audio){let c=n.group.position;this.audio.at(()=>this.audio.shot("rifle"),c.x-(i.player?i.player.pos.x:0),c.z-(i.player?i.player.pos.z:0),55)}}}};var Ds=class{constructor(t,e,i={}){this.scene=t,this.audio=e,this.pos=new w(i.x??0,0,i.z??0),this.radius=i.radius??11,this.armory=i.armory??!1,this.title=i.title??"SAFE HOUSE",this.onBuy=null,this.zone={x:this.pos.x,z:this.pos.z,r:this.radius},this.open=!1,this._build(),this._buildUI()}_build(){let t=new Kt;t.position.copy(this.pos);let e=new Tt({color:"#6a6357",roughness:.95}),i=new Tt({color:"#8a7a58",roughness:1,flatShading:!0}),n=new Tt({color:"#2a3140",roughness:.6,metalness:.5}),s=new Tt({color:"#6a4a2a",roughness:.9}),o=new Tt({color:"#38f2c8",emissive:"#38f2c8",emissiveIntensity:.9,roughness:.4}),a=new Tt({color:"#2f7a4a",roughness:.85}),l=this.radius,h=new V(new ue(l-1,l-1,.3,30),e);h.position.y=.15,h.receiveShadow=!0,t.add(h);let c=new V(new $i(l,.16,6,56),new Ot({color:"#38f2c8",transparent:!0,opacity:.55}));c.rotation.x=Math.PI/2,c.position.y=.34,t.add(c),this.ring=c;let u=30;for(let x=0;x<u;x++){let R=x/u*Math.PI*2;if(Math.abs((R+Math.PI)%(Math.PI*2)-Math.PI)<.5)continue;let A=Math.cos(R)*(l-1.2),C=Math.sin(R)*(l-1.2),k=new V(new xt(1.5,.85,.9),i);k.position.set(A,.75,C),k.rotation.y=-R,k.castShadow=!0,t.add(k)}let f=new V(new xt(3.6,.12,4.2),a);f.position.set(-8,1.7,-8.5),f.rotation.z=.5,f.castShadow=!0,t.add(f);let p=f.clone();p.position.set(-5,1.7,-8.5),p.rotation.z=-.5,t.add(p);for(let[x,R]of[[-9.2,-7.6],[-3.8,-7.6],[-9.2,-9.4],[-3.8,-9.4]]){let A=new V(new xt(.14,1.8,.14),s);A.position.set(x,.9,R),A.castShadow=!0,t.add(A)}let g=new V(new xt(3,1,1),n);g.position.set(6.6,.8,-7.4),g.castShadow=!0,t.add(g);let _=new V(new xt(2.3,.8,.08),o);_.position.set(6.6,1.9,-7.4),_.rotation.x=-.25,t.add(_);let m=new Ve("#38f2c8",1.4,12);m.position.set(6.6,2.1,-7),t.add(m);let d=new V(new ue(.08,.08,8,6),n);d.position.set(0,4,-11.6),d.castShadow=!0,t.add(d);let v=new V(new xt(.06,1.3,2.2),o);v.position.set(0,7.2,-10.4),t.add(v);let y=new Ve("#ffd98a",1.6,26);y.position.set(0,5,0),t.add(y),this.scene.add(t),this.group=t}_buildUI(){let t=document.createElement("div");t.id="safehouse",t.className="hidden",t.innerHTML=`<div class="shop-panel">
      <div class="shop-head"><span id="sh-title">${this.title}</span>
        <span id="sh-points">POINTS 0</span></div>
      <div class="sh-sub">Skill upgrades are only available inside a safe zone.</div>
      <div id="sh-items" class="shop-items"></div>
      <div class="shop-foot"><button id="sh-close">CLOSE (E)</button></div>
    </div>`,document.body.appendChild(t),this.el=t,this.itemsEl=t.querySelector("#sh-items"),this.pointsEl=t.querySelector("#sh-points"),t.querySelector("#sh-close").addEventListener("click",()=>this.close())}update(t,e,i,n,s){let o=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z),a=o<this.radius-1.5,l=o<this.radius;if(this.playerInZone=l,this.ring&&(this.ring.material.opacity=.4+Math.sin(performance.now()/500)*.12),a&&!this.open){let h=s&&s.keyName?s.keyName("use"):"F",c=i.points>0?"PRESS "+h+" \u2014 SPEND SKILL POINTS":"PRESS "+h+" \u2014 SAFE HOUSE";s&&s.setUseVisible(!0,c)}a&&n&&n.once("interact")&&(this.open?this.close():this.show(i)),this.open&&!a&&this.close()}show(t){this.open=!0,this.el.classList.remove("hidden"),this._render(t)}close(){this.open=!1,this.el.classList.add("hidden")}_render(t){let e=t;this.pointsEl.textContent="POINTS "+e.points;let i=[],n=[["vitality","Vitality",`${e.maxHealth} \u2192 ${e.maxHealth+25} HP`],["speed","Speed",`${e.runSpeed.toFixed(1)} \u2192 ${(e.runSpeed+.7).toFixed(1)} run`],["stamina","Stamina",`${e.maxStamina} \u2192 ${e.maxStamina+20} stamina`],["carry","Carry",`${e.carry} \u2192 ${e.carry+3} carry`]];for(let[h,c,u]of n)i.push({kind:"up",stat:h,label:c,sub:`${u}   (Lv ${e.upgrades[h]})`,price:1,currency:"pt",disabled:e.points<1});for(let h of Hl){if(e.installs&&e.installs[h.id]){i.push({kind:"info",label:h.name,sub:"installed",price:0});continue}i.push({kind:"install",iid:h.id,label:h.name,sub:h.note,price:h.price,currency:"coin",disabled:e.coins<h.price})}let s=[0,250,700],o=e.insurance||0;o<2?i.push({kind:"insurance",label:`Insurance tier ${o+1}`,sub:`keep ${[65,80,95][o]}% of coins on death (currently 50%)`,price:s[o+1],currency:"coin",disabled:e.coins<s[o+1]}):i.push({kind:"info",label:"Insurance",sub:"fully covered",price:0});let a=this.arsenal&&this.arsenal.current;if(a){let h=a.def,c=e.statsFor(h.id);for(let u of Ri){if(h.mag===1/0&&u.key==="mag")continue;let f=e.weaponUpLevel(h.id,u.key);if(f>=u.max){i.push({kind:"info",key:"wmax_"+u.key,label:u.name+" \u2014 MAX",sub:h.name,price:0});continue}let p=gn(h,Object.assign({},e.weaponUp[h.id],{[u.key]:f+1})),g=e.weaponUpCost(h.id,u.key);i.push({kind:"wup",key:"wu_"+u.key,wid:h.id,track:u.key,selfPay:!0,label:`${u.name} Lv${f+1}`,sub:`${h.name} \u2022 ${co(u.key,c,p)}`,price:g,currency:"coin",rarity:h.rarity,disabled:e.coins<g})}}if(e.armorTier>=1&&e.armorLevel<Ge.max){let h=e.armorUpCost();i.push({kind:"aup",key:"aup",selfPay:!0,label:`Armour Plating Lv${e.armorLevel+1}`,sub:`+${Ge.perArmor} armour \u2022 +${Math.round(Ge.perAbsorb*100)}% absorb`,price:h,currency:"coin",disabled:e.coins<h})}for(let h of go){let c=e.perk(h.id);if(c>=h.max){i.push({kind:"info",key:"pmax_"+h.id,label:h.name+" \u2014 MAX",sub:h.desc,price:0});continue}i.push({kind:"perk",key:"pk_"+h.id,pid:h.id,label:`${h.name} ${c+1}`,sub:h.desc,price:h.cost,currency:"pt",disabled:e.points<h.cost})}e.canPrestige()&&i.push({kind:"prestige",key:"prestige",label:"PRESTIGE",sub:`reset to level 1 for +8% XP and +10% coins, forever (rank ${e.prestige})`,price:0,currency:"pt",disabled:!1});let l=e.upgrades.vitality+e.upgrades.speed+e.upgrades.stamina+e.upgrades.carry;if(l>0&&i.push({kind:"respec",key:"respec",label:"Respec",sub:`refund ${l} point${l>1?"s":""}`,price:300,currency:"coin",disabled:e.coins<300}),this.arsenal)for(let h of this.arsenal.slots){let c=h.def;c.price<=0||c.id==="knife"||c.id==="pistol"||i.push({kind:"sell",key:"w_"+c.id,label:"Sell "+c.name,sub:`${Ai[c.rarity].name} \u2022 you get 50% back`,price:Math.round(c.price*.5),currency:"coin",gain:!0,rarity:c.rarity,disabled:!1})}if(this.armory){for(let h of["smg","shotgun","rifle","sniper"]){let c=Pe[h];e.unlocked.has(h)||i.push({kind:"weapon",key:"w_"+h,label:c.name,sub:`${Ai[c.rarity].name} weapon \u2022 unlock Lv${c.unlock}`,price:c.price,currency:"coin",rarity:c.rarity,disabled:e.coins<c.price})}i.push({kind:"ammo",key:"ammo",label:"Ammo Crate",sub:"refill reserves",price:60,currency:"coin",disabled:e.coins<60}),i.push({kind:"armor",key:"armor",label:"Armour Plate",sub:"top up +50 armour",price:90,currency:"coin",disabled:e.coins<90});for(let h=e.armorTier+1;h<ni.length;h++){let c=ni[h];i.push({kind:"armourTier",tier:h,label:c.name,sub:`${c.max} armour \u2022 ${Math.round(c.absorb*100)}% absorb`,price:c.price,currency:"coin",disabled:e.coins<c.price})}}this.itemsEl.innerHTML="";for(let h of i){let c=document.createElement("div"),u=h.currency==="coin"&&e.coins<h.price?` \xB7 short ${h.price-e.coins}`:"";c.className="shop-row"+(h.disabled?" dim":"");let f=h.currency==="pt"?`${h.price} PT`:h.gain?`+\u25C8 ${h.price}`:`\u25C8 ${h.price}`;if(h.kind==="info"){c.innerHTML=`<div class="shop-info"><b style="color:#5f7f9a">${h.label}</b><span>${h.sub}</span></div>
          <span class="shop-max">MAX</span>`,this.itemsEl.appendChild(c);continue}c.innerHTML=`<div class="shop-info"><b style="color:${h.rarity?Ai[h.rarity].c:""}">${h.label}</b><span>${h.sub}${u}</span></div>
        <button class="shop-buy">${f}</button>`,c.querySelector(".shop-buy").addEventListener("click",()=>{if(h.disabled){this.audio&&this.audio.error();return}let p=!1;h.kind==="up"?p=e.applyUpgrade(h.stat):this.onBuy&&(p=this.onBuy(h)),p&&(h.gain?e.addCoins(h.price):h.currency==="coin"&&!h.selfPay&&e.spend(h.price),this.audio&&this.audio.buy(),this._render(e))}),this.itemsEl.appendChild(c)}}};var g_=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,__=`
uniform vec3 topColor;
uniform vec3 horizonColor;
uniform vec3 groundColor;
uniform vec3 sunColor;
uniform vec3 sunDir;
uniform float night;
varying vec3 vDir;

float hash(vec3 p) {
  return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
}

void main() {
  vec3 dir = normalize(vDir);
  float h = dir.y;

  vec3 col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.55));
  col = mix(col, groundColor, pow(clamp(-h, 0.0, 1.0), 0.5));

  // stars at night
  if (night > 0.01 && h > 0.0) {
    vec3 sp = floor(dir * 260.0);
    float s = hash(sp);
    float star = smoothstep(0.9975, 1.0, s) * night * (0.6 + 0.4 * hash(sp + 3.1));
    col += vec3(star);
  }

  // sun disc + halo
  float d = max(dot(dir, normalize(sunDir)), 0.0);
  col += sunColor * pow(d, 350.0) * 2.0;
  col += sunColor * pow(d, 12.0) * 0.35;
  col += sunColor * pow(d, 3.0) * 0.10;

  gl_FragColor = vec4(col, 1.0);
}`,bo=class{constructor(t){let e=new Ce(1,32,20);this.mat=new Me({vertexShader:g_,fragmentShader:__,side:Re,depthWrite:!1,uniforms:{topColor:{value:new ct("#3f6fb5")},horizonColor:{value:new ct("#bcd4ec")},groundColor:{value:new ct("#2a2f38")},sunColor:{value:new ct("#fff2dc")},sunDir:{value:new w(0,1,0)},night:{value:0}}}),this.mesh=new V(e,this.mat),this.mesh.scale.setScalar(600),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1,t.add(this.mesh),this._makeClouds(t),this._makeMoon(t)}_makeClouds(t){let e=document.createElement("canvas");e.width=e.height=256;let i=e.getContext("2d");for(let s=0;s<90;s++){let o=Math.random()*256,a=Math.random()*256,l=12+Math.random()*34,h=i.createRadialGradient(o,a,0,o,a,l);h.addColorStop(0,"rgba(255,255,255,0.55)"),h.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=h,i.beginPath(),i.arc(o,a,l,0,7),i.fill()}let n=new Wi(e);n.wrapS=n.wrapT=ln,n.repeat.set(3,3),this.cloudMat=new Ot({map:n,transparent:!0,depthWrite:!1,opacity:.42,side:Ze,fog:!1}),this.clouds=new V(new ze(2600,2600),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,this.clouds.position.y=230,this.clouds.renderOrder=-1,this.clouds.frustumCulled=!1,t.add(this.clouds),this.cloudT=0}_makeMoon(t){let e=new V(new ii(1,32),new Ot({color:"#f2f0e2",transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),i=new V(new ii(1,32),new Ot({color:"#0b1018",transparent:!0,opacity:.96,fog:!1,depthWrite:!1}));i.position.z=.01;let n=new Kt;n.add(e),n.add(i),n.scale.setScalar(26),n.frustumCulled=!1,this.moonDisc=e,this.moonShade=i,this.moon=n,t.add(n)}setMoonPhase(t,e,i,n){if(!this.moon)return;this.moon.position.set(i.x-e.x*420,230+Math.max(0,-e.y)*200,i.z-e.z*420),this.moon.lookAt(i.x,this.moon.position.y,i.z);let s=n>.25&&e.y<.15;if(this.moonDisc.material.opacity=s?.92:0,this.moonShade.material.opacity=s?.96:0,!s)return;let o=t*Math.PI*2;this.moonShade.position.x=-Math.cos(o)*2.05,this.moonShade.scale.setScalar(Math.abs(Math.sin(o))<.02?.001:1)}update(t,e,{top:i,horizon:n,ground:s,sun:o,night:a}){this.mesh.position.copy(t),this.clouds&&(this.cloudT=(this.cloudT||0)+.008,this.cloudMat.map&&this.cloudMat.map.offset.set(this.cloudT*.12,this.cloudT*.05),this.clouds.position.set(t.x,230,t.z),this.cloudMat.opacity=.16+.3*(1-a),this.cloudMat.color.setStyle(a>.5?"#26303f":"#ffffff"));let l=this.mat.uniforms;l.topColor.value.copy(i),l.horizonColor.value.copy(n),l.groundColor.value.copy(s),l.sunColor.value.copy(o),l.sunDir.value.copy(e),l.night.value=a}};var y_={performance:{shadows:!1,bloom:!1,motionBlur:!1,depthOfField:!1,filmGrain:!1,renderScale:1,autoQuality:!0},balanced:{shadows:!0,bloom:!1,motionBlur:!0,depthOfField:!1,filmGrain:!1,renderScale:1,autoQuality:!0},quality:{shadows:!0,bloom:!0,motionBlur:!0,depthOfField:!0,filmGrain:!0,renderScale:1,autoQuality:!0}},v_={sensitivity:1,fov:78,invertY:!1,shadows:!1,renderScale:1,quality:"performance",volume:.6,musicVolume:.4,sprintToggle:!1,rotateMap:!1,shake:!0,autoQuality:!0,showFps:!0,weaponTheme:"neon",bloom:!1,reducedMotion:!1,hudScale:1,colorblind:"off",difficulty:"normal",subtitles:!0,hudMinimap:!0,hudCompass:!0,hudKillfeed:!0,hudCredit:!0,immersive:!1,limitFlashes:!1,binds:null},Mo=class{constructor(t="neon-settings"){this.key=t,this.data={...v_},this.load()}load(){try{let t=JSON.parse(localStorage.getItem(this.key)||"null");t&&(Object.assign(this.data,t),t.quality===void 0&&this.applyQuality("performance"))}catch{}}save(){try{localStorage.setItem(this.key,JSON.stringify(this.data))}catch{}}get(t){return this.data[t]}applyQuality(t){let e=y_[t];if(e){for(let i of Object.keys(e))this.data[i]=e[i];this.data.quality=t,this.save()}}set(t,e){this.data[t]=e,this.save()}buildPanel(t,e,i){let n=[["sensitivity","Look sensitivity","range",.3,2.5,.05],["fov","Field of view","range",60,110,1],["volume","Sound volume","range",0,1,.05],["musicVolume","Music volume","range",0,1,.05],["invertY","Invert look (Y)","bool"],["sprintToggle","Sprint: toggle instead of hold","bool"],["shake","Screen shake","bool"],["rotateMap","Rotate minimap with heading","bool"],["quality","Graphics preset","cycle",["performance","balanced","quality"]],["renderScale","Render scale (fixes lag)","range",.5,1,.05],["shadows","Shadows","bool"],["autoQuality","Auto-adjust quality","bool"],["showFps","Show FPS counter","bool"],["bloom","Bloom","bool"],["reducedMotion","Reduce motion (no shake/bob)","bool"],["hudScale","HUD size","range",.75,1.5,.05],["colorblind","Colour-blind palette","cycle",["off","deuter","protan","tritan"]],["difficulty","Difficulty","cycle",["story","normal","hard","nightmare"]],["subtitles","Enemy callouts","bool"],["hudMinimap","Show minimap","bool"],["hudCompass","Show compass","bool"],["hudKillfeed","Show kill feed","bool"],["hudCredit","Show credit line","bool"],["immersive","Immersive (hide HUD)","bool"],["limitFlashes","Limit screen flashes","bool"],["musicStyle","Music",["auto","calm","combat","off"]],["motionBlur","Motion blur","bool"],["depthOfField","Depth of field","bool"],["filmGrain","Film grain","bool"],["oneHanded","One-handed layout","bool"],["weaponTheme","Weapon colour","cycle"]],s=document.createElement("div");if(s.className="settings-grid",e){let o=document.createElement("div");o.className="set-head";let a=e.unbound();o.innerHTML="CONTROLS <small>click a key to change it</small>"+(a.length?' <b class="set-warn">'+a.length+" unbound</b>":""),s.appendChild(o);let l="";for(let h of Rs){if(h.group!==l){l=h.group;let p=document.createElement("div");p.className="set-subhead",p.textContent=l,s.appendChild(p)}let c=document.createElement("div");c.className="set-row";let u=document.createElement("span");u.className="set-label",u.textContent=ru(h,e.actionLabels);let f=document.createElement("button");if(f.className="btn xs keybind",h.mouse!==void 0)f.textContent=h.mouse===0?"Mouse 1":"Mouse 2",f.disabled=!0,f.title="Mouse buttons are not rebindable";else{let p=e.binds[h.id]||[];f.textContent=p.length?so(p[0]):"UNBOUND",p.length||f.classList.add("unbound"),f.onclick=()=>{f.textContent="press a key\u2026",f.classList.add("listening"),e.startRebind(h.id)}}c.appendChild(u),c.appendChild(f),s.appendChild(c)}}for(let[o,a,l,h,c,u]of n){let f=Array.isArray(h)?h:null,p=document.createElement("div");if(p.className="set-row",l==="cycle"){let g=f&&f.length?f:Object.keys(ts),_=d=>ts[d]?ts[d].name:d.charAt(0).toUpperCase()+d.slice(1);p.innerHTML=`<label>${a}</label>
          <button class="set-toggle on" style="grid-column:2 / span 2">${_(this.get(o))}</button>`;let m=p.querySelector(".set-toggle");m.addEventListener("click",()=>{let d=(g.indexOf(this.get(o))+1)%g.length;this.set(o,g[d]),m.textContent=_(g[d]),t&&t(o,g[d]),i&&i(o,g[d])})}else if(l==="bool"){p.innerHTML=`<label>${a}</label>
          <button class="set-toggle ${this.get(o)?"on":""}">${this.get(o)?"ON":"OFF"}</button>`;let g=p.querySelector(".set-toggle");g.addEventListener("click",()=>{let _=!this.get(o);this.set(o,_),g.classList.toggle("on",_),g.textContent=_?"ON":"OFF",t&&t(o,_)})}else{p.innerHTML=`<label>${a}</label>
          <input type="range" min="${h}" max="${c}" step="${u}" value="${this.get(o)}">
          <span class="set-val">${this.get(o)}</span>`;let g=p.querySelector("input"),_=p.querySelector(".set-val");g.addEventListener("input",()=>{let m=parseFloat(g.value);this.set(o,m),_.textContent=m,t&&t(o,m)})}s.appendChild(p)}return s}};var x_="ow-meta",es=[{id:"first_blood",name:"First Blood",desc:"Kill your first enemy"},{id:"kill_100",name:"Exterminator",desc:"Kill 100 enemies",goal:100},{id:"kill_1000",name:"Cleanup Crew",desc:"Kill 1,000 enemies",goal:1e3},{id:"head_50",name:"Marksman",desc:"Land 50 headshots",goal:50},{id:"head_500",name:"Deadeye",desc:"Land 500 headshots",goal:500},{id:"combo_10",name:"On a Roll",desc:"Reach a \xD710 kill combo",goal:10},{id:"combo_25",name:"Unstoppable",desc:"Reach a \xD725 kill combo",goal:25},{id:"level_10",name:"Rising Star",desc:"Reach level 10",goal:10},{id:"level_25",name:"Veteran",desc:"Reach level 25",goal:25},{id:"boss_1",name:"Giant Slayer",desc:"Take down a boss"},{id:"boss_10",name:"Boss Rush",desc:"Take down 10 bosses",goal:10},{id:"survive_10",name:"Ten Minutes",desc:"Survive 10 minutes in one run",goal:600},{id:"survive_30",name:"Half Hour",desc:"Survive 30 minutes in one run",goal:1800},{id:"rich",name:"Well Off",desc:"Hold 5,000 coins at once",goal:5e3},{id:"collector",name:"Collector",desc:"Own 8 weapons at once",goal:8},{id:"gunsmith",name:"Gunsmith",desc:"Max out a weapon upgrade track"},{id:"tank",name:"Tank",desc:"Buy every armour plating level",goal:6},{id:"untouchable",name:"Untouchable",desc:"Survive 5 minutes without being hit",goal:300},{id:"untouchable_10",name:"Ghost",desc:"Survive 10 minutes without being hit",goal:600}],b_=[{id:"kill",text:"Kill {n} enemies",metric:"kills",roll:()=>25+(Math.random()*4|0)*10,reward:250},{id:"head",text:"Land {n} headshots",metric:"headshots",roll:()=>8+(Math.random()*3|0)*4,reward:300},{id:"coins",text:"Collect {n} coins",metric:"coins",roll:()=>400+(Math.random()*4|0)*200,reward:200},{id:"boss",text:"Take down {n} boss",metric:"bosses",roll:()=>1+(Math.random()*2|0),reward:500},{id:"time",text:"Survive {n} minutes total",metric:"seconds",roll:()=>5+(Math.random()*4|0)*3,reward:250},{id:"upgrade",text:"Buy {n} upgrades",metric:"upgrades",roll:()=>3+(Math.random()*3|0)*2,reward:300},{id:"combo",text:"Reach a \xD7{n} kill combo",metric:"bestCombo",roll:()=>8+(Math.random()*3|0)*4,reward:250}],yu=[{id:"kill",text:"Kill {n} enemies",metric:"kills",roll:()=>15+(Math.random()*30|0),reward:320},{id:"head",text:"Land {n} headshots",metric:"headshots",roll:()=>6+(Math.random()*10|0),reward:380},{id:"boss",text:"Take down {n} boss",metric:"bosses",roll:()=>1+(Math.random()*2|0),reward:650},{id:"combo",text:"Reach a \xD7{n} kill combo",metric:"bestCombo",roll:()=>10+(Math.random()*10|0),reward:420}],M_=()=>new Date().toISOString().slice(0,10);function w_(r){let t=2166136261;for(let e=0;e<r.length;e++)t^=r.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function E_(r){let t=r>>>0;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var wo=class{constructor(t=x_){this.key=t,this.achievements={},this.totals={kills:0,headshots:0,bosses:0,coins:0,seconds:0,upgrades:0,deaths:0,runs:0},this.best={time:0,kills:0,level:1,score:0},this.bestCombo=0,this.dailyDate="",this.daily=[],this.dailyProgress={},this.dailyClaimed={},this.bestiary={},this.contract=null,this.onUnlock=null,this.load(),this.rollDaily(),this.contract||this.rollContract()}save(){try{localStorage.setItem(this.key,JSON.stringify({achievements:this.achievements,totals:this.totals,best:this.best,bestCombo:this.bestCombo,dailyDate:this.dailyDate,daily:this.daily,dailyProgress:this.dailyProgress,dailyClaimed:this.dailyClaimed,bestiary:this.bestiary,contract:this.contract}))}catch{}}load(){try{let t=JSON.parse(localStorage.getItem(this.key)||"{}");this.achievements=t.achievements||{},Object.assign(this.totals,t.totals||{}),Object.assign(this.best,t.best||{}),this.bestCombo=t.bestCombo||0,this.dailyDate=t.dailyDate||"",this.daily=t.daily||[],this.dailyProgress=t.dailyProgress||{},this.dailyClaimed=t.dailyClaimed||{},this.bestiary=t.bestiary||{},this.contract=t.contract||null}catch{}}rollDaily(){let t=M_();if(this.dailyDate===t&&this.daily.length)return;let e=E_(w_(t+this.key)),i=b_.slice(),n=[];for(let s=0;s<3&&i.length;s++){let o=i.splice(e()*i.length|0,1)[0];n.push({id:o.id,text:o.text,metric:o.metric,goal:o.roll(),reward:o.reward})}this.daily=n,this.dailyDate=t,this.dailyProgress={},this.dailyClaimed={},this.save()}dailyProgressFor(t){let e=this.dailyProgress[t.id]||0;return t.metric==="seconds",e}dailyDone(t){return(this.dailyProgress[t.id]||0)>=t.goal}dailyValue(t){return this.dailyProgress[t.id]||0}claimDaily(t){let e=this.daily.find(i=>i.id===t);return!e||!this.dailyDone(e)||this.dailyClaimed[t]?0:(this.dailyClaimed[t]=!0,this.save(),e.reward)}add(t,e=1){return this.dailyProgress[t]=(this.dailyProgress[t]||0)+e,this.totals[t]=(this.totals[t]||0)+e,this.check()}peak(t,e){return(this.totals[t]||0)<e&&(this.totals[t]=e),this.dailyProgress[t]=Math.max(this.dailyProgress[t]||0,e),this.check()}check(){let t=[],e=this.totals,i=(n,s)=>{s&&!this.achievements[n]&&(this.achievements[n]=!0,t.push(es.find(o=>o.id===n)))};if(i("first_blood",e.kills>=1),i("kill_100",e.kills>=100),i("kill_1000",e.kills>=1e3),i("head_50",e.headshots>=50),i("head_500",e.headshots>=500),i("combo_10",this.bestCombo>=10),i("combo_25",this.bestCombo>=25),i("level_10",e.level>=10),i("level_25",e.level>=25),i("boss_1",e.bosses>=1),i("boss_10",e.bosses>=10),i("survive_10",e.runTime>=600),i("survive_30",e.runTime>=1800),i("rich",e.coinsHeld>=5e3),i("collector",e.weaponsHeld>=8),i("gunsmith",e.maxedTrack>=1),i("tank",e.armorLevel>=6),i("untouchable",e.noHitRun>=300),i("untouchable_10",e.noHitRun>=600),t.length&&(this.save(),this.onUnlock))for(let n of t)n&&this.onUnlock(n);return t}rollContract(){let t=yu[Math.random()*yu.length|0];return this.contract={id:t.id,text:t.text,metric:t.metric,goal:t.roll(),reward:t.reward,base:this.totals[t.metric]||0},this.save(),this.contract}contractProgress(){let t=this.contract;return t?Math.max(0,(this.totals[t.metric]||0)-(t.base||0)):0}contractDone(){let t=this.contract;return!!t&&this.contractProgress()>=t.goal}seen(t){this.bestiary[t]=(this.bestiary[t]||0)+1,this._seenT=(this._seenT||0)+1,this._seenT%20===0&&this.save()}recordRun(t){this.totals.runs=(this.totals.runs||0)+1;let e=t.score>(this.best.score||0);return t.time>(this.best.time||0)&&(this.best.time=t.time),t.kills>(this.best.kills||0)&&(this.best.kills=t.kills),t.level>(this.best.level||0)&&(this.best.level=t.level),e&&(this.best.score=t.score),this.save(),e}resetAll(){this.achievements={},this.totals={kills:0,headshots:0,bosses:0,coins:0,seconds:0,upgrades:0,deaths:0,runs:0},this.best={time:0,kills:0,level:1,score:0},this.bestCombo=0,this.dailyProgress={},this.dailyClaimed={},this.save()}};var S_=["id","name","kind","damage","rpm","range"],T_=["id","name","hp","speed","dmg","radius"],ks=[],Pi=[];function zl(r){return typeof r=="number"&&Number.isFinite(r)}function A_(r,t){for(let e of S_)if(r[e]===void 0)return Pi.push(`${t}: weapon "${r.id||"?"}" missing "${e}"`),!1;return!zl(r.damage)||!zl(r.rpm)?(Pi.push(`${t}: weapon "${r.id}" has non-numeric damage/rpm`),!1):!0}function R_(r,t){for(let e of T_)if(r[e]===void 0)return Pi.push(`${t}: enemy "${r.id||"?"}" missing "${e}"`),!1;return!zl(r.hp)||r.hp<=0?(Pi.push(`${t}: enemy "${r.id}" needs hp > 0`),!1):!0}function C_(r){return{mag:12,reserveMax:120,spread:.02,pellets:1,reload:1.5,auto:!1,unlock:1,price:500,ch:1,rarity:"rare",palette:{body:"#4d5a72",accent:"#38f2c8",barrel:"#2a3140"},...r}}function P_(r){return{behavior:"chase",xp:15,coins:6,unlock:0,scale:1,radius:.5,color:"#5a7a4a",skin:"#7a9a5a",...r}}function L_(r){let t=r&&(r.id||r.name);if(!t)return Pi.push('a pack is missing "id"'),null;if(ks.some(i=>i.id===t))return Pi.push(`duplicate pack id "${t}"`),null;let e={id:t,name:r.name||t,author:r.author||"unknown",version:r.version||"1.0.0",weapons:0,enemies:0,biomes:0,skipped:0};for(let i of r.weapons||[]){if(!A_(i,t)){e.skipped++;continue}if(Pe[i.id]&&!r.overwrite){Pi.push(`${t}: weapon "${i.id}" already exists (set overwrite:true to replace)`),e.skipped++;continue}Pe[i.id]=C_(i),Ls.includes(i.id)||Ls.push(i.id),e.weapons++}for(let i of r.enemies||[]){if(!R_(i,t)){e.skipped++;continue}if(Ci[i.id]&&!r.overwrite){Pi.push(`${t}: enemy "${i.id}" already exists (set overwrite:true to replace)`),e.skipped++;continue}Ci[i.id]=P_(i),e.enemies++}return e.biomes=(r.biomes||[]).length,e.pool=r.pool||null,e.extraBiomes=r.biomes||[],ks.push(e),e}function vu(){let r=typeof window<"u"&&Array.isArray(window.NEON_MODS)?window.NEON_MODS:[];for(let t of r)L_(t);return{mods:ks.slice(),problems:Pi.slice(),extraBiomes:ks.flatMap(t=>t.extraBiomes||[]),pool:ks.flatMap(t=>t.pool||[])}}var _n={grenade:{id:"grenade",name:"Frag Grenade",radius:8,damage:150,fuse:2.2,price:60,max:8,bounce:.42,color:"#4c5a3c",kind:"blast"},molotov:{id:"molotov",name:"Molotov",radius:4.5,damage:40,fuse:0,price:45,max:8,bounce:.18,color:"#7a4a2a",kind:"fire",fire:{dps:28,duration:6.5,radius:4.6}}},I_=new Ce(.16,8,6),Eo=class{constructor(t,e,i,n,s){this.scene=t,this.world=e,this.player=i,this.audio=n,this.particles=s,this.counts={grenade:2,molotov:1},this.selected="grenade",this.live=[],this.pools=[],this.poolGeo=new ze(1,1),this.onBlast=null,this.cool=0}add(t,e=1){let i=_n[t];return i?(this.counts[t]=Math.min(i.max,(this.counts[t]||0)+e),!0):!1}count(t=this.selected){return this.counts[t]||0}cycle(){let t=Object.keys(_n),e=(t.indexOf(this.selected)+1)%t.length;return this.selected=t[e],this.selected}throwFromCamera(){if(this.cool>0)return!1;let t=this.selected;if(this.count(t)<=0)return!1;this.counts[t]--;let e=_n[t],i=new w;this.player.camera.getWorldPosition(i);let n=new w;this.player.camera.getWorldDirection(n);let s=new V(I_,new Tt({color:e.color,roughness:.7,metalness:.3,emissive:e.color,emissiveIntensity:.25}));return s.position.copy(i).addScaledVector(n,.6),s.castShadow=!0,this.scene.add(s),this.live.push({kind:t,mesh:s,t:0,vel:n.clone().multiplyScalar(17).add(new w(0,3.2,0)),fuse:e.fuse}),this.cool=.5,this.audio&&this.audio.ui("click"),!0}spawnPool(t,e="fire",i={}){let s=Object.assign({},e==="acid"?{dps:17,duration:8,radius:3.9,color:"#7ac83a",effect:"bleed"}:{dps:28,duration:6.5,radius:4.6,color:"#ff7a2a",effect:"burn"},i),o=new V(this.poolGeo,new Ot({color:s.color,transparent:!0,opacity:.42,depthWrite:!1}));return o.rotation.x=-Math.PI/2,o.scale.set(s.radius,s.radius,1),o.position.set(t.x,.06,t.z),this.scene.add(o),this.pools.push({mesh:o,x:t.x,z:t.z,radius:s.radius,t:s.duration,dps:s.dps,effect:s.effect,kind:e}),o}update(t,e,i={}){this.cool=Math.max(0,this.cool-t);for(let n=this.live.length-1;n>=0;n--){let s=this.live[n],o=_n[s.kind];s.t+=t,s.vel.y-=22*t,s.mesh.position.addScaledVector(s.vel,t),s.mesh.rotation.x+=t*6,s.mesh.rotation.z+=t*4,s.mesh.position.y<.16&&(s.mesh.position.y=.16,Math.abs(s.vel.y)>1.2?(s.vel.y=-s.vel.y*o.bounce,s.vel.x*=.72,s.vel.z*=.72,this.audio&&this.audio.impact("metal")):(s.vel.y=0,s.vel.x*=.86,s.vel.z*=.86));let a=s.mesh.position;for(let l of this.world.collidersNear(a.x,a.z,.3))if(a.x>l.minX&&a.x<l.maxX&&a.z>l.minZ&&a.z<l.maxZ&&a.y<l.height){let h=(l.minX+l.maxX)/2,c=(l.minZ+l.maxZ)/2;Math.abs(a.x-h)>Math.abs(a.z-c)?(s.vel.x=-s.vel.x*o.bounce,a.x+=Math.sign(a.x-h)*.1):(s.vel.z=-s.vel.z*o.bounce,a.z+=Math.sign(a.z-c)*.1),this.audio&&this.audio.impact("concrete")}o.fuse>0&&s.t>=o.fuse?(this._blast(s,o,e,i),this._remove(n)):o.kind==="fire"&&s.t>.05&&(s.mesh.position.y<=.17||s.t>3)&&(this._ignite(s.mesh.position.clone(),o),this._remove(n))}for(let n=this.pools.length-1;n>=0;n--){let s=this.pools[n];s.t-=t,s.mesh&&(s.mesh.material.opacity=.2+.12*Math.sin(performance.now()/90),s.mesh.scale.setScalar(s.radius*(.94+Math.random()*.1)));for(let o of e){if(!o.alive)continue;Math.hypot(o.group.position.x-s.x,o.group.position.z-s.z)<s.radius&&(o.damage(s.dps*t,o.group.position.clone(),null),o.applyEffect(s.effect||"burn",1.6),!o.alive&&i.onKill&&i.onKill(o))}if(this.player&&this.player.alive&&Math.hypot(this.player.pos.x-s.x,this.player.pos.z-s.z)<s.radius&&this.player.pos.y<1.6&&this.player.damage(s.dps*.55*t),this.particles&&Math.random()<t*22){let o=Math.random()*Math.PI*2,a=Math.random()*s.radius;this.particles.impact(new w(s.x+Math.cos(o)*a,.4,s.z+Math.sin(o)*a),1,[1,.45,.12])}s.t<=0&&(s.mesh&&(this.scene.remove(s.mesh),s.mesh.geometry.dispose(),s.mesh.material.dispose()),this.pools.splice(n,1))}}_blast(t,e,i,n){let s=t.mesh.position.clone();this.particles&&this.particles.explosion(s,60),this.audio&&this.audio.explosion(),this.player&&this.player.addShake(1.1);for(let o of i){if(!o.alive)continue;let a=s.distanceTo(o.group.position);if(a<e.radius){let l=de(1-a/e.radius,.25,1),h=o.group.position.clone().sub(s).normalize();o.damage(e.damage*l,s,h),o.stagger(.3),!o.alive&&n.onKill&&n.onKill(o)}}if(this.player){let o=s.distanceTo(this.player.pos);o<e.radius*.8&&this.player.damage(e.damage*.12*(1-o/(e.radius*.8)))}this.onBlast&&this.onBlast(s)}_ignite(t,e){let i=e.fire,n=new V(new ii(1,16),new Ot({color:"#ff7a2a",transparent:!0,opacity:.26,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.set(t.x,.06,t.z),n.scale.setScalar(i.radius),this.scene.add(n),this.pools.push({x:t.x,z:t.z,radius:i.radius,dps:i.dps,t:i.duration,mesh:n}),this.particles&&this.particles.explosion(t,22),this.audio&&this.audio.explosion()}_remove(t){let e=this.live[t];this.scene.remove(e.mesh),e.mesh.material.dispose(),this.live.splice(t,1)}clear(){for(let t of this.live)this.scene.remove(t.mesh),t.mesh.material.dispose();for(let t of this.pools)t.mesh&&this.scene.remove(t.mesh);this.live.length=0,this.pools.length=0}};var Us=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,D_=`
uniform sampler2D tDiffuse;
uniform float threshold;
varying vec2 vUv;
void main() {
  vec3 c = texture2D(tDiffuse, vUv).rgb;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float k = max(0.0, l - threshold) / max(l, 1e-4);
  gl_FragColor = vec4(c * k, 1.0);
}
`,k_=`
uniform sampler2D tDiffuse;
uniform vec2 dir;          // texel-sized step
varying vec2 vUv;
void main() {
  vec3 sum = texture2D(tDiffuse, vUv).rgb * 0.227027;
  sum += texture2D(tDiffuse, vUv + dir * 1.3846).rgb * 0.316216;
  sum += texture2D(tDiffuse, vUv - dir * 1.3846).rgb * 0.316216;
  sum += texture2D(tDiffuse, vUv + dir * 3.2308).rgb * 0.070270;
  sum += texture2D(tDiffuse, vUv - dir * 3.2308).rgb * 0.070270;
  gl_FragColor = vec4(sum, 1.0);
}
`,U_=`
uniform sampler2D tScene;
uniform sampler2D tBloom;
uniform sampler2D tPrev;      // last frame, for motion blur
uniform sampler2D tBlur;      // half-res blur, for depth of field
uniform float strength;
uniform float motion;         // 0..1 how much to smear the previous frame
uniform float dof;            // 0..1 how much edge softening
uniform vec2 dofCentre;
uniform float grain;          // 0..1 film grain
uniform float time;
uniform float wet;            // 0..1 how wet the ground is
varying vec2 vUv;

void main() {
  vec4 scene = texture2D(tScene, vUv);

  // depth of field: blend in the blurred copy away from the focal centre
  if (dof > 0.001) {
    vec3 soft = texture2D(tBlur, vUv).rgb;
    float d = distance(vUv, dofCentre) * 1.6;
    float k = clamp(d * dof, 0.0, 0.85);
    scene.rgb = mix(scene.rgb, soft, k);
  }

  // motion blur: blend toward the previous frame
  if (motion > 0.001) {
    vec3 prev = texture2D(tPrev, vUv).rgb;
    scene.rgb = mix(scene.rgb, prev, motion);
  }

  vec3 bloom = texture2D(tBloom, vUv).rgb;
  vec3 outCol = scene.rgb + bloom * strength;

  // wet ground: a planar reflection mirrored about the horizon. This is the
  // cheap cousin of screen-space reflections \u2014 one blurred fetch, no raymarch.
  if (wet > 0.001 && vUv.y < 0.6) {
    vec2 ruv = vec2(vUv.x, clamp(0.58 + (0.58 - vUv.y) * 0.75, 0.0, 1.0));
    vec3 refl = texture2D(tBlur, ruv).rgb;
    float k = wet * 0.32 * smoothstep(0.6, 0.15, vUv.y);
    outCol = mix(outCol, refl, k);
  }

  // film grain \u2014 a cheap hash, animated so it flickers like real grain
  if (grain > 0.001) {
    float n = fract(sin(dot(vUv * vec2(1234.5, 6789.1) + time, vec2(12.9898, 78.233))) * 43758.5453);
    outCol += (n - 0.5) * grain;
  }

  gl_FragColor = vec4(outCol, 1.0);
  #include <colorspace_fragment>
}
`,N_=`
uniform sampler2D tDiffuse;
uniform vec2 sunPos;      // sun in uv space
uniform float density;
uniform float decay;
uniform float weight;
uniform float exposure;
varying vec2 vUv;
void main() {
  vec2 delta = (vUv - sunPos) * (density / 24.0);
  vec2 uv = vUv;
  vec3 sum = vec3(0.0);
  float illum = 1.0;
  for (int i = 0; i < 24; i++) {
    uv -= delta;
    sum += texture2D(tDiffuse, uv).rgb * illum * weight;
    illum *= decay;
  }
  gl_FragColor = vec4(sum * exposure, 1.0);
}
`,O_=`
uniform sampler2D tScene;
uniform sampler2D tRays;
uniform float strength;
varying vec2 vUv;
void main() {
  vec3 base = texture2D(tScene, vUv).rgb;
  vec3 rays = texture2D(tRays, vUv).rgb;
  gl_FragColor = vec4(base + rays * strength, 1.0);
  #include <colorspace_fragment>
}
`,So=class{constructor(t,e=.85,i=.72){this.renderer=t,this.enabled=!0,this.strength=e,this.threshold=i,this.supported=!0;let n={type:hi,depthBuffer:!0,stencilBuffer:!1};this.rtScene=new He(2,2,n),this.rtA=new He(2,2,{type:hi,depthBuffer:!1}),this.rtB=new He(2,2,{type:hi,depthBuffer:!1}),this.rtC=new He(2,2,{type:hi,depthBuffer:!1}),this.rtPrev=new He(2,2,{type:hi,depthBuffer:!1}),this.motion=0,this.dof=0,this.grain=0,this.wet=0,this._hasPrev=!1,this.quadScene=new $n,this.quadCam=new qn(-1,1,1,-1,0,1),this.quad=new V(new ze(2,2),null),this.quad.frustumCulled=!1,this.quadScene.add(this.quad),this.matBright=new Me({uniforms:{tDiffuse:{value:null},threshold:{value:i}},vertexShader:Us,fragmentShader:D_,depthTest:!1,depthWrite:!1}),this.matBlur=new Me({uniforms:{tDiffuse:{value:null},dir:{value:new rt}},vertexShader:Us,fragmentShader:k_,depthTest:!1,depthWrite:!1}),this.matRays=new Me({uniforms:{tDiffuse:{value:null},sunPos:{value:new rt(.5,.7)},density:{value:.9},decay:{value:.94},weight:{value:.5},exposure:{value:.34}},vertexShader:Us,fragmentShader:N_}),this.matRaysAdd=new Me({uniforms:{tScene:{value:null},tRays:{value:null},strength:{value:1}},vertexShader:Us,fragmentShader:O_}),this.raysStrength=1,this.sunUv=new rt(.5,.7),this.matComposite=new Me({uniforms:{tScene:{value:null},tBloom:{value:null},tPrev:{value:null},tBlur:{value:null},strength:{value:e},motion:{value:0},dof:{value:0},dofCentre:{value:new rt(.5,.5)},grain:{value:0},time:{value:0},wet:{value:0}},vertexShader:Us,fragmentShader:U_,depthTest:!1,depthWrite:!1})}setSize(t,e){let i=this.renderer.getPixelRatio();this.rtScene.setSize(Math.max(2,t*i),Math.max(2,e*i));let n=Math.max(2,t*i*.5),s=Math.max(2,e*i*.5);this.rtA.setSize(n,s),this.rtB.setSize(n,s),this.rtC.setSize(n,s),this.rtPrev.setSize(n,s),this.rtB.setSize(n,s)}_pass(t,e){this.quad.material=t,this.renderer.setRenderTarget(e),this.renderer.clear(),this.renderer.render(this.quadScene,this.quadCam)}render(t,e){let i=this.renderer;i.setRenderTarget(this.rtScene),i.clear(),i.render(t,e),this.matBright.uniforms.tDiffuse.value=this.rtScene.texture,this.matBright.uniforms.threshold.value=this.threshold,this._pass(this.matBright,this.rtA);let n=this.rtA.width,s=this.rtA.height;this.matBlur.uniforms.tDiffuse.value=this.rtA.texture,this.matBlur.uniforms.dir.value.set(1/n,0),this._pass(this.matBlur,this.rtB),this.matBlur.uniforms.tDiffuse.value=this.rtB.texture,this.matBlur.uniforms.dir.value.set(0,1/s),this._pass(this.matBlur,this.rtA);let o=this.rtScene.texture;this.raysStrength>.01&&(this.matRays.uniforms.tDiffuse.value=this.rtA.texture,this.matRays.uniforms.sunPos.value.copy(this.sunUv),this._pass(this.matRays,this.rtB),this.matRaysAdd.uniforms.tScene.value=this.rtScene.texture,this.matRaysAdd.uniforms.tRays.value=this.rtB.texture,this.matRaysAdd.uniforms.strength.value=this.raysStrength,this._pass(this.matRaysAdd,this.rtC),o=this.rtC.texture);let a=this.matComposite.uniforms;a.tScene.value=o,a.tBloom.value=this.rtA.texture,a.strength.value=this.strength,a.tBlur.value=this.rtB.texture,a.dof.value=this.dof,a.motion.value=this._hasPrev?this.motion:0,a.tPrev.value=this.rtPrev.texture,i.setRenderTarget(null),i.clear(),this._pass(this.matComposite,null),this.matBlur.uniforms.tDiffuse.value=o,this.matBlur.uniforms.dir.value.set(1/this.rtPrev.width,0),this._pass(this.matBlur,this.rtPrev),this._hasPrev=!0}dispose(){for(let t of[this.rtScene,this.rtA,this.rtB])t.dispose();this.quad.geometry.dispose();for(let t of[this.matBright,this.matBlur,this.matComposite])t.dispose()}};var To=class{constructor(t,e,i,n,s="Rook"){this.scene=t,this.world=e,this.player=i,this.audio=n,this.name=s,this.maxHealth=120,this.health=this.maxHealth,this.speed=5.2,this.down=!1,this.downT=0,this.cool=0,this.facing=0,this._cols=[];let o=new Kt,a=new Tt({color:"#3a4a5e",roughness:.8,flatShading:!0}),l=new Tt({color:"#c8a884",roughness:.9,flatShading:!0}),h=new Tt({color:"#1e242c",roughness:.9,flatShading:!0});this.mats=[a,l,h];let c=new V(new xt(.68,.95,.4),a);c.position.y=1.3,c.castShadow=!0,o.add(c);let u=new V(new xt(.42,.42,.42),l);u.position.y=1.98,u.castShadow=!0,o.add(u);let f=new V(new xt(.36,.08,.05),new Ot({color:"#38f2c8"}));f.position.set(0,2,-.22),o.add(f),this.legs=[];for(let g of[-1,1]){let _=new V(new xt(.22,.8,.24),h);_.position.set(.16*g,.4,0),_.castShadow=!0,o.add(_),this.legs.push(_)}this.arms=[];for(let g of[-1,1]){let _=new V(new xt(.18,.78,.18),a);_.position.set(.44*g,1.3,0),_.castShadow=!0,o.add(_),this.arms.push(_)}let p=new V(new Ce(.5,8,6),new Ot({color:"#000",transparent:!0,opacity:.28,depthWrite:!1}));p.scale.set(1.3,.02,1.3),p.position.y=.02,o.add(p),this.group=o,o.position.copy(i.pos),t.add(o),this.bobT=0}heal(t){this.health=Math.min(this.maxHealth,this.health+t)}revive(){this.down=!1,this.downT=0,this.health=this.maxHealth*.5}damage(t){this.down||(this.health-=t,this.health<=0&&(this.health=0,this.down=!0,this.downT=0))}update(t,e,i={}){let n=this.group.position,s=this.player.pos;if(this.down){this.downT+=t,this.group.rotation.x=Math.min(Math.PI/2,this.group.rotation.x+t*3),this.downT>14&&this.revive();return}this.group.rotation.x=0;let o=s.x-n.x,a=s.z-n.z,l=Math.hypot(o,a)||1;if(l>3.2){let f=Math.min(this.speed,(l-3)*1.6)*t,p=n.x+o/l*f,g=n.z+a/l*f;this._blocked(p,n.z)||(n.x=p),this._blocked(n.x,g)||(n.z=g),this.bobT+=t}let h=null,c=34;for(let f of e){if(!f.alive)continue;let p=f.group.position.distanceTo(n);p<c&&(c=p,h=f)}if(h?this.facing=Math.atan2(h.group.position.x-n.x,h.group.position.z-n.z):l>1&&(this.facing=Math.atan2(o,a)),this.group.rotation.y=this.facing,this.cool-=t,h&&this.cool<=0&&c<32){this.cool=.42;let f=16+Math.random()*8;h.damage(f,h.group.position.clone().setY(1.3),null),i.onHit&&i.onHit(h,f),!h.alive&&i.onKill&&i.onKill(h),this.audio&&this.audio.at(()=>this.audio.shot("rifle"),n.x-s.x,n.z-s.z,60)}let u=Math.sin(this.bobT*10)*.5;this.legs[0].rotation.x=u,this.legs[1].rotation.x=-u,this.arms[0].rotation.x=-u*.5-(h?1.1:0),this.arms[1].rotation.x=u*.5-(h?1.1:0)}_blocked(t,e){for(let i of this.world.collidersNear(t,e,this.radius||.45,this._cols))if(i.height>1.2&&t>i.minX&&t<i.maxX&&e>i.minZ&&e<i.maxZ)return!0;return!1}dispose(){this.scene.remove(this.group);for(let t of this.mats)t.dispose()}};var B_=26,F_=8,H_=15,z_=26,V_=.6,Vl=class{constructor(t,e,i,n,s,o="#8a3a3a"){this.scene=t,this.world=e,this.speed=0,this.heading=s,this._cols=[],this.radius=1.6;let a=new Kt,l=new Tt({color:o,metalness:.45,roughness:.45,flatShading:!0}),h=new Tt({color:"#9fd8f0",metalness:.1,roughness:.15,transparent:!0,opacity:.5}),c=new Tt({color:"#1a1a20",roughness:.9}),u=new V(new xt(2,.7,4.2),l);u.position.y=.85,u.castShadow=!0,a.add(u);let f=new V(new xt(1.75,.62,2),h);f.position.set(0,1.5,-.15),a.add(f);for(let[_,m]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let d=new V(new xt(.34,.16,.1),new Ot({color:"#fff3c4"}));d.position.set(_*.62,.85,m*2.1),a.add(d)}this.wheels=[];let p=new ue(.42,.42,.3,10);for(let[_,m]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let d=new V(p,c);d.rotation.z=Math.PI/2,d.position.set(_*1,.42,m*1.4),a.add(d),this.wheels.push(d)}let g=new Wr("#fff3c4",0,34,.5,.5,1.4);g.position.set(0,.9,-2),g.target.position.set(0,.2,-14),a.add(g),a.add(g.target),this.beam=g,this.group=a,a.position.set(i,0,n),a.rotation.y=s,t.add(a)}get seat(){let t=new w(0,1.35,.2).applyAxisAngle(new w(0,1,0),this.heading);return this.group.position.clone().add(t)}blocked(t,e){for(let i of this.world.collidersNear(t,e,this.radius,this._cols))if(!(i.height<.6)&&t>i.minX-1.2&&t<i.maxX+1.2&&e>i.minZ-1.2&&e<i.maxZ+1.2)return!0;return!1}setLights(t){this.beam&&(this.beam.intensity=t?2.6:0)}update(t,e){let i=(e.forward?1:0)-(e.back?1:0),n=(e.left?1:0)-(e.right?1:0),s=!!e.crouch;i>0?this.speed+=H_*t:i<0?this.speed-=z_*t:this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),V_*6*t+4*t),s&&(this.speed*=1-2.4*t),this.speed=Math.max(-F_,Math.min(B_,this.speed)),Math.abs(this.speed)<.05&&(this.speed=0);let o=Math.min(1,Math.abs(this.speed)/7);this.heading+=n*1.5*o*t*Math.sign(this.speed||1);let a=-Math.sin(this.heading),l=-Math.cos(this.heading),h=this.group.position.x+a*this.speed*t,c=this.group.position.z+l*this.speed*t;this.blocked(h,c)?this.speed*=-.18:this.group.position.set(h,0,c),this.group.rotation.y=this.heading;let u=this.speed*t*2.4;for(let f of this.wheels)f.rotation.x+=u}dispose(){this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})}},Ao=class{constructor(t,e,i,n){this.scene=t,this.world=e,this.player=i,this.audio=n,this.list=[],this.current=null,this._spawned=new Set,this.lightsOn=!1,this.colors=["#8a3a3a","#3a5a8a","#4a7a4a","#8a7a2a","#6a3a7a","#3a7a7a"]}spawnNear(t,e=2){let i=Math.round(t.x/60)+","+Math.round(t.z/60);if(!this._spawned.has(i)){this._spawned.add(i);for(let n=0;n<e;n++){let s=this.world.spawnAround(t,9,26);if(this._nearExisting(s))continue;let o=new Vl(this.scene,this.world,s.x,s.z,Math.random()*Math.PI*2,this.colors[Math.floor(Math.random()*this.colors.length)]);o.setLights(this.lightsOn),this.list.push(o)}for(;this.list.length>14;)this.list.shift().dispose()}}_nearExisting(t){for(let e of this.list)if(e.group.position.distanceTo(t)<8)return!0;return!1}get driving(){return!!this.current}nearest(t,e=3.4){let i=null,n=e;for(let s of this.list){let o=s.group.position.distanceTo(t);o<n&&(n=o,i=s)}return i}enter(t){this.current=t,this.audio&&this.audio.buy()}exit(){if(!this.current)return;let t=this.current,e=new w(1.6,0,0).applyAxisAngle(new w(0,1,0),t.heading),i=t.group.position.clone().add(e);this.player.pos.set(i.x,0,i.z),this.current=null}setLights(t){this.beam&&(this.beam.intensity=t?2.6:0)}setLights(t){if(this.lightsOn!==t){this.lightsOn=t;for(let e of this.list)e.setLights(t)}}update(t,e){if(!this.current)return;this.current.update(t,e);let i=this.current.seat;this.player.pos.set(i.x,i.y-1.7,i.z),this.player.yaw=this.current.heading,this.player.vel.set(0,0,0)}promptFor(t){return this.current?"F  exit vehicle":this.nearest(t)?"F  drive":null}dispose(){for(let t of this.list)t.dispose();this.list.length=0}};var Ns=[{id:"m1",title:"FIRST CONTACT",brief:"Put down 8 of the infected.",metric:"kills",goal:8,reward:200},{id:"m2",title:"SUPPLY RUN",brief:"Crack open 2 hidden caches.",metric:"stashes",goal:2,reward:300},{id:"m3",title:"CLEAR THE BLOCK",brief:"Clear 20 more of them.",metric:"kills",goal:20,reward:400},{id:"m4",title:"HEADHUNTER",brief:"Land 10 headshots.",metric:"headshots",goal:10,reward:450},{id:"m5",title:"SPEND IT WELL",brief:"Buy 3 upgrades at a safe house.",metric:"upgrades",goal:3,reward:500},{id:"m6",title:"THE BIG ONE",brief:"Take down a boss.",metric:"bosses",goal:1,reward:800},{id:"m7",title:"LAST STAND",brief:"Survive five more minutes.",metric:"seconds",goal:300,reward:900},{id:"m8",title:"THE SWARM",brief:"Clear a wave of 12 or more.",metric:"hordeKills",goal:12,reward:1200},{id:"m9",title:"BREAKER",brief:"Destroy a boss core.",metric:"cores",goal:1,reward:900},{id:"m10",title:"FIELD WORK",brief:"Craft 3 things from scrap.",metric:"crafts",goal:3,reward:700},{id:"m11",title:"THE LONG HAUL",brief:"Survive five more minutes.",metric:"seconds",goal:300,reward:1e3},{id:"m12",title:"GET OUT",brief:"Complete an extraction.",metric:"extractions",goal:1,reward:1400},{id:"m13",title:"HOLD THE LINE",brief:"Hold two defence waves.",metric:"defences",goal:2,reward:1500},{id:"m14",title:"CLEAN SWEEP",brief:"Land 30 headshots.",metric:"headshots",goal:30,reward:1300},{id:"m15",title:"WRECKER",brief:"Take down three bosses.",metric:"bosses",goal:3,reward:2e3},{id:"m16",title:"LEGEND",brief:"Survive to ten minutes and clear 100.",metric:"kills",goal:100,reward:3e3}],Ro=class{constructor(t={}){this.hud=t.hud,this.audio=t.audio,this.music=t.music,this.onReward=t.onReward||null,this.index=0,this.progress=0,this.active=!1,this.done=!1,this.timer=0}get current(){return Ns[this.index]||null}start(t=0){this.index=Math.max(0,Math.min(Ns.length-1,t)),this.active=!0,this.done=!1,this._enter()}_enter(){let t=this.current;if(!t){this._finish();return}this.progress=0,this.timer=0,this.hud&&(this.hud.banner(t.title,t.brief),this.hud.setObjective(`MISSION ${this.index+1}/${Ns.length} \u2014 ${t.title}`,t.brief)),this.audio&&this.audio.warn()}bump(t,e=1){if(!this.active||this.done)return;let i=this.current;i&&i.metric===t&&(this.progress+=e)}update(t){if(!this.active||this.done)return;let e=this.current;if(!e)return;e.metric==="seconds"&&(this.progress+=t);let i=this.progress>=e.goal;if(this.hud){let n=e.metric==="seconds"?`${Math.floor(this.progress)}s / ${e.goal}s`:`${Math.min(Math.floor(this.progress),e.goal)} / ${e.goal}`;this.hud.setObjective(`MISSION ${this.index+1}/${Ns.length} \u2014 ${e.title}`,`${e.brief}   (${n})`)}i&&(this.onReward&&this.onReward(e.reward),this.hud&&this.hud.banner("MISSION COMPLETE",`+${e.reward} coins`),this.music&&this.music.sting("win"),this.index++,this.index>=Ns.length?this._finish():setTimeout(()=>{this.active&&this._enter()},2200))}_finish(){this.done=!0,this.active=!1,this.hud&&(this.hud.banner("CAMPAIGN COMPLETE","you cleared every mission"),this.hud.setObjective("CAMPAIGN COMPLETE","free roam")),this.music&&this.music.sting("win")}};function xu(r){Object.assign(r.prototype,{_buildMenus(){let t=document.getElementById("overlay");if(!t)return;let e=t.querySelector(".panel")||t,i=document.createElement("div");i.id="pausebtns",i.className="menu-btns hidden",i.innerHTML=`<button class="btn sm" id="m-resume">RESUME</button>
      <button class="btn sm ghost" id="m-settings">SETTINGS</button>
      <button class="btn sm ghost" id="m-restart">RESTART</button>`,e.appendChild(i),this.pauseMenu=i,i.querySelector("#m-resume").onclick=()=>this.start(),i.querySelector("#m-restart").onclick=()=>this.respawn(),i.querySelector("#m-settings").onclick=()=>this.openSettings();let n=document.createElement("button");n.className="btn sm ghost",n.textContent="PROGRESS",n.onclick=()=>this.openMeta(),i.appendChild(n);let s=document.getElementById("settingsbtn");s&&(s.onclick=()=>this.openSettings())},togglePhoto(){this.photo=!this.photo,this.player.flying=this.photo,document.getElementById("hud").classList.toggle("hidden",this.photo),document.body.classList.toggle("photo",this.photo),this.photo&&(this.hud.notify("PHOTO MODE \u2014 WASD fly, Space up, Ctrl down, O to exit"),this.hud.setUseVisible(!1))},_showRunSummary(t,e){let i=document.getElementById("runsummary");if(!i)return;let n=a=>`${Math.floor(a/60)}:${String(Math.floor(a%60)).padStart(2,"0")}`,s=[["Survived",n(t.time)],["Kills",t.kills],["Level reached",t.level],["Score",t.score],["Killed by",this._lastAttacker||this.cfg.killerDefault||"an unknown attacker"]].map(([a,l])=>`<div class="rs-row"><span>${a}</span><b>${l}</b></div>`).join(""),o=es.filter(a=>this.meta.achievements[a.id]).slice(-3);i.innerHTML=`<div class="rs-panel"><h3>RUN SUMMARY${e?" \xB7 NEW BEST":""}</h3>
      ${s}
      <div class="rs-best">Best: ${n(this.meta.best.time)} \xB7 ${this.meta.best.kills} kills \xB7 score ${this.meta.best.score}</div>
      ${o.length?`<div class="rs-ach">${o.map(a=>`<span>${a.name}</span>`).join("")}</div>`:""}
      </div>`,i.classList.remove("hidden"),clearTimeout(this._rsT),this._rsT=setTimeout(()=>i.classList.add("hidden"),9e3)},openMeta(){let t=document.getElementById("metamodal");t||(t=document.createElement("div"),t.id="metamodal",t.setAttribute("role","dialog"),t.setAttribute("aria-label","Progress panel"),t.innerHTML=`<div class="set-panel"><h3>PROGRESS</h3><div class="meta-body"></div>
        <button class="btn sm" id="meta-close">CLOSE</button></div>`,document.body.appendChild(t),t.querySelector("#meta-close").onclick=()=>this.closeMeta()),t.querySelector(".meta-body").innerHTML=this._metaHtml(),t.querySelectorAll("[data-claim]").forEach(i=>{i.onclick=()=>{let n=this.meta.claimDaily(i.dataset.claim);n&&(this.progression.addCoins(n),this.audio.buy(),this.hud.notify(`Daily complete  +${n}\u25C8`,!0),this.openMeta())}}),t.querySelectorAll("[data-slot]").forEach(i=>{i.onclick=()=>{let n=+i.dataset.slot,s=i.dataset.act,o=this.progression;s==="save"?(o.saveSlot(n),this.hud.notify("Saved to slot "+n)):s==="load"?o.loadSlot(n)&&(this._applyProgression(),this.hud.notify("Loaded slot "+n)):(o.deleteSlot(n),this.hud.notify("Cleared slot "+n)),this.openMeta()}});let e=t.querySelector("#meta-ascend");e&&(e.onclick=()=>{let i=this.progression;i.canAscend()?(i.ascend(),this.director.difficulty=i.ngMul,this.hud.notify("ASCENDED  New Game+"+i.ngPlus,!0),this.closeMeta()):this.hud.notify("Reach level 20 to ascend")}),t.classList.remove("hidden")},closeMeta(){let t=document.getElementById("metamodal");t&&t.classList.add("hidden")},_metaHtml(){let t=this.meta,e=o=>`${Math.floor(o/60)}:${String(Math.floor(o%60)).padStart(2,"0")}`,i=es.filter(o=>t.achievements[o.id]).length,n=es.map(o=>{let a=!!t.achievements[o.id],l=o.goal?Math.min(o.goal,t.totals[o.id==="tank"?"armorLevel":o.id==="gunsmith"?"maxedTrack":o.id==="survive_10"||o.id==="survive_30"?"runTime":o.id==="untouchable"||o.id==="untouchable_10"?"noHitRun":o.id==="rich"?"coinsHeld":o.id==="collector"?"weaponsHeld":o.id==="combo_10"||o.id==="combo_25"?"bestCombo":o.id.startsWith("level")?"level":o.id.startsWith("boss")?"bosses":o.id.startsWith("head")?"headshots":"kills"]||0):0;return`<div class="ach ${a?"on":""}"><b>${o.name}</b><span>${o.desc}</span>
        ${o.goal?`<i>${a?"\u2713":Math.floor(l)+"/"+o.goal}</i>`:a?"<i>\u2713</i>":""}</div>`}).join(""),s=t.daily.map(o=>{let a=Math.min(o.goal,t.dailyValue(o)),l=t.dailyDone(o),h=t.dailyClaimed[o.id];return`<div class="shop-row${l&&!h?"":" dim"}">
        <div class="shop-info"><b>${o.text.replace("{n}",o.goal)}</b>
        <span>${Math.floor(a)} / ${o.goal}</span></div>
        ${h?'<span class="shop-max">CLAIMED</span>':`<button class="shop-buy" data-claim="${o.id}">+${o.reward}\u25C8</button>`}</div>`}).join("");return`
      <div class="meta-sec"><h4>DAILY QUESTS <small>${t.dailyDate}</small></h4>${s}</div>
      <div class="meta-sec"><h4>PERSONAL BEST</h4>
        <div class="rs-row"><span>Longest survival</span><b>${e(t.best.time)}</b></div>
        <div class="rs-row"><span>Most kills</span><b>${t.best.kills}</b></div>
        <div class="rs-row"><span>Highest level</span><b>${t.best.level}</b></div>
        <div class="rs-row"><span>Best score</span><b>${t.best.score}</b></div>
        <div class="rs-row"><span>Runs played</span><b>${t.totals.runs||0}</b></div>
      </div>
      <div class="meta-sec"><h4>CONTRACT</h4>
        ${t.contract?`<div class="rs-row"><span>${t.contract.text.replace("{n}",t.contract.goal)}</span>
          <b>${Math.floor(Math.min(t.contractProgress(),t.contract.goal))} / ${t.contract.goal} \xB7 ${t.contract.reward}\u25C8</b></div>`:""}
      </div>
      <div class="meta-sec"><h4>BESTIARY <small>${Object.keys(t.bestiary).length} types</small></h4>
        ${Object.keys(t.bestiary).length?Object.entries(t.bestiary).sort((o,a)=>a[1]-o[1]).map(([o,a])=>`<div class="rs-row"><span>${o}</span><b>${a}</b></div>`).join(""):'<div class="rs-row"><span>Nothing logged yet</span><b>\u2014</b></div>'}
      </div>
      <div class="meta-sec"><h4>WEAPON RECORD</h4>
        ${Object.keys(this.arsenal.stats).length?Object.entries(this.arsenal.stats).map(([o,a])=>{let l=a.shots?Math.round(a.hits/a.shots*100):0;return`<div class="rs-row"><span>${Pe[o]&&Pe[o].name||o}</span><b>${a.kills} kills \xB7 ${l}% acc</b></div>`}).join(""):'<div class="rs-row"><span>No shots fired</span><b>\u2014</b></div>'}
      </div>
      <div class="meta-sec"><h4>CONTENT PACKS <small>${(this.mods||[]).length}</small></h4>
        ${(this.mods||[]).length?this.mods.map(o=>`<div class="rs-row"><span>${o.name}</span><b>${o.weapons}w ${o.enemies}e</b></div>`).join(""):'<div class="rs-row"><span>No packs loaded</span><b>\u2014</b></div>'}
        ${(this.modProblems||[]).length?`<div class="rs-best">${this.modProblems.length} pack issue(s) \u2014 see console</div>`:""}
      </div>
      <div class="meta-sec"><h4>ACHIEVEMENTS <small>${i}/${es.length}</small></h4>
        <div class="ach-grid">${n}</div></div>
      <div class="meta-sec"><h4>NEW GAME+ <small>loop ${this.progression.ngPlus||0}</small></h4>
        <div class="rs-row"><span>Enemies are ${Math.round((this.progression.ngMul-1)*100)}% tougher, rewards +${Math.round((this.progression.ngReward-1)*100)}%</span></div>
        <button class="btn sm" id="meta-ascend" ${this.progression.canAscend()?"":"disabled"}>
          ${this.progression.canAscend()?"ASCEND (reset to Lv1)":"reach Lv20 to ascend"}</button>
      </div>
      <div class="meta-sec"><h4>SAVE SLOTS</h4>
        ${[1,2,3].map(o=>{let a=this.progression.slotInfo(o),l=a?`Lv${a.level} \xB7 ${a.coins}\u25C8${a.ng?" \xB7 NG+"+a.ng:""}`:"empty";return`<div class="rs-row"><span>Slot ${o}</span><b>${l}</b>
            <button class="btn xs" data-slot="${o}" data-act="save">SAVE</button>
            ${a?`<button class="btn xs" data-slot="${o}" data-act="load">LOAD</button>
            <button class="btn xs" data-slot="${o}" data-act="del">DEL</button>`:""}</div>`}).join("")}
      </div>`},openSettings(){let t=document.getElementById("settingsmodal");t||(t=document.createElement("div"),t.id="settingsmodal",t.innerHTML=`<div class="set-panel"><h3>SETTINGS</h3><div class="set-body"></div>
        <button class="btn sm" id="set-close">CLOSE</button></div>`,document.body.appendChild(t),t.querySelector("#set-close").onclick=()=>this.closeSettings());let e=t.querySelector(".set-body");e.innerHTML="",e.appendChild(this.settings.buildPanel(()=>this._applySettings(),this.input,i=>{i==="quality"&&(this.settings.applyQuality(this.settings.get("quality")),this._applySettings(),this.openSettings())})),t.classList.remove("hidden"),this.input&&(this.input.onBind=(i,n,s)=>{this.settings.set("binds",Object.assign({},this.input.binds)),i&&this.hud.notify(s?"Bound to "+i+" \u2014 "+s+" was unbound":"Bound "+i+" to "+n,!0),this.openSettings()})},closeSettings(){let t=document.getElementById("settingsmodal");t&&t.classList.add("hidden")}})}function bu(r){Object.assign(r.prototype,{_updateMode(t,e){let i=this.cfg.mode;i==="bossrush"?this._modeBossRush(t):i==="defence"?this._modeDefence(t):i==="extraction"?this._modeExtraction(t):this._updateArena(t,e)},_modeBossRush(t){this._br||(this._br={n:0,t:5,alive:0});let e=this._br,i=["behemoth","warlord","ringleader"];if(e.alive=this.director.alive.filter(n=>n.isBoss).length,e.alive===0&&(e.t-=t,e.t<=0)){e.n++,e.t=7;let n=i[(e.n-1)%i.length],s=1+e.n*.22,o=this.world.spawnAround(this.player.pos,22,34);if(this.director.spawnAt(n,o,s),e.n>1&&e.n%3===0){let a=this.world.spawnAround(this.player.pos,24,36);this.director.spawnAt(i[e.n%i.length],a,s*.85)}this.hud.banner("BOSS "+e.n,"incoming"),this.audio.bossRoar(),this.music&&this.music.sting("boss")}this.hud.setObjective(`BOSS RUSH \u2014 ${e.n} down`,e.alive?`${e.alive} boss active`:`next in ${Math.ceil(e.t)}s`)},_modeDefence(t){if(!this._def){let n=this.player.pos.clone(),s=new V(new ue(.9,1.1,2.2,8),new Tt({color:"#2ad3ab",emissive:"#2ad3ab",emissiveIntensity:.6}));s.position.set(n.x,1.1,n.z),this.scene.add(s);let o=new Ve("#2ad3ab",2,22);o.position.set(n.x,3,n.z),this.scene.add(o),this._def={beacon:s,light:o,hp:100,max:100,wave:0,t:6,state:"idle",pos:n},this.hud.banner("DEFEND THE BEACON","keep it alive")}let e=this._def,i=this.director.alive.filter(n=>n.group.position.distanceTo(e.beacon.position)<7).length;if(i>0&&(e.hp=Math.max(0,e.hp-i*3.5*t)),e.beacon.material.emissiveIntensity=.35+e.hp/e.max*.7,e.beacon.rotation.y+=t*.6,e.hp<=0){this.hud.banner("BEACON DESTROYED","defence failed"),this.die();return}if(e.state==="idle"){if(e.t-=t,e.t<=0){e.wave++,e.state="wave";let n=5+Math.floor(e.wave*1.7),s=1+e.wave*.15;this.director.spawnHorde(this.world.spawnAround(e.pos,26,40),Math.min(22,n),s),this.hud.banner("WAVE "+e.wave,"defend the beacon"),this.audio.siren()}}else if(this.director.alive.length===0){let n=80+e.wave*40;this.progression.addCoins(n),this.meta.add("coins",n),this.hud.banner("WAVE "+e.wave+" HELD","+"+n+"\u25C8"),this.music&&this.music.sting("win"),e.hp=Math.min(e.max,e.hp+25),e.state="idle",e.t=9,this.campaign&&this.campaign.bump("defences")}this.hud.setObjective(`DEFENCE \u2014 WAVE ${e.wave}`,`beacon ${Math.ceil(e.hp)}%`)},_modeExtraction(t){this._ex||(this._ex={need:4,got:0,zone:null,t:0},this.hud.banner("EXTRACTION",`find ${this._ex.need} caches, then reach the LZ`));let e=this._ex;if(e.zone){let i=Math.hypot(this.player.pos.x-e.zone.x,this.player.pos.z-e.zone.z);if(e.zone.mesh.rotation.z+=t*1.2,e.t+=t,i<6){let n=500+e.got*150;this.progression.addCoins(n),this.meta.add("coins",n),this.hud.banner("EXTRACTED","+"+n+"\u25C8"),this.music&&this.music.sting("win"),e.got=0,e.zone=null,e.need+=1,this.hud.notify("Next run needs "+e.need+" caches")}this.hud.setObjective("EXTRACTION",`LZ is ${Math.round(i)}m away`);return}else if(e.got>=e.need){let i=this.world.spawnAround(this.player.pos,70,110),n=new V(new $i(5,.4,6,24),new Tt({color:"#ffd23a",emissive:"#ffd23a",emissiveIntensity:.8}));n.rotation.x=-Math.PI/2,n.position.set(i.x,.4,i.z),this.scene.add(n),e.zone={mesh:n,x:i.x,z:i.z},this.hud.banner("LZ OPEN","get to the extraction zone"),this.music&&this.music.sting("win")}this.hud.setObjective("EXTRACTION",`caches ${e.got} / ${e.need}`)},_updateArena(t,e){let i=this.wave,n=this.director.alive.length;if(i.state==="idle"){if(i.t-=t,i.t<=0){i.n++,i.state="wave";let s=4+Math.floor(i.n*1.6),o=1+i.n*.14,a=this.world.spawnAround(this.player.pos,26,42);this.director.spawnHorde(a,Math.min(24,s),o),this.hud.banner("WAVE "+i.n,s+" contacts"),this.hud.setObjective(`WAVE ${i.n}`,`${s} contacts incoming`),this.audio.siren(),this.music&&this.music.sting("danger")}}else if(i.state==="wave")if(n===0){let s=60+i.n*35;this.progression.addCoins(s),this.meta.add("coins",s),this.hud.banner("WAVE "+i.n+" CLEARED","+"+s+"\u25C8"),this.music&&this.music.sting("win"),i.state="idle",i.t=8,this.hud.setObjective(`WAVE ${i.n+1}`,"next wave in 8s")}else this.hud.setObjective(`WAVE ${i.n}`,`${n} remaining`)}})}var G_=110,W_=[0,-4,3,-2],Mu={menu:{bpm:72,drums:0,arp:.18,bass:.45,pad:.85,scale:[0,3,5,7,10]},calm:{bpm:84,drums:.2,arp:.3,bass:.55,pad:.75,scale:[0,3,5,7,10]},combat:{bpm:118,drums:.8,arp:.55,bass:.8,pad:.4,scale:[0,2,3,7,8]},boss:{bpm:148,drums:1,arp:.72,bass:1,pad:.28,scale:[0,1,3,6,8]}},Co=class{constructor(t){this.audio=t,this.mood="menu",this.target="menu",this.intensity=0,this.vol=.4,this.step=0,this.nextTime=0,this.timer=null,this.playing=!1}_bus(){let t=this.audio;return t.ctx?(this.bus||(this.bus=t.ctx.createGain(),this.bus.gain.value=this.vol,this.bus.connect(t.master)),this.bus):null}setVolume(t){this.vol=t,this.bus&&(this.bus.gain.value=t)}sting(t="level"){let e=this.audio.ctx;if(!e)return;let i=e.currentTime+.01,n={level:[0,4,7,12],boss:[-12,-5,0,3],danger:[0,1,6],win:[0,7,12,19]},s=n[t]||n.level,o=220;s.forEach((a,l)=>{let h=e.createOscillator();h.type=t==="boss"?"sawtooth":"triangle",h.frequency.value=o*Math.pow(2,a/12);let c=e.createGain(),u=i+l*.075;c.gain.setValueAtTime(1e-4,u),c.gain.exponentialRampToValueAtTime(t==="boss"?.16:.13,u+.02),c.gain.exponentialRampToValueAtTime(1e-4,u+(t==="boss"?.9:.5)),h.connect(c),c.connect(this._bus()||this.audio.master),h.start(u),h.stop(u+1)})}setMood(t){Mu[t]&&(this.target=t)}setIntensity(t){this.intensity=de(t,0,1)}start(t="menu"){this.audio.resume(),this.audio.ctx&&(this.target=t,this.mood=t,this._bus(),!this.playing&&(this.playing=!0,this.step=0,this.nextTime=this.audio.ctx.currentTime+.12,this.timer=setInterval(()=>this._tick(),25)))}stop(){this.playing=!1,this.timer&&(clearInterval(this.timer),this.timer=null)}_tick(){let t=this.audio.ctx;if(!t||!this.playing)return;this.mood=this.target;let e=Mu[this.mood],i=60/e.bpm/4;for(;this.nextTime<t.currentTime+.15;)this._schedule(this.step,this.nextTime,e,i),this.nextTime+=i,this.step++}_schedule(t,e,i,n){let s=t%16,o=Math.floor(t/16)%4,a=G_*Math.pow(2,W_[o]/12),l=.55+this.intensity*.45;if(s===0&&this._pad(a,e,n*16,i.pad*l),s%8===0?this._bass(a,e,i.bass*l):s===6&&this.intensity>.5&&this._bass(a,e,i.bass*l*.7),Math.random()<i.arp*l){let c=i.scale[Math.random()*i.scale.length|0],u=Math.random()<.3?12:0;this._arp(a*4*Math.pow(2,(c+u)/12),e,n*1.7,.085*l)}let h=i.drums*l;h>.05&&(s%8===0&&this._kick(e,.5*h),s%8===4&&this._snare(e,.3*h),s%2===0&&Math.random()<.7&&this._hat(e,.09*h))}_pad(t,e,i,n){let s=this.audio.ctx,o=this._bus(),a=s.createGain();a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(n*.16,e+i*.35),a.gain.linearRampToValueAtTime(0,e+i);let l=s.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(600,e),l.frequency.linearRampToValueAtTime(1100,e+i*.5),a.connect(l),l.connect(o);for(let h of[0,3,7])for(let c of[-4,4]){let u=s.createOscillator();u.type="sawtooth",u.frequency.value=t*Math.pow(2,h/12)*2*Math.pow(2,c/1200),u.connect(a),u.start(e),u.stop(e+i+.05)}}_bass(t,e,i){let n=this.audio.ctx,s=this._bus(),o=n.createOscillator();o.type="triangle",o.frequency.value=t;let a=n.createGain();a.gain.setValueAtTime(i*.22,e),a.gain.exponentialRampToValueAtTime(.001,e+.42),o.connect(a),a.connect(s),o.start(e),o.stop(e+.45)}_arp(t,e,i,n){let s=this.audio.ctx,o=this._bus(),a=s.createOscillator();a.type="square",a.frequency.value=t;let l=s.createGain();l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(.001,e+i);let h=s.createBiquadFilter();h.type="lowpass",h.frequency.value=2600,a.connect(h),h.connect(l),l.connect(o),a.start(e),a.stop(e+i+.02)}_kick(t,e){let i=this.audio.ctx,n=this._bus(),s=i.createOscillator();s.type="sine",s.frequency.setValueAtTime(130,t),s.frequency.exponentialRampToValueAtTime(42,t+.13);let o=i.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(.001,t+.22),s.connect(o),o.connect(n),s.start(t),s.stop(t+.24)}_snare(t,e){let i=this.audio.ctx,n=this._bus(),s=i.createBufferSource();s.buffer=this.audio._noise;let o=i.createBiquadFilter();o.type="bandpass",o.frequency.value=1900,o.Q.value=.8;let a=i.createGain();a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.15),s.connect(o),o.connect(a),a.connect(n),s.start(t),s.stop(t+.17)}_hat(t,e){let i=this.audio.ctx,n=this._bus(),s=i.createBufferSource();s.buffer=this.audio._noise;let o=i.createBiquadFilter();o.type="highpass",o.frequency.value=7e3;let a=i.createGain();a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(.001,t+.05),s.connect(o),o.connect(a),a.connect(n),s.start(t),s.stop(t+.06)}};var wu=96,Eu=r=>Math.round((r-9)/wu)*wu+9,Po=class{constructor(t){let e=[];for(let o=0;o<78;o++){let a=o/78*Math.PI*2,l=34+Math.random()*64,h=16+Math.random()*84,c=new ze(l,h);c.translate(0,h/2-2,0);let u=new re().makeRotationY(-(a+Math.PI/2));u.setPosition(Math.cos(a)*430,0,Math.sin(a)*430),c.applyMatrix4(u),e.push(c.index?c.toNonIndexed():c)}let s=Qr(e,!1);for(let o of e)o.dispose();this.mat=new Ot({color:"#2c3a55",fog:!1,side:Ze}),this.mesh=new V(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-.5,t.add(this.mesh)}update(t,e){this.mesh.position.set(t.x,0,t.z),this.mat.color.copy(e).multiplyScalar(.72)}},Lo=class{constructor(t,e=5){this.cars=[];let i=new Tt({color:"#8b95a8",roughness:.45,metalness:.5}),n=new Tt({color:"#1d2530",roughness:.5,metalness:.4});for(let s=0;s<e;s++){let o=new Kt,a=new V(new xt(1.75,.85,3.7),i);a.position.y=.6,a.castShadow=!0,o.add(a);let l=new V(new xt(1.55,.7,1.9),n);l.position.y=1.32,l.castShadow=!0,o.add(l);let h=new V(new xt(1.3,.12,.1),new Ot({color:"#ffe9a8"}));h.position.set(0,.6,-1.9),o.add(h),o.visible=!1,t.add(o),this.cars.push({group:o,axis:"z",coord:0,along:0,speed:11,active:!1})}}_respawn(t,e){t.axis=Math.random()<.5?"z":"x",t.speed=9+Math.random()*8;let i=Math.random()<.5?1:-1,n=e.x+(Math.random()-.5)*20,s=e.z+(Math.random()-.5)*20;t.axis==="z"?(t.coord=Eu(n),t.along=e.z-i*(70+Math.random()*40),t.group.rotation.y=0):(t.coord=Eu(s),t.along=e.x-i*(70+Math.random()*40),t.group.rotation.y=Math.PI/2),t.dir=i,t.active=!0,t.group.visible=!0}update(t,e){for(let i of this.cars){if(!i.active){Math.random()<.02&&this._respawn(i,e);continue}i.along+=i.speed*i.dir*t;let n,s;i.axis==="z"?(n=i.coord,s=i.along):(n=i.along,s=i.coord),i.group.position.set(n,0,s),Math.hypot(n-e.x,s-e.z)>140&&this._respawn(i,e)}}},Io=class{constructor(t,e=12){this.items=[];let i=new Tt({color:"#8fa8c8",roughness:.06,metalness:.9,transparent:!0,opacity:.5,depthWrite:!1}),n=new ii(1,14);for(let s=0;s<e;s++){let o=new V(n,i);o.rotation.x=-Math.PI/2,o.position.y=.035,o.visible=!1,t.add(o),this.items.push(o)}this.mat=i,this.t=0}update(t,e,i){this.mat.opacity=.5*i,this.t-=t;let n=this.t<=0;n&&(this.t=2.5);for(let s of this.items){if(i<.05){s.visible=!1;continue}s.visible=!0,n&&(s.position.set(e.x+(Math.random()-.5)*70,.035,e.z+(Math.random()-.5)*70),s.scale.setScalar(1.4+Math.random()*2.6))}}},Do=class{constructor(t,e=40){this.scene=t,this.max=e,this.items=[];let i=new zr(.35,.5,14);i.rotateX(-Math.PI/2),this.geo=i,this.mat=new Ot({color:"#cfe6ff",transparent:!0,opacity:.5,depthWrite:!1})}spawn(t,e){if(this.items.length>=this.max)return;let i=new V(this.geo,this.mat.clone());i.position.set(t,.04,e),i.scale.setScalar(.4),this.scene.add(i),this.items.push({m:i,t:0,life:.7})}update(t,e,i){if(e>.15&&Math.random()<t*26*e){let n=Math.random()*Math.PI*2,s=Math.random()*22;this.spawn(i.pos.x+Math.cos(n)*s,i.pos.z+Math.sin(n)*s)}for(let n=this.items.length-1;n>=0;n--){let s=this.items[n];s.t+=t;let o=s.t/s.life;s.m.scale.setScalar(.4+o*2.4),s.m.material.opacity=Math.max(0,.5*(1-o)),s.t>=s.life&&(this.scene.remove(s.m),s.m.material.dispose(),this.items.splice(n,1))}}dispose(){for(let t of this.items)this.scene.remove(t.m),t.m.material.dispose();this.items.length=0,this.geo.dispose(),this.mat.dispose()}},ko=class{constructor(t){this.scene=t,this.patches=[],this.t=0,this.amount=0;let e=new ii(1,10);e.rotateX(-Math.PI/2),this.geo=e}update(t,e,i){if(this.amount=Math.max(0,Math.min(1,this.amount+(e?t*.03:-t*.08))),this.t+=t,this.amount>.05&&this.t>.12&&this.patches.length<60){this.t=0;let n=Math.random()*Math.PI*2,s=Math.random()*18,o=new V(this.geo,new Ot({color:"#eef6ff",transparent:!0,opacity:.32*this.amount,depthWrite:!1}));o.position.set(i.pos.x+Math.cos(n)*s,.035,i.pos.z+Math.sin(n)*s),o.scale.setScalar(1.6+Math.random()*2.4),o.rotation.y=Math.random()*Math.PI,this.scene.add(o),this.patches.push({m:o,life:26})}for(let n=this.patches.length-1;n>=0;n--){let s=this.patches[n];s.life-=t,s.life<=0&&(this.scene.remove(s.m),s.m.material.dispose(),this.patches.splice(n,1))}}dispose(){for(let t of this.patches)this.scene.remove(t.m),t.m.material.dispose();this.patches.length=0,this.geo.dispose()}};var X_=`
attribute float size; attribute float alpha; attribute vec3 pcolor;
varying float vAlpha; varying vec3 vColor;
void main(){
  vAlpha = alpha; vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (320.0 / max(1.0, -mv.z));
  gl_Position = projectionMatrix * mv;
}`,q_=`
varying float vAlpha; varying vec3 vColor;
void main(){
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;
  float a = vAlpha * smoothstep(0.5, 0.1, d);
  gl_FragColor = vec4(vColor, a);
}`,Uo=class{constructor(t,e,i){this.count=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.head=0;let n=new ae;n.setAttribute("position",new ve(this.pos,3)),n.setAttribute("pcolor",new ve(this.col,3)),n.setAttribute("size",new ve(this.size,1)),n.setAttribute("alpha",new ve(this.alpha,1)),n.boundingSphere=new Ti(new w,1e6);let s=new Me({vertexShader:X_,fragmentShader:q_,transparent:!0,depthWrite:!1,blending:i});this.points=new kr(n,s),this.points.frustumCulled=!1,t.add(this.points),this.geo=n}emit(t,e,i,n){let s=this.head;this.head=(this.head+1)%this.count;let o=n.spread??2.5;this.pos[s*3]=t,this.pos[s*3+1]=e,this.pos[s*3+2]=i,this.vel[s*3]=(Math.random()-.5)*o+(n.vx||0),this.vel[s*3+1]=(Math.random()-.5)*o+(n.vy||0),this.vel[s*3+2]=(Math.random()-.5)*o+(n.vz||0);let a=n.color;this.col[s*3]=a[0],this.col[s*3+1]=a[1],this.col[s*3+2]=a[2],this.size[s]=n.size??.15,this.alpha[s]=1,this.life[s]=this.maxLife[s]=n.life??.6,this.grav[s]=n.gravity??6}update(t){let e=!1;for(let i=0;i<this.count;i++){if(this.life[i]<=0){this.alpha[i]!==0&&(this.alpha[i]=0,e=!0);continue}e=!0,this.life[i]-=t,this.vel[i*3+1]-=this.grav[i]*t,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t,this.alpha[i]=Math.max(0,this.life[i]/this.maxLife[i])}e&&(this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.alpha.needsUpdate=!0,this.geo.attributes.pcolor.needsUpdate=!0,this.geo.attributes.size.needsUpdate=!0)}},No=class{constructor(t){this.blood=new Uo(t,400,Fi),this.spark=new Uo(t,400,pr)}bloodBurst(t,e=10){for(let i=0;i<e;i++)this.blood.emit(t.x,t.y,t.z,{color:[.55,.03,.05],spread:3.2,size:.22,life:.5,gravity:9})}smoke(t,e=3){for(let i=0;i<e;i++)this.blood.emit(t.x,t.y,t.z,{color:[.72,.72,.74],spread:.5,vy:.9,size:.16,life:1.1,gravity:-.4})}casing(t,e){for(let i=0;i<2;i++)this.spark.emit(t.x,t.y,t.z,{color:[.95,.82,.4],spread:1.6,vy:2.2,size:.05,life:.9,gravity:12})}bloodSpurt(t,e,i=8){for(let n=0;n<i;n++){let s=e||{x:0,y:0,z:0};this.blood.emit(t.x,t.y,t.z,{color:[.62,.08,.08],spread:.5,vx:s.x*3+(Math.random()-.5)*2,vy:s.y*2+Math.random()*1.6,vz:s.z*3+(Math.random()-.5)*2,size:.09,life:.8,gravity:9})}}impact(t,e=6,i=[1,.85,.5]){for(let n=0;n<e;n++)this.spark.emit(t.x,t.y,t.z,{color:i,spread:2.6,size:.1,life:.25,gravity:4})}rain(t,e=8){for(let i=0;i<e;i++)this.blood.emit(t.x+(Math.random()-.5)*46,t.y+15+Math.random()*12,t.z+(Math.random()-.5)*46,{color:[.62,.72,.9],spread:.4,vy:-26,size:.09,life:.7,gravity:0})}leaves(t,e=2){for(let i=0;i<e;i++)this.blood.emit(t.x+(Math.random()-.5)*26,t.y+3+Math.random()*6,t.z+(Math.random()-.5)*26,{color:[.34+Math.random()*.18,.5,.24],spread:.7,vy:-.7,size:.18,life:2.4,gravity:.4})}explosion(t,e=40){for(let i=0;i<e;i++)this.spark.emit(t.x,t.y,t.z,{color:[1,.6+Math.random()*.3,.2],spread:8,size:.3,life:.6,gravity:8});for(let i=0;i<e/2;i++)this.blood.emit(t.x,t.y,t.z,{color:[.2,.2,.22],spread:4,size:.5,life:1.1,gravity:1})}update(t){this.blood.update(t),this.spark.update(t)}};var Su={Walker:{spot:{f:300,d:.22,w:"sawtooth",g:.11,to:210},death:{f:260,d:.5,w:"sawtooth",g:.12,to:120},surrender:{f:300,d:.4,w:"triangle",g:.1,to:200}},Runner:{spot:{f:520,d:.13,w:"square",g:.1,to:760},death:{f:480,d:.3,w:"square",g:.11,to:200},surrender:{f:460,d:.3,w:"triangle",g:.09,to:240}},Crawler:{spot:{f:700,d:.1,w:"square",g:.09,to:980},death:{f:640,d:.24,w:"square",g:.1,to:260},surrender:{f:600,d:.26,w:"triangle",g:.08,to:300}},Spitter:{spot:{f:240,d:.3,w:"sawtooth",g:.11,to:180},death:{f:220,d:.5,w:"sawtooth",g:.11,to:90},surrender:{f:240,d:.4,w:"triangle",g:.09,to:170}},Bloater:{spot:{f:130,d:.42,w:"sawtooth",g:.13,to:90},layer:.5,death:{f:110,d:.7,w:"sawtooth",g:.14,to:60},surrender:{f:130,d:.5,w:"triangle",g:.1,to:90}},Screamer:{spot:{f:880,d:.5,w:"sawtooth",g:.13,to:1500},death:{f:900,d:.6,w:"sawtooth",g:.13,to:300},surrender:{f:820,d:.4,w:"triangle",g:.1,to:400}},Brute:{spot:{f:95,d:.5,w:"sawtooth",g:.16,to:60},layer:.5,death:{f:80,d:.9,w:"sawtooth",g:.16,to:40},surrender:{f:95,d:.6,w:"triangle",g:.12,to:70}},Pickpocket:{spot:{f:620,d:.09,w:"square",g:.08,to:820},death:{f:560,d:.2,w:"square",g:.09,to:240},surrender:{f:540,d:.3,w:"triangle",g:.09,to:260}},Behemoth:{spot:{f:62,d:.9,w:"sawtooth",g:.2,to:38},layer:.5,death:{f:55,d:1.4,w:"sawtooth",g:.2,to:28},surrender:{f:62,d:.8,w:"triangle",g:.14,to:44}},Warlord:{spot:{f:180,d:.34,w:"square",g:.13,to:140},death:{f:160,d:.7,w:"square",g:.13,to:70},surrender:{f:180,d:.5,w:"triangle",g:.1,to:130}},Vandal:{spot:{f:400,d:.16,w:"square",g:.1,to:560},death:{f:380,d:.3,w:"square",g:.1,to:160},surrender:{f:400,d:.35,w:"triangle",g:.09,to:200}},Thief:{spot:{f:470,d:.12,w:"square",g:.09,to:620},death:{f:440,d:.26,w:"square",g:.1,to:180},surrender:{f:470,d:.32,w:"triangle",g:.09,to:220}},Burglar:{spot:{f:350,d:.15,w:"square",g:.1,to:500},death:{f:330,d:.3,w:"square",g:.1,to:150},surrender:{f:350,d:.34,w:"triangle",g:.09,to:190}},Dealer:{spot:{f:210,d:.28,w:"sawtooth",g:.12,to:160},death:{f:190,d:.5,w:"sawtooth",g:.12,to:80},surrender:{f:210,d:.4,w:"triangle",g:.1,to:150}},Carjacker:{spot:{f:290,d:.2,w:"square",g:.11,to:420},death:{f:270,d:.36,w:"square",g:.11,to:130},surrender:{f:290,d:.36,w:"triangle",g:.1,to:180}},Kidnapper:{spot:{f:165,d:.36,w:"sawtooth",g:.13,to:120},death:{f:150,d:.6,w:"sawtooth",g:.13,to:65},surrender:{f:165,d:.45,w:"triangle",g:.11,to:110}},_default:{spot:{f:420,d:.16,w:"sawtooth",g:.11,to:640},death:{f:360,d:.35,w:"sawtooth",g:.11,to:150},surrender:{f:380,d:.4,w:"triangle",g:.1,to:220}}},Oo=class{constructor(){this.ctx=null,this.master=null,this.muted=!1,this.volume=.6,this._noise=null,this._wind=null,this._rain=null,this._out=null,this._amb=null,this._rev=null,this._windGain=null,this._rainGain=null}_ensure(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.6,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate*2,i=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=i.getChannelData(0);for(let s=0;s<e;s++)n[s]=Math.random()*2-1;this._noise=i}resume(){this._ensure(),this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:this.volume),this.muted}setVolume(t){this.volume=t,this.master&&!this.muted&&(this.master.gain.value=t)}_noiseBurst({dur:t=.12,freq:e=1200,q:i=1,gain:n=.5,type:s="lowpass",delay:o=0}){if(!this.ctx||this.muted)return;let a=this.ctx.currentTime+o,l=this.ctx.createBufferSource();l.buffer=this._noise;let h=this.ctx.createBiquadFilter();h.type=s,h.frequency.value=e*(this._outPitch||1),h.Q.value=i;let c=this.ctx.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+t+.02),l.connect(h),h.connect(c),c.connect(this._out||this.master),l.start(a),l.stop(a+t+.06)}_tone({freq:t=440,dur:e=.15,type:i="sine",gain:n=.2,slideTo:s=null,delay:o=0}){if(!this.ctx||this.muted)return;let a=this.ctx.currentTime+o,l=this._outPitch||1,h=this.ctx.createOscillator();h.type=i,h.frequency.setValueAtTime(t*l,a),s&&h.frequency.exponentialRampToValueAtTime(Math.max(1,s*l),a+e);let c=this.ctx.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(.001,a+e),h.connect(c),c.connect(this._out||this.master),h.start(a),h.stop(a+e+.03)}shot(t="rifle"){this._ensure(),t==="shotgun"?(this._noiseBurst({dur:.22,freq:700,gain:.7}),this._tone({freq:120,dur:.18,type:"square",gain:.25,slideTo:40})):t==="sniper"?(this._noiseBurst({dur:.3,freq:500,gain:.8}),this._tone({freq:90,dur:.25,type:"sawtooth",gain:.3,slideTo:30})):t==="pistol"||t==="revolver"?this._noiseBurst({dur:.1,freq:1800,gain:.45}):t==="melee"?this._noiseBurst({dur:.08,freq:2400,q:3,gain:.35,type:"bandpass"}):t==="crossbow"?this._tone({freq:320,dur:.1,type:"triangle",gain:.2,slideTo:900}):t==="lmg"?this._noiseBurst({dur:.1,freq:1300,gain:.5}):t==="launcher"?(this._noiseBurst({dur:.35,freq:380,gain:.7}),this._tone({freq:70,dur:.3,type:"sawtooth",gain:.3,slideTo:25})):this._noiseBurst({dur:.11,freq:1500,gain:.5})}dryFire(){this._ensure(),this._noiseBurst({dur:.03,freq:3e3,q:6,gain:.25,type:"bandpass"})}reload(){this._ensure(),this._tone({freq:300,dur:.05,type:"square",gain:.15}),this._tone({freq:220,dur:.06,type:"square",gain:.15,delay:.12}),this._noiseBurst({dur:.05,freq:2600,q:5,gain:.18,type:"bandpass",delay:.22})}switchWeapon(){this._ensure(),this._tone({freq:520,dur:.05,type:"square",gain:.13,slideTo:780})}explodeAmmo(){this._noiseBurst({dur:.4,freq:260,gain:.8})}hit(){this._ensure(),this._noiseBurst({dur:.06,freq:3e3,q:4,gain:.3,type:"bandpass"})}headshot(){this._ensure(),this._tone({freq:1400,dur:.09,type:"square",gain:.22}),this._tone({freq:2100,dur:.11,type:"square",gain:.18,delay:.06})}impact(t="concrete"){this._ensure(),t==="metal"?this._noiseBurst({dur:.1,freq:3400,q:6,gain:.28,type:"bandpass"}):t==="wood"?this._noiseBurst({dur:.09,freq:900,q:2,gain:.3}):this._noiseBurst({dur:.08,freq:1600,q:2,gain:.26})}hurt(){this._ensure(),this._tone({freq:180,dur:.2,type:"sawtooth",gain:.25,slideTo:80})}land(){this._ensure(),this._noiseBurst({dur:.12,freq:300,gain:.35})}footstep(t="road"){this._ensure();let e=t==="grass"?500:t==="sand"?700:1200;this._noiseBurst({dur:.05,freq:e,q:1.4,gain:.13})}groan(){this._ensure(),this._tone({freq:90+Math.random()*40,dur:.5,type:"sawtooth",gain:.12,slideTo:60})}scream(){this._ensure(),this._tone({freq:700,dur:.5,type:"sawtooth",gain:.16,slideTo:300}),this._tone({freq:1050,dur:.45,type:"square",gain:.1,slideTo:500,delay:.05})}hiss(){this._ensure(),this._noiseBurst({dur:.6,freq:2600,q:1,gain:.2,type:"highpass"})}bossRoar(){this._ensure(),this._tone({freq:70,dur:1.1,type:"sawtooth",gain:.35,slideTo:42}),this._noiseBurst({dur:.9,freq:300,gain:.4}),this._tone({freq:150,dur:.8,type:"square",gain:.14,slideTo:90,delay:.1})}pickup(){this._ensure(),this._tone({freq:660,dur:.08,type:"triangle",gain:.2}),this._tone({freq:990,dur:.09,type:"triangle",gain:.2,delay:.07})}coin(){this._ensure(),this._tone({freq:1320,dur:.06,type:"square",gain:.12})}token(){this._ensure(),[880,1170,1560].forEach((t,e)=>this._tone({freq:t,dur:.12,type:"triangle",gain:.16,delay:e*.06}))}levelup(){this._ensure(),[523,659,784,1047].forEach((t,e)=>this._tone({freq:t,dur:.18,type:"triangle",gain:.22,delay:e*.09}))}buy(){this._ensure(),this._tone({freq:880,dur:.07,type:"square",gain:.18}),this._tone({freq:1180,dur:.1,type:"square",gain:.18,delay:.08})}error(){this._ensure(),this._tone({freq:240,dur:.12,type:"square",gain:.2,slideTo:150})}ui(t="click"){this._ensure(),t==="hover"?this._tone({freq:900,dur:.03,type:"sine",gain:.06}):this._tone({freq:620,dur:.05,type:"square",gain:.12})}explosion(){this._ensure(),this._noiseBurst({dur:.6,freq:220,gain:.9}),this._tone({freq:70,dur:.5,type:"sawtooth",gain:.35,slideTo:25})}siren(){this._ensure(),this._tone({freq:700,dur:.4,type:"sine",gain:.12,slideTo:1e3}),this._tone({freq:1e3,dur:.4,type:"sine",gain:.12,slideTo:700,delay:.4})}thunder(){this._ensure(),this._noiseBurst({dur:1.4,freq:140,gain:.5}),this._tone({freq:55,dur:1.2,type:"sawtooth",gain:.22,slideTo:30,delay:.15})}warn(){this._ensure(),this._tone({freq:300,dur:.3,type:"square",gain:.16,slideTo:500})}_ensureReverb(){if(this._rev||!this.ctx)return;let t=this.ctx,e=Math.floor(t.sampleRate*1.7),i=t.createBuffer(2,e,t.sampleRate);for(let o=0;o<2;o++){let a=i.getChannelData(o);for(let l=0;l<e;l++)a[l]=(Math.random()*2-1)*Math.pow(1-l/e,2.6)}let n=t.createConvolver();n.buffer=i;let s=t.createGain();s.gain.value=0,n.connect(s),s.connect(this.master),this.master.connect(n),this._rev={wet:s}}setReverb(t){this._ensureReverb(),this._rev&&(this._rev.wet.gain.value=Math.max(0,Math.min(.6,t*.6)))}_busFor(t,e,i){let n=this.ctx.createGain();n.gain.value=e;let s=n;if(i){let o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=620,n.connect(o),s=o}if(this.ctx.createStereoPanner){let o=this.ctx.createStereoPanner();o.pan.value=Math.max(-1,Math.min(1,t)),s.connect(o),s=o}return s.connect(this.master),n}_occluded(t,e){if(!this.world)return!1;let i=Math.hypot(t,e),n=Math.min(6,Math.max(1,Math.round(i/8)));for(let s=1;s<=n;s++){let o=s/(n+1),a=this.px+t*o,l=this.pz+e*o;for(let h of this.world.collidersNear(a,l,1.2,this._ocCols||(this._ocCols=[])))if(h.height>2.4&&a>h.minX&&a<h.maxX&&l>h.minZ&&l<h.maxZ)return!0}return!1}at(t,e,i,n=48,s=1){if(!this.ctx||this.muted)return!1;let o=Math.hypot(e,i);if(o>n)return!1;let a=Math.max(0,1-o/n);if(a<.02)return!1;let l=this._occluded(e,i);l&&(a*=.55);let h=e/Math.max(8,o);this._out=this._busFor(h,a,l),this._outPitch=s;try{t()}finally{this._out=null,this._outPitch=1}return!0}setListener(t,e){this.px=t,this.pz=e}doppler(t){return Math.max(.7,Math.min(1.4,1+t*.05))}bark(t="spot",e=null){this._ensure();let i=Su[e]||Su._default,n=t==="surrender"?i.surrender:t==="death"?i.death:i.spot;this._tone({freq:n.f,dur:n.d,type:n.w,gain:n.g,slideTo:n.to}),i.layer&&this._tone({freq:n.f*i.layer,dur:n.d*.8,type:"triangle",gain:n.g*.5,slideTo:n.to*i.layer})}setAmbience(t){if(this._ensure(),!this.ctx||this._ambKind===t)return;if(this._ambKind=t,!this._amb){let i=this.ctx,n=i.createBufferSource();n.buffer=this._noise,n.loop=!0;let s=i.createBiquadFilter();s.type="bandpass",s.Q.value=.7;let o=i.createGain();o.gain.value=0,n.connect(s),s.connect(o),o.connect(this.master),n.start(),this._amb={gain:o,filt:s}}let e={park:[900,.03],jungle:[1200,.045],plaza:[700,.02],industrial:[180,.035],downtown:[140,.03],city:[300,.022],residential:[420,.018],snow:[260,.02],desert:[340,.022],swamp:[520,.03],playground:[800,.02],school:[600,.018]}[t]||[400,.018];this._amb.filt.frequency.value=e[0],this._amb.gain.gain.value=e[1]}_loop(t){let e=this.ctx,i=this.master,n=e.createBufferSource();n.buffer=this._noise,n.loop=!0;let s=e.createBiquadFilter(),o=e.createGain();return o.gain.value=0,t==="wind"?(s.type="lowpass",s.frequency.value=420,s.Q.value=.6):(s.type="highpass",s.frequency.value=1200),n.connect(s),s.connect(o),o.connect(i),n.start(),{gain:o,src:n}}setWind(t){this._ensure(),this.ctx&&(this._wind||(this._wind=this._loop("wind")),this._wind.gain.gain.value=t*.16)}setRain(t){this._ensure(),this.ctx&&(this._rain||(this._rain=this._loop("rain")),this._rain.gain.gain.value=t*.12)}};var is=class{constructor(t,e={}){this.canvas=t,this.cfg=e,this.running=!1,this.stats={kills:0,score:0,time:0},this.magnetTimer=0,this.focus=100,this.slowmo=!1,this.timeScale=1,this._enemyTracers=[],this._tracerPool=[],this._lastHealth=100,this._dead=!1,this.debug=!1,this.mapOpen=!1,this._smooth=1,this._leafT=0,this._hudDt=.016,this.wave={n:0,state:"idle",t:3,alive:0},this.combo=0,this._lastKillAt=-99,this._hitStop=0}init(){try{return this._boot()}catch(t){throw this._bootError(t),t}}_bootError(t){let e=t&&t.message||String(t),i=document.getElementById("loading");if(!i){console.error("[boot]",t);return}i.classList.remove("done"),i.innerHTML='<div class="load-fail"><h2>Could not start</h2><p>The game failed while setting up. The technical detail is below \u2014 please report it with your browser and device.<br><br><code>'+e.replace(/[<>&]/g,"")+"</code></p></div>",console.error("[boot]",t)}_boot(){let t=vu();this.mods=t.mods,this.modProblems=t.problems,this.modPool=t.pool,t.extraBiomes.length&&(this.cfg.worldWeights=(this.cfg.worldWeights||[]).concat(t.extraBiomes)),t.pool.length&&(this.cfg.pool=(this.cfg.pool||["walker","runner"]).concat(t.pool));let e=this.canvas;this.renderer=new ys({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(innerWidth,innerHeight),this.settings=new Mo,this._bloomEnabled=!1,this.meta=new wo(this.cfg.metaKey||"ow-meta"),this.meta.onUnlock=c=>this.hud.achievement(c),this.renderer.shadowMap.enabled=this.settings.get("shadows"),this.renderer.shadowMap.type=bl,this.renderer.toneMapping=wl,this.renderer.toneMappingExposure=1.18,this.scene=new $n,this.scene.fog=new Dr(this.cfg.fog??"#bcd4ec",140,520),this.sky=new bo(this.scene),this.timeOfDay=this.cfg.startTime??.3,this.dayLength=this.cfg.dayLength??300,this._c1=new ct,this._c2=new ct,this._c3=new ct,this._c4=new ct,this._sunDir=new w(0,1,0),this.camera=new Ie(78,innerWidth/innerHeight,.08,700),this.scene.add(this.camera);let i=new Gr("#a8c4f0","#33456a",1);this.scene.add(i),this.hemi=i;let n=new Xr("#fff2dc",1.5);n.position.set(80,140,60),n.castShadow=!0,n.shadow.mapSize.set(1536,1536),n.shadow.camera.near=5,n.shadow.camera.far=300,this._shadowExtent=52,n.shadow.camera.left=-this._shadowExtent,n.shadow.camera.right=this._shadowExtent,n.shadow.camera.top=this._shadowExtent,n.shadow.camera.bottom=-this._shadowExtent,n.shadow.bias=-4e-4,n.shadow.normalBias=.5,this.scene.add(n),this.scene.add(n.target),this.sun=n;let s=new qr("#4a5f88",.8);this.scene.add(s),this.amb=s,this.world=new Qn(this.scene,{seed:this.cfg.seed??20261017,weights:this.cfg.worldWeights,clearZones:this.cfg.clearZones??[{x:0,z:0,r:20},{x:74,z:0,r:16}]}),this.player=new io(this.camera,this.world);let o=this.cfg.safeHouseX??0,a=this.cfg.safeHouseZ??0,l=this.cfg.safeHouseRadius??13;this.compound=ou(this.world,o,a,l,{doorSide:"north",gateWidth:5.2,colour:"#5a6070"});let h=this.cfg.spawn?new w(this.cfg.spawn.x,0,this.cfg.spawn.z):new w(o,0,a+l+3.5);if(this.player.reset(h),this.spawnPos=h.clone(),this.player.yaw=Math.PI,this.input=new no(e),this.input.actionLabels=this.cfg.actionLabels||null,this.hud=new lo,this.particles=new No(this.scene),this.audio=new Oo,this.arsenal=new ho(this.camera,this.scene,this.player,this.audio),this.loot=new mo(this.scene,this.audio),this.progression=new yo({key:this.cfg.progressionKey??"ow-progress",weaponList:["knife","pistol","smg","shotgun","rifle","sniper"]}),this.director=new po(this.scene,this.world,{pool:this.cfg.pool??["walker","runner"],maxAlive:this.cfg.maxAlive??14,autoSpawn:this.cfg.autoSpawn??!0,spawnInterval:this.cfg.spawnInterval??2.2}),this.store=new vo(this.scene,this.world,this.audio),this.safeZones=[],this.director.safeZones=this.safeZones,this.safeHouse=new Ds(this.scene,this.audio,{x:this.cfg.safeHouseX??0,z:this.cfg.safeHouseZ??0,radius:this.cfg.safeHouseRadius??13,armory:this.cfg.armory??!1,title:this.cfg.safeHouseTitle??"SAFE HOUSE"}),this.safeHouse.onBuy=c=>this._onBuy(c),this.safeHouse.arsenal=this.arsenal,this.store.arsenal=this.arsenal,this.arsenal.progression=this.progression,this.upgradeStation=new Ds(this.scene,this.audio,{x:74,z:0,radius:9,armory:!1,title:"UPGRADE STATION"}),this.upgradeStation.onBuy=c=>this._onBuy(c),this.upgradeStation.arsenal=this.arsenal,this.cfg.persist&&this.progression.load())for(let c of this.progression.unlocked)this.arsenal.add(c);for(let c of this.cfg.startingWeapons??["knife","pistol"])this.progression.unlocked.add(c),this.arsenal.add(c);return this.arsenal.slots.length&&this.arsenal.switchTo(this.arsenal.slots.length-1),this.arsenal.onHit=(c,u,f)=>{this.hud.hitmarker(!1)},this.arsenal.onKill=c=>{this._onKill(c)},this.loot.onPickup=(c,u,f)=>this._onPickup(c,u,f),this.progression.onLevelUp=(c,u)=>this._onLevelUp(c,u),this.director.onSpawn=c=>{},this.store.onBuy=c=>this._onBuy(c),this.hud&&(this.hud.keyName=c=>this.keyName(c)),this.input.onPause=()=>{this.input.isTouch||this.pause()},this.world.warmup(this.player.pos,1),this._clock=new $r,this._applyProgression(),this.cfg.campaign&&(this.campaign=new Ro({hud:this.hud,audio:this.audio,music:this.music,onReward:c=>{this.progression.addCoins(c),this.meta.add("coins",c)}})),this._initExtras(),this._bindUI(),this._buildMenus(),this._applySettings(),this.tables={WEAPONS:Pe,ENEMY_TYPES:Ci,WEAPON_TRACKS:Ri,ARMOUR:ni,ARMOUR_TRACK:Ge,ACTIONS:Rs},this._wantBloom=!(/(\?|&)nobloom/.test(location.search)||!this.settings.get("bloom")),this._bloomEnabled=!1,this._hideLoading(),this}_hideLoading(){typeof clearTimeout=="function"&&window.__bootWatch&&clearTimeout(window.__bootWatch);let t=document.getElementById("loading");t&&(t.classList.add("done"),setTimeout(()=>t.remove(),420))}_initExtras(){this.music=new Co(this.audio),this.skyline=new Po(this.scene),this.traffic=new Lo(this.scene,this.cfg.traffic??5),this.puddles=new Io(this.scene),this.ripples=new Do(this.scene),this.snow=new ko(this.scene),this.lampLights=[];for(let t=0;t<3;t++){let e=new Ve("#ffd98a",0,26,2);e.visible=!1,this.scene.add(e),this.lampLights.push(e)}this.chevron=new V(new Xi(.75,1.5,4),new Ot({color:"#38f2c8",transparent:!0,opacity:.85,fog:!1})),this.chevron.rotation.x=Math.PI,this.chevron.visible=!1,this.scene.add(this.chevron),this._enemyShots=[],this._shotPool=[],this.waypoint=null,this.hud.onWaypoint=t=>{this.waypoint=t,this.audio.buy(),this.hud.notify("Waypoint set  "+Math.round(Math.hypot(t.x-this.player.pos.x,t.z-this.player.pos.z))+"m")},this.replay={buf:[],max:1200,playing:!1,idx:0,acc:0},this._solidBuf=[],this._ctx={hittables:[],enemies:[],particles:null},this._noHitT=0,this._runStart=0,this._pingRay=new Kn,this.ping=null,this.weather={rain:0,target:0,timer:50,lightning:0},this.director.onDeath=t=>this._onEnemyDeath(t),this.director.onGib=(t,e)=>this._gib(t,e),this.director.onWeakBreak=t=>{this.hud.notify("CORE DESTROYED \u2014 "+t.t.name+" staggered",!0),this.audio.explodeAmmo?this.audio.explodeAmmo():this.audio.impact("metal"),this.particles.impact(t.group.position.clone().setY(1.8),26,[1,.4,.6]),this._gib(t,6);let e=120+Math.round(Math.random()*120);this.progression.addCoins(e),this.meta.add("coins",e),this.campaign&&this.campaign.bump("cores")},this.director.onSummon=t=>this._onSummon(t),this.player.onStep=()=>{this.audio.footstep(this._surface()),this.director.makeNoise(this.player.pos,this.player.crouch>.5?5:13)},this.arsenal.onShot=(t,e)=>{this.director.makeNoise(t,e.silent?9:58),this.input.rumble(e.kind==="shotgun"||e.kind==="sniper"?.6:.25,70)},this.arsenal.onDamage=(t,e,i)=>this.hud.damageAt(t,e,i),this.arsenal.onHit=(t,e,i,n)=>{let s=this.camera.getWorldDirection(new w);this.particles.bloodSpurt(e,s,n?12:7)},this.arsenal.onWorldHit=(t,e,i)=>this._onWorldHit(t,e,i),this.throwables=new Eo(this.scene,this.world,this.player,this.audio,this.particles),this.vehicles=this.cfg.vehicles===!1?null:new Ao(this.scene,this.world,this.player,this.audio),this.base=new xo(this.scene,this.world,this.audio),this.base.setOrigin(this.player.pos);for(let t of Object.keys(this.progression.installs||{}))this.progression.installs[t]&&this.base.install(t,{coins:1/0,spend(){}});this.ally=this.cfg.ally?new To(this.scene,this.world,this.player,this.audio,this.cfg.allyName||"Rook"):null,this.hud.camera=this.camera,this.player.onLand=()=>this.audio.land(),this.arsenal.onHeadshot=()=>{this.hud.headshot(),this.audio.headshot(),this.meta.add("headshots"),this.campaign&&this.campaign.bump("headshots")}}_surface(){let t=this.player.pos,e=this.world.chunkSize,i=this.world.chunks.get(Math.floor(t.x/e)+","+Math.floor(t.z/e));return i?i.biome==="park"||i.biome==="jungle"?"grass":i.biome==="playground"?"sand":"road":"road"}_applySettings(){let t=this.settings;this.audio.setVolume(t.get("volume")),this.audio.muted=t.get("volume")<=.001,this.music&&this.music.setVolume(t.get("musicVolume")),this.player.baseFov=t.get("fov"),this.player.lookScale=.0022*t.get("sensitivity"),this.player.invertY=t.get("invertY"),this.player.shakeEnabled=t.get("shake"),this.arsenal.setTheme(t.get("weaponTheme"));let e=t.get("binds");e&&this.input&&Object.assign(this.input.binds,e);let i=!!t.get("shadows");this.renderer.shadowMap.enabled!==i&&(this.renderer.shadowMap.enabled=i,this.renderer.shadowMap.needsUpdate=!0,this.scene.traverse(h=>{if(h.material){let c=h.material;(Array.isArray(c)?c:[c]).forEach(u=>{u.needsUpdate=!0})}})),!/(\?|&)nobloom/.test(location.search)&&!!t.get("bloom")?this._wantBloom||(this._wantBloom=!0,this._bloomTried=!1):(this._wantBloom=!1,this._bloomEnabled=!1,this.bloom&&(this.bloom.dispose&&this.bloom.dispose(),this.bloom=null)),this._applyRenderScale(),this.hud.setFpsVisible(t.get("showFps")),this.hud.applyVisibility({minimap:t.get("hudMinimap"),compass:t.get("hudCompass"),killfeed:t.get("hudKillfeed"),credit:t.get("hudCredit"),objective:!0,topbar:!0}),this.hud.setImmersive(t.get("immersive")),document.body.classList.toggle("one-handed",!!t.get("oneHanded")),this.musicStyle=t.get("musicStyle")||"auto",this.music&&(this.musicStyle==="off"?this.music.stop&&this.music.stop():this.musicStyle!=="auto"&&this.music.start&&this.music.start(this.musicStyle)),document.documentElement.classList.toggle("no-flash",t.get("limitFlashes"));let s=t.get("reducedMotion");this.player.shakeEnabled=t.get("shake")&&!s,this.player.noBob=s,this.player.fovPunch=0,s&&(this.player.baseFov=t.get("fov"));let o=t.get("hudScale")||1;document.getElementById("hud").style.zoom=o;let a=t.get("colorblind")||"off",l=document.getElementById("hud");l.classList.remove("cb-deuter","cb-protan","cb-tritan"),a!=="off"&&l.classList.add("cb-"+a),this.difficultyScale={story:.6,normal:1,hard:1.5,nightmare:2.2}[t.get("difficulty")]||1,_u(this.difficultyScale),this.director&&(this.director.rateScale=1/Math.max(.5,this.difficultyScale)),this.renderer.shadowMap.enabled=t.get("shadows")}_bindUI(){let t=document.getElementById("playbtn");try{if(this.cfg.persist&&localStorage.getItem(this.cfg.progressionKey||"ow-progress")&&t){t.textContent="CONTINUE";let e=document.querySelector("#overlay .hint");e&&(e.textContent="Saved progress found \u2014 continue where you left off.")}}catch{}t&&t.addEventListener("click",()=>{this.audio.world=this.world,this._baseBuffs(),this.audio.resume(),!this.player.alive||this._dead?this.respawn():this.start()}),addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight),this.bloom&&this.bloom.setSize(innerWidth,innerHeight)})}overlay(t,e,i,n){let s=document.getElementById("overlay");if(!s)return;s.classList.remove("hidden");let o=s.querySelector("h1");o&&t&&(o.textContent=t);let a=s.querySelector(".sub");a&&e!==void 0&&(a.innerHTML=e);let l=s.querySelector(".hint");l&&i!==void 0&&(l.textContent=i);let h=document.getElementById("playbtn");h&&n&&(h.textContent=n)}start(){document.getElementById("overlay")?.classList.add("hidden"),this.pauseMenu&&this.pauseMenu.classList.add("hidden");let t=document.getElementById("playbtn");t&&(t.style.display=""),this.hud.show(),this.running=!0,this._dead=!1,this.input.isTouch?this.input.showTouch(!0):this.input.requestLock(),this.audio.world=this.world,this._baseBuffs(),this.audio.resume(),this.music&&this.music.start("calm"),this.campaign&&!this.campaign.active&&!this.campaign.done&&this.campaign.start()}pause(){if(!this.running)return;this.running=!1,document.exitPointerLock?.(),this._uiWasOpen=!0,this.input.showTouch(!1),this.music&&this.music.setMood("menu"),this.overlay("PAUSED",this.cfg.subtitle||"","Click resume to continue.","RESUME"),this.pauseMenu&&this.pauseMenu.classList.remove("hidden");let t=document.getElementById("playbtn");t&&(t.style.display="none")}respawn(){this.director.clear(),this.loot.clear(),this.store.despawn(),this.store.cooldown=20,this.player.reset(new w(0,0,0)),this.progression.reset(),this.arsenal.slots.length=0,this.arsenal.add("knife"),this.arsenal.add("pistol"),this.arsenal.switchTo(0),this.stats={kills:0,score:0,time:0},this.magnetTimer=0,this.focus=100,this.slowmo=!1,this.world.update(this.player.pos),this._applyProgression(),this.hud.setObjective(this.cfg.objectiveMain||"",this.cfg.objectiveSub||""),this.start()}die(){if(this._dead)return;this._dead=!0,this.running=!1;let t=[.5,.65,.8,.95][this.progression.insurance||0];this.progression.coins=Math.floor(this.progression.coins*t),this.progression.save(),document.exitPointerLock?.(),this.input.showTouch(!1),this.pauseMenu&&this.pauseMenu.classList.add("hidden"),this.music&&this.music.setMood("menu"),this.hud.setPrompt(null);let e=this._killerRef&&this._killerRef.group?this._killerRef.group.position.clone():this.player.pos.clone();this.killCam={t:0,dur:3.4,at:this.player.pos.clone(),look:e},this.hud.banner("YOU DIED",this._lastAttacker?"killed by "+this._lastAttacker:""),this.audio&&this.audio.hurt()}_updateKillCam(t){let e=this.killCam;if(!e)return;e.t+=t;let i=Math.min(1,e.t/e.dur),n=-.6+i*2.2,s=7-i*2.4;if(this.camera.position.set(e.at.x+Math.sin(n)*s,e.at.y+3.4-i*1.4,e.at.z+Math.cos(n)*s),this.camera.lookAt(e.look.x,e.look.y+1.2,e.look.z),this.camera.fov=55-i*6,this.camera.updateProjectionMatrix(),i>=1){this.killCam=null;let o={time:this.stats.time,kills:this.stats.kills,level:this.progression.level,score:this.stats.score},a=this.meta.recordRun(o);this.meta.add("deaths"),this._showRunSummary(o,a),this._lastAttacker=this._lastAttacker||this.cfg.killerDefault||"an unknown attacker",this.overlay("YOU DIED",`You survived <b>${Math.floor(this.stats.time)}s</b>, killed <b>${this.stats.kills}</b>, scored <b>${this.stats.score}</b>.`,"Press respawn to try again.","RESPAWN")}}_applyProgression(){let t=this.progression,e=this.player;e.maxHealth=t.maxHealth,e.speedRun=t.runSpeed,e.speedWalk=t.walkSpeed,e.maxStamina=t.maxStamina,e.carry=t.carry,e.maxArmor=t.maxArmor,e.armorAbsorb=t.armorAbsorb,e.health>e.maxHealth&&(e.health=e.maxHealth),e.armor>e.maxArmor&&(e.armor=e.maxArmor)}_onLevelUp(t,e){this.audio.levelup(),this.hud.notify("LEVEL "+t+"!  +1 skill point \u2014 spend it at a Safe House",!0),this.hud.banner("LEVEL "+t,"+1 skill point"),this.meta.peak("level",t),this.hud.levelFlash(),this._applyProgression(),this.player.heal(this.player.maxHealth*.4),this.cfg.onLevelUp&&this.cfg.onLevelUp(t,e,this)}_onKill(t){this.stats.kills++;let e=performance.now();this.combo=e-this._lastKillAt<2500?this.combo+1:1,this._lastKillAt=e,this._hitStop=.07,this.stats.score+=t.t.xp*10*Math.min(5,this.combo),this.meta.add("kills"),this.meta.seen(t.t.name),this.progression.addScrap(1+Math.floor(Math.random()*(t.isBoss?25:t.t.elite?6:3))),this.campaign&&(this.campaign.bump("kills"),this._hordeN>0&&this.campaign.bump("hordeKills"));let i=this.arsenal.current;if(i){let o=this.progression.addMastery(i.def.id);o>this._lastTier&&(this._lastTier=o,o&&this.hud.notify(`${i.def.name} mastery ${o}`))}let n=this.progression.perk("lifesteal");n&&this.player.heal(5*n),t.isBoss&&(this.meta.add("bosses"),this.campaign&&this.campaign.bump("bosses")),this.combo>this.meta.bestCombo&&(this.meta.bestCombo=this.combo),this.meta.peak("bestCombo",this.combo),this.progression.addXp(t.t.xp),this.progression.addCoins(t.t.coins),this.loot.dropFrom(t),this.hud.hitmarker(!0);let s=this.arsenal.current?this.arsenal.current.def.name:"";this.hud.kill(`${t.t.name} \u2014 ${s}  +${t.t.xp}XP`),this.hud.xpFloat("+"+t.t.xp+" XP"),this.combo>=3&&this.hud.combo(this.combo),this.hud.xpFloat("+"+t.t.coins+"\u25C8",!0),this.cfg.onKill&&this.cfg.onKill(t,this)}_onPickup(t,e,i){switch(t){case"ammo":this.arsenal.addAmmo(.35),this.hud.notify("Ammo collected");break;case"health":this.player.heal(30),this.hud.notify("+30 HP");break;case"armor":this.player.addArmor(50),this.hud.notify("+50 Armour");break;case"coin":this.progression.addCoins(8),this.meta.add("coins",8);break;case"magnet":this.magnetTimer=30,this.hud.notify("Loot Magnet active (30s)");break;case"upgrade":this.progression.points++,this.audio.token(),this.hud.notify("Skill point token \u2014 spend it at a Safe House",!0);break}this.cfg.onPickup&&this.cfg.onPickup(t,e,i,this)}_onBuy(t){let e=this.progression;if(t.kind==="weapon"){let i=t.key.slice(2);return e.unlocked.add(i),this.arsenal.add(i),this.hud.notify(t.label+" acquired",!0),!0}if(t.kind==="ammo")return this.arsenal.addAmmo(1),!0;if(t.kind==="health")return this.player.heal(60),!0;if(t.kind==="armor")return this.player.addArmor(50),!0;if(t.kind==="armourTier"){let i=e.setArmourTier(t.tier);return i&&(this._applyProgression(),this.player.addArmor(e.maxArmor)),i}if(t.kind==="magnet")return this.magnetTimer=30,!0;if(t.kind==="up")return e.upgrades[t.stat]++,this._applyProgression(),!0;if(t.kind==="set"){let i=e.buySet(t.sid);return i&&(this._applyProgression(),this.meta.add("upgrades")),i}if(t.kind==="craft"){let i=e.craft(t.rid);return i&&this.campaign&&this.campaign.bump("crafts"),i}if(t.kind==="install"){let i=this.base.install(t.iid,e);return i&&(e.save(),this._baseBuffs(),this.meta.add("upgrades")),i}if(t.kind==="insurance")return e.coins<t.price?!1:(e.insurance=Math.min(2,(e.insurance||0)+1),e.save(),!0);if(t.kind==="attach"){let i=e.buyAttach(t.wid,t.slot,t.aid);return i&&(this.arsenal._equip(this.arsenal.index),this.meta.add("upgrades")),i}if(t.kind==="perk")return e.buyPerk(t.pid);if(t.kind==="prestige"){let i=e.doPrestige();return i&&(this._applyProgression(),this.hud.banner("PRESTIGE "+e.prestige,"permanent bonuses")),i}if(t.kind==="wup"){let i=e.upgradeWeapon(t.wid,t.track);if(i){this.meta.add("upgrades"),this.campaign&&this.campaign.bump("upgrades");let n=Ri.find(s=>s.key===t.track);n&&e.weaponUpLevel(t.wid,t.track)>=n.max&&this.meta.peak("maxedTrack",1)}return i}if(t.kind==="aup"){let i=e.upgradeArmor();return i&&(this._applyProgression(),this.meta.add("upgrades"),this.meta.peak("armorLevel",e.armorLevel)),i}if(t.kind==="throwable"){let i=e.spend(t.price);return i&&this.throwables.add(t.tid,t.qty||1),i}if(t.kind==="sell"){let i=t.key.slice(2);return this.arsenal.remove(i),e.unlocked.delete(i),!0}if(t.kind==="respec"){let i=e.upgrades.vitality+e.upgrades.speed+e.upgrades.stamina+e.upgrades.carry;return i<=0?!1:(e.upgrades={vitality:0,speed:0,stamina:0,carry:0},e.points+=i,this._applyProgression(),this.hud.notify(`Respec \u2014 ${i} point${i>1?"s":""} refunded`,!0),!0)}return!1}_enemyTracer(t,e){let i=this._tracerPool.pop();if(!i){let s=new ae().setFromPoints([new w,new w]);i=new Yn(s,new cn({color:"#ff5b5b",transparent:!0,opacity:.8}))}let n=i.geometry.attributes.position;if(n.setXYZ(0,t.x,t.y,t.z),n.setXYZ(1,e.x,e.y,e.z),n.needsUpdate=!0,i.material.opacity=.8,i.visible=!0,this.scene.add(i),this._enemyTracers.push({line:i,life:.12}),this._enemyTracers.length>30){let s=this._enemyTracers.shift();s.line.visible=!1,this.scene.remove(s.line),this._tracerPool.push(s.line)}}_handleWeapons(t,e){let i=this.input,n=this.arsenal,s=this.world.solidsNear(this.player.pos.x,this.player.pos.z,70,this._solidBuf),o=this._ctx;o.hittables.length=0;for(let a of s)o.hittables.push(a);for(let a of this.director.getHittables())o.hittables.push(a);if(o.enemies=this.director.alive,o.particles=this.particles,o.alt=this.input.altFire,i.fire&&n.fire(o),i.once("reload")&&n.startReload(),(i.once("swap")||i.wheelDir&&!this.mapOpen)&&(n.next(),i.wheelDir=0),i.once("melee")){let a=n.slotOf("knife");a>=0&&(n.index!==a&&n.switchTo(a),n.fire(o))}for(let a=1;a<=6;a++)i.once("slot"+a)&&n.slots[a-1]&&n.switchTo(a-1);n.update(t,i,e)}loop(){requestAnimationFrame(()=>this.loop());let t=Math.min(.05,this._clock.getDelta());if(this.replay.playing)this._updateReplay(t),this._updateHud();else if(this.killCam)this._updateKillCam(t),this._updateHud();else if(this.running){this.stats.time+=t,this.input.pollGamepad(),this.audio.setListener(this.player.pos.x,this.player.pos.z),this.replay.acc+=t,this.replay.acc>=1/60&&(this.replay.acc=0,this.replay.buf.push({x:this.player.pos.x,y:this.player.pos.y+1.7,z:this.player.pos.z,yaw:this.player.yaw,pitch:this.player.pitch}),this.replay.buf.length>this.replay.max&&this.replay.buf.shift()),this._updateSky(t),this.hud.setUseVisible(!1);let e=this.input.consumeLook();if(this.input.swapHeld&&this.arsenal.slots.length>1){this.wheelOpen||(this.wheelOpen=!0,this._wheelLook={x:0,y:-60}),this._wheelLook.x+=e.dx,this._wheelLook.y+=e.dy;let l=this.arsenal.slots.length,h=Math.round((Math.atan2(this._wheelLook.y,this._wheelLook.x)+Math.PI/2)/(Math.PI*2)*l)%l;h<0&&(h+=l),this._wheelIdx=h,this.hud.drawWheel(this.arsenal.slots,this.arsenal.index,h)}else this.wheelOpen?(this.wheelOpen=!1,this.hud.drawWheel([],0,-1),this._wheelIdx!==void 0&&this.arsenal.switchTo(this._wheelIdx)):(e.dx||e.dy)&&this.player.addLook(e.dx,e.dy);this.input.once("slowmo")&&(this.slowmo?this.slowmo=!1:this.focus>12&&(this.slowmo=!0)),this.input.once("mute")&&this.audio.toggleMute(),this.slowmo?(this.focus=Math.max(0,this.focus-38*t),this.focus<=0&&(this.slowmo=!1)):this.focus=Math.min(100,this.focus+14*t);let i=this.slowmo?.28:1;this.timeScale=Xe(this.timeScale,i,8,t),this._hitStop>0&&(this._hitStop-=t);let n=this.photo?0:t*this.timeScale*(this._hitStop>0?.18:1);this.vehicles&&this.vehicles.driving?this.player.applyToCamera(t):this.player.update(t,this.input,{jump:this.input.once("jump"),crouch:this.input.crouch,prone:this.input.prone,leanL:this.input.leanL,leanR:this.input.leanR}),this.player.grabLock&&this.input.once("melee")&&this.player.breakFree();let s=this.progression;if(s.pendingAmmo){for(let l of this.arsenal.slots)l.def.mag!==1/0&&(l.reserve+=s.pendingAmmo);s.pendingAmmo=0}if(s.pendingHeal&&(this.player.health=this.player.maxHealth,s.pendingHeal=0,this.hud.notify("Medkit used")),s.pendingThrow&&(this.throwables.add("grenade",s.pendingThrow),s.pendingThrow=0),this.director.refreshLists(),this._handleWeapons(t,n),this.vehicles)if(this.vehicles.setLights(this._night>.5),this.vehicles.driving)this._vehT=(this._vehT||0)+t,this._vehT>.35&&this.input.once("interact")?(this.vehicles.exit(),this.player.inVehicle=!1,this._vehT=0,this.hud.setPrompt(null)):this.vehicles.update(t,this.input);else{this._vehT=0,this.vehicles.spawnNear(this.player.pos,2);let l=this.vehicles.nearest(this.player.pos);l&&this.input.once("interact")&&(this.vehicles.enter(l),this.player.inVehicle=!0,this._vehT=0)}this.world.update(this.player.pos),this._updateWorldExtras(n);let o={onMelee:l=>{if(l){this._lastAttacker=l.t.name,this._killerRef=l,this.player.registerHit(l.group.position);let h=this.progression.perk("thorns");h&&(l.damage(l.attackDamage*.18*h,this.player.pos.clone(),null),l.alive||this._onKill(l))}this.hud.flashDamage(),this.hud.bloodHit(),this.audio.hurt(),this.player.addShake(.2),this._noHitT=0},onGib:(l,h)=>this._gib(l,h),onSteal:l=>{this.progression.addCoins(-Math.min(this.progression.coins,l)),this.hud.notify("PICKPOCKET!  -"+l+"\u25C8",!0),this.audio.warn()},onGrab:l=>{this.hud.notify("GRABBED \u2014 press V to break free",!0),this.audio.hurt(),this.player.addShake(.5)},onRanged:l=>{l&&(this._lastAttacker=l.t.name,this._killerRef=l);let h=l.group.position.clone();h.y=1.4,this._enemyTracer(h,this.camera.position.clone()),l&&this.player.registerHit(l.group.position),this.hud.flashDamage(),this.audio.hurt()},onDeath:l=>this._onEnemyDeath(l),onSummon:l=>this._onSummon(l),onProjectile:l=>this._onEnemyProjectile(l),onSound:(l,h)=>this._enemySound(l,h)},a=this.stats.time;this.director.difficulty=this.cfg.difficulty?this.cfg.difficulty(this):1+2.6*(1-Math.exp(-a/180))+a/900,this.campaign&&this.campaign.active&&this.campaign.update(t),this.input.once("replay")&&this.toggleReplay(),this.cfg.onGameplayKeys&&this.cfg.onGameplayKeys(this),this.store&&(this.store.priceMod=this.repMod||1),this.cfg.mode?this._updateMode(t,n):this.director.update(n,this.player,o),this._updateEnemyShots(n),this.throwables.update(n,this.director.alive,{onKill:l=>this._onKill(l)}),this._updateGibs(n),this.base.update(n,this.director.alive,{player:this.player,progression:this.progression,onDamage:(l,h,c)=>this.hud.damageAt(l,h,c),onKill:l=>this._onKill(l)}),this.ally&&this.ally.update(n,this.director.alive,{onHit:(l,h)=>{this.hud.damageAt(l.group.position.clone().setY(l.headHeight()),h,"normal")},onKill:l=>this._onKill(l)}),this.loot.update(n,this.player,this.magnetTimer,this.stats.time),this.magnetTimer>0&&(this.magnetTimer-=t),this._syncSafeZones(),this.store.update(t,this.player,this.progression,this.input,this.hud),this.safeHouse.update(t,this.player,this.progression,this.input,this.hud),this.upgradeStation.update(t,this.player,this.progression,this.input,this.hud),this.cfg.onGameplay&&this.cfg.onGameplay(t,this),this.input.once("throwable")&&this.throwables.throwFromCamera(),this.input.once("cycleThrow")&&(this.throwables.cycle(),this.hud.notify(_n[this.throwables.selected].name)),this.hud.setThrowable(_n[this.throwables.selected].name,this.throwables.count()),this.ally&&this.hud.setAlly(this.ally),this._syncPointerLock(),this._updatePrompt(),this.loot.baseMagnet=2.6+this.progression.perk("magnet")*2.5,this.input.once("ping")&&this._placePing(),this.input.once("photo")&&this.togglePhoto(),this.input.once("progress")&&this.openMeta(),this.input.once("debug")&&(this.debug=!this.debug,this.hud.debug(this.debug?["..."]:null)),this.input.once("map")&&(this.mapOpen=!this.mapOpen,this.mapOpen?this.hud.showMap():this.hud.hideMap()),this.player.health<this._lastHealth&&this.hud.flashDamage(),this._lastHealth=this.player.health,this.player.alive||this.die(),this._hudDt=t,this.hud.pushFrame(t*1e3),this.meta.contractDone()&&!this.meta.contract.claimed&&(this.meta.contract.claimed=!0,this.progression.addCoins(this.meta.contract.reward),this.hud.notify(`Contract complete  +${this.meta.contract.reward}\u25C8`,!0),this.music&&this.music.sting("win"),setTimeout(()=>this.meta.rollContract(),1500)),this._noHitT+=t,this.meta.peak("runTime",this.stats.time),this.meta.peak("noHitRun",this._noHitT),this.meta.peak("coinsHeld",this.progression.coins),this.meta.peak("weaponsHeld",this.arsenal.slots.length),this._pois=this._collectPois(),this._updateChevron(),this._updateMusic(t),this._updateHitDir(),this._updateHud(),this.mapOpen&&(this.input.wheelDir&&(this.hud.mapZoom=de(this.hud.mapZoom*(this.input.wheelDir>0?.85:1.18),.5,3),this.input.wheelDir=0),this.hud.drawFullMap(this.world,this.player,this._pois)),this.debug&&this._updateDebug(),this.hud.drawFrameGraph(this.debug)}if(!this.running&&!this.killCam&&!this.replay.playing){if(this._idleT=(this._idleT||0)+t,this._idleT<1/12)return;this._idleT=0}this.particles.update(this.timeScale*t);for(let e=this._enemyTracers.length-1;e>=0;e--){let i=this._enemyTracers[e];i.life-=t,i.line.material.opacity=Math.max(0,i.life/.12)*.8,i.life<=0&&(i.line.visible=!1,this.scene.remove(i.line),this._tracerPool.push(i.line),this._enemyTracers.splice(e,1))}if(this._wantBloom&&!this._bloomTried){this._bloomTried=!0;try{this.bloom=new So(this.renderer),this.bloom.setSize(innerWidth,innerHeight),this._bloomEnabled=!0}catch(e){this._bloomEnabled=!1,console.warn("[bloom]",e)}}if(this._bloomEnabled&&this.bloom){let e=this.settings,i=Math.min(1,(Math.abs(this.player.lookVX||0)+Math.abs(this.player.lookVY||0))/12),n=Math.min(1,Math.hypot(this.player.vel.x,this.player.vel.z)/12);if(this.bloom.motion=e.get("motionBlur")===!1?0:Math.min(.45,i*.5+n*.22)*(1-this.player.zoom*.7),this.bloom.dof=e.get("depthOfField")===!1?0:.35+this.player.zoom*.5,this.bloom.matComposite.uniforms.dofCentre.value.set(.5,.5),this.bloom.grain=e.get("filmGrain")?.06:0,this.bloom.matComposite.uniforms.grain.value=this.bloom.grain,this.bloom.matComposite.uniforms.time.value=this.stats.time,this.bloom.matComposite.uniforms.wet.value=this.weather?this.weather.rain:0,this._sunDir){let s=this._sunV||(this._sunV=new w);s.copy(this.camera.position).addScaledVector(this._sunDir,500).project(this.camera),this.bloom.sunUv.set(s.x*.5+.5,s.y*.5+.5);let o=de(1-(this._daySmooth||1)*1.7,0,1);this.bloom.raysStrength=o>.5?0:Math.min(1,.35+(this._daySmooth||1)*.5)}this.bloom.render(this.scene,this.camera)}else this.renderer.render(this.scene,this.camera)}_applyRenderScale(){let t=Math.min(devicePixelRatio,2)*(this.settings.get("renderScale")||1);this._renderBase=t;let e=this._autoScale===void 0?1:this._autoScale;this.renderer.setPixelRatio(Math.max(.4,t*e)),this.renderer.setSize(innerWidth,innerHeight),this.bloom&&this.bloom.setSize(innerWidth,innerHeight)}_baseBuffs(){this.base&&(this.player.regenMul=this.base.has("bed")?2:1)}toggleReplay(){let t=this.replay;if(!t.buf.length){this.hud.notify("Nothing recorded yet");return}t.playing=!t.playing,t.idx=0,t.playing?(this.hud.banner("REPLAY","K to stop"),this.hud.setImmersive(!0)):this.hud.setImmersive(this.settings.get("immersive"))}_updateReplay(t){let e=this.replay;if(!e.playing||!e.buf.length)return;if(e.idx+=t*60,e.idx>=e.buf.length){this.toggleReplay();return}let i=e.buf[Math.floor(e.idx)],n=e.buf[Math.min(e.buf.length-1,Math.floor(e.idx)+1)],s=e.idx-Math.floor(e.idx);this.camera.position.set(i.x+(n.x-i.x)*s,i.y+(n.y-i.y)*s,i.z+(n.z-i.z)*s),this.camera.rotation.set(i.pitch+(n.pitch-i.pitch)*s,i.yaw+(n.yaw-i.yaw)*s,0,"YXZ")}keyName(t){let e=this.input&&this.input.binds&&this.input.binds[t];return e&&e.length?so(e[0]):"?"}_uiOpen(){let t=e=>{let i=document.getElementById(e);return!!i&&!i.classList.contains("hidden")};return!!(this.store&&this.store.open||this.safeHouse&&this.safeHouse.open||this.mapOpen||t("settingsmodal")||t("metamodal")||t("runsummary")||t("shop")||t("bigmap"))}_syncPointerLock(){if(this.input.isTouch)return;let t=this._uiOpen();t!==this._uiWasOpen&&(this._uiWasOpen=t,t?document.exitPointerLock?.():this.running&&!this.dead&&this.input.requestLock())}_updatePrompt(){let t=(this.safeZones||[]).some(i=>Math.hypot(i.x-this.player.pos.x,i.z-this.player.pos.z)<i.r);this.hud.setSafeZone(t);let e=null;if(this.vehicles&&(e=this.vehicles.promptFor(this.player.pos)),!e){let i=this.player.pos,n=(o,a)=>o&&o.position&&Math.hypot(o.position.x-i.x,o.position.z-i.z)<a,s=this.keyName("use");this.safeHouse&&n(this.safeHouse.standPos||this.safeHouse.position,5)?e=s+"  safe house":this.store&&n(this.store.standPos||this.store.position,5)?e=s+"  trade":this.safeZones&&this.safeZones.some(o=>Math.hypot(o.x-i.x,o.z-i.z)<o.r)&&(e="SAFE ZONE")}this.hud.setPrompt(e)}_updateHud(){let[t,e]=this.arsenal.ammoText(),i=this.progression,n=this.player;this.hud.update(this._hudDt||.016,{level:i.level,coins:i.coins,points:i.points,health:n.health,maxHealth:n.maxHealth,armor:n.armor,maxArmor:n.maxArmor,stamina:n.stamina,maxStamina:n.maxStamina,ammo:t,reserve:e,weapon:this.arsenal.current?.def.name,reloading:this.arsenal.reloading,xp:i.xp,xpNext:i.xpToNext(),spread:(this.arsenal.current?.def.spread||0)*(this.arsenal.current?.def.ch||1),ammoMax:this.arsenal.current&&this.arsenal.current.def.mag!==1/0?this.arsenal.current.def.mag:0,clock:this._clockText(),combo:this.combo,weaponColor:this.arsenal.current?(Ai[this.arsenal.current.def.rarity]||{}).c:null,heat:this.arsenal.heat,overheated:this.arsenal.overheated,focus:this.focus,slowmo:this.slowmo}),this.hud.drawMinimap(this.world,this.player,this._pois||[],this.settings.get("rotateMap"));let s=this._nearestBoss();this.hud.updateBoss(s,s?s.group.position.distanceTo(this.player.pos):0),this.hud.setCompass(this.player.yaw),this.hud.setWaypoint(this.waypoint||null),this.hud.setWaypointHud(this.waypoint||null,this.player),this.hud.setEvidence(this.evidence||0),this.hud.eliteBars(this.director.alive.filter(a=>a.t.elite&&a.health<a.maxHealth)),this.hud.setSprint(this.player.stamina/this.player.maxStamina);let o=!this.hud.$("#usehint").classList.contains("hidden");this.input.setUseVisible(o)}_updateSky(t){this.timeOfDay=(this.timeOfDay+t/this.dayLength)%1;let e=this.timeOfDay,i=Math.sin((e-.25)*Math.PI*2),n=de(i,0,1),s=n*n*(3-2*n);this._smooth=s,this.director&&(this.director.nightFactor=1-s);let o=de(1-Math.abs(i)/.5,0,1),a=1.05,l=Math.sqrt(Math.max(0,1-i*i));this._sunDir.set(Math.cos(a)*l,i,Math.sin(a)*l),this._c1.copy($_).lerp(Y_,s).lerp(Z_,o*.5),this._c2.copy(K_).lerp(J_,s).lerp(j_,o*.7),this._c3.copy(Q_).lerp(ty,s),this._c4.copy(ey).lerp(iy,s);let h=de(1-s*1.7,0,1);this._daySmooth=s,this._night=h,this.sky.update(this.camera.position,this._sunDir,{top:this._c1,horizon:this._c2,ground:this._c3,sun:this._c4,night:h}),this.sky.setMoonPhase(this.stats.time/480%29/29,this._sunDir,this.camera.position,h),this.scene.fog.color.copy(this._c2),this.scene.fog.near=jr(110,170,s),this.scene.fog.far=jr(360,620,s);let c=-Math.sin(this.player.yaw),u=-Math.cos(this.player.yaw),f=this.player.pos.x+c*22,p=this.player.pos.z+u*22;this.sun.position.set(f+this._sunDir.x*150,Math.max(25,this._sunDir.y*150),p+this._sunDir.z*150),this.sun.target.position.set(f,0,p),this.sun.intensity=.16+s*2,this.sun.color.copy(this._c4),this.amb.intensity=.62+s*.68,this.amb.color.copy(ny).lerp(sy,s),this.hemi.intensity=.78+s*.85,this.hemi.color.copy(ry).lerp(oy,s),this.world.setEmissive(1.6-s*1.45),this.renderer.toneMappingExposure=1.28+(1-s)*.12}_clockText(){let t=this.timeOfDay*24*60,e=Math.floor(t/60)%24,i=Math.floor(t%60);return String(e).padStart(2,"0")+":"+String(i).padStart(2,"0")}_collectPois(){let t=this.player.pos,e=[],i=this.safeHouse;e.push({x:i.pos.x,z:i.pos.z,type:"safehouse",label:i.title,radius:i.radius}),this.store.active&&e.push({x:this.store.pos.x,z:this.store.pos.z,type:"shop",label:"Merchant",radius:8}),e.push({x:this.upgradeStation.pos.x,z:this.upgradeStation.pos.z,type:"upgrade",label:"Upgrade Station",radius:this.upgradeStation.radius});for(let n of this.world.poisNear(t,460))e.push(n);for(let n of this.director.enemies)n.alive&&n.isBoss&&e.push({x:n.group.position.x,z:n.group.position.z,type:"boss",label:n.t.name});return this.ping&&performance.now()-this.ping.t<6e4&&e.push({x:this.ping.x,z:this.ping.z,type:"ping",label:"Ping"}),this.cfg.extraPois&&this.cfg.extraPois(e,this),e}_updateWorldExtras(t){let e=this.player.pos,i=this.weather;i.timer-=t,i.timer<=0&&(i.timer=75+Math.random()*95,i.target=i.target>.5?0:1,i.target>.5&&this.hud.notify("Rain incoming")),i.rain=Xe(i.rain,i.target,.45,t),i.rain>.02?(this.audio.setRain(i.rain),this.particles.rain(e,Math.round(7*i.rain)),Math.random()<i.rain*.0016&&(this.audio.thunder(),i.lightning=1)):this.audio.setRain(0),i.lightning=Math.max(0,i.lightning-t*2),this.world.setWet(i.rain),this.world.setWindTime(this.stats.time),this.puddles.update(t,e,i.rain),this.skyline.update(this.camera.position,this._c2),this.traffic.update(t,e);let n=de(1-this._smooth*1.7,0,1),s=n>.22?this.world.lampsNear(e,3,44):[];for(let l=0;l<this.lampLights.length;l++){let h=this.lampLights[l],c=s[l];c?(h.visible=!0,h.position.copy(c),h.intensity=2.4*n):h.visible=!1}if(this._leafT-=t,this._leafT<=0){this._leafT=.45;let l=this.world.chunkSize,h=this.world.chunks.get(Math.floor(e.x/l)+","+Math.floor(e.z/l));h&&(h.biome==="park"||h.biome==="jungle")&&this.particles.leaves(e,2)}this.audio.setWind(.3+n*.25+i.rain*.3);let o=this.world.chunkSize,a=this.world.chunks.get(Math.floor(e.x/o)+","+Math.floor(e.z/o));if(a&&this.audio.setAmbience(a.biome),this.ripples.update(t,i.rain,this.player),this.snow.update(t,!!a&&a.biome==="snow",this.player,this.world),this.audio.setReverb(this.world.isIndoor(this.player.pos)?.85:.12),this.settings.get("autoQuality")&&(this._qT=(this._qT||0)+t,this._qT>1.5)){this._qT=0;let l=this.hud._lastFps||60,h=this._autoScale===void 0?1:this._autoScale,c=h;l<45&&h>.5?c=Math.max(.5,h-.15):l>58&&h<1&&(c=Math.min(1,h+.1)),c!==h?(this._autoScale=c,this._applyRenderScale()):l<35&&h<=.55&&(this.renderer.shadowMap.enabled&&this.settings.get("shadows")?(this.settings.set("shadows",!1),this.renderer.shadowMap.enabled=!1,this.scene.traverse(u=>{if(u.material){let f=u.material;(Array.isArray(f)?f:[f]).forEach(p=>{p.needsUpdate=!0})}}),this.hud.notify("Shadows turned off to hold frame rate")):this._bloomEnabled&&(this._bloomEnabled=!1,this.hud.notify("Bloom turned off to hold frame rate")))}this._flickT=(this._flickT||0)-t,this._flickT<=0&&(this._flickT=.5,this.world.flicker())}_enemySound(t,e){let i=t.group.position.x-this.player.pos.x,n=t.group.position.z-this.player.pos.z;Math.hypot(i,n)<60&&this.audio.at(()=>{e==="scream"?this.audio.scream():e==="death"?this.audio.bark("death",t.t.name):this.audio.bark(e==="surrender"?"surrender":"spot",t.t.name)},i,n,55)}_gib(t,e){let i=new ct(t.t.color);for(let n=0;n<e;n++){let s=new V(this._gibGeo||(this._gibGeo=new xt(.24,.24,.24)),new Tt({color:i.clone().multiplyScalar(.8+Math.random()*.5),flatShading:!0}));s.position.copy(t.group.position),s.position.y+=.9+Math.random()*.5,s.userData.vel=new w((Math.random()-.5)*7,3+Math.random()*5,(Math.random()-.5)*7),s.userData.t=2.2,s.userData.spin=new w(Math.random()*9,Math.random()*9,Math.random()*9),this.scene.add(s),(this._gibs||(this._gibs=[])).push(s)}}_updateGibs(t){if(!(!this._gibs||!this._gibs.length))for(let e=this._gibs.length-1;e>=0;e--){let i=this._gibs[e],n=i.userData.vel;n.y-=22*t,i.position.addScaledVector(n,t),i.rotation.x+=i.userData.spin.x*t,i.rotation.y+=i.userData.spin.y*t,i.position.y<.12&&(i.position.y=.12,n.y=Math.abs(n.y)*.24,n.x*=.6,n.z*=.6),i.userData.t-=t,i.userData.t<=0&&(this.scene.remove(i),i.material.dispose(),this._gibs.splice(e,1))}}_onWorldHit(t,e,i){let n=e&&e.userData&&e.userData.breakable;if(!n||n.dead||(n.hp-=14,n.hp>0))return;n.dead=!0;let s=e.position.clone();if(e.parent&&e.parent.remove(e),n.chunk&&n.collider){let o=n.chunk.colliders.indexOf(n.collider);o>=0&&n.chunk.colliders.splice(o,1);let a=n.chunk.solids.indexOf(e);a>=0&&n.chunk.solids.splice(a,1)}if(n.kind==="glass"){this.audio.impact("metal"),this.particles.impact(s,20,[.75,.92,1]);return}if(n.kind==="stash"){this.audio.buy(),this.particles.impact(s,22,[1,.85,.35]);let o=45+Math.round(Math.random()*45);this.progression.addCoins(o),this.meta.add("coins",o),this.loot.spawn("ammo",s),Math.random()<.35&&this.loot.spawn("health",s),this.hud.notify("Stash found  +"+o+"\u25C8",!0),this.campaign&&this.campaign.bump("stashes");return}if(n.kind==="barrel"){this.audio.explosion(),this.particles.explosion(s,34),this.player.addShake(.55);for(let a of this.director.alive){let l=a.group.position.distanceTo(s);l<6.5&&(a.damage(95*(1-l/6.5),s,null),a.alive||this._onKill(a))}let o=s.distanceTo(this.player.pos);o<5&&this.player.damage(14*(1-o/5))}else this.audio.impact("wood"),this.particles.impact(s,16,[.72,.5,.3]),this.loot.spawn("ammo",s),this.progression.addCoins(6),this.meta.add("coins",6),this.hud.notify("+6\u25C8")}_placePing(){let t=new w;this.camera.getWorldPosition(t);let e=new w;this.camera.getWorldDirection(e),this._pingRay.set(t,e),this._pingRay.far=320;let i=this._pingRay.intersectObjects(this.world.solidsNear(this.player.pos,90),!0),n,s;if(i.length)n=i[0].point.x,s=i[0].point.z;else if(e.y<-.01){let o=-t.y/e.y;n=t.x+e.x*o,s=t.z+e.z*o}else n=t.x+e.x*40,s=t.z+e.z*40;this.ping={x:n,z:s,t:performance.now()},this.hud.notify("Ping placed"),this.audio.ui("click")}_onEnemyProjectile(t){if(t&&t.t&&t.t.ranged&&t.t.name==="Spitter"){let s=t.group.position.clone();this.throwables.spawnPool(s,"acid",{radius:3.4,dps:15,duration:7})}let e=this._shotPool.pop();e||(e=new V(new Ce(.22,8,8),new Ot({color:"#a6ff8f"})),e.add(new Ve("#a6ff8f",.8,6)),this.scene.add(e)),e.visible=!0;let i=t.group.position.clone();i.y=1.5;let n=this.camera.position.clone().sub(i).normalize();e.position.copy(i),this._enemyShots.push({mesh:e,vel:n.multiplyScalar(19),life:3,dmg:t.attackDamage}),this.audio.hiss()}_updateEnemyShots(t){for(let e=this._enemyShots.length-1;e>=0;e--){let i=this._enemyShots[e];i.life-=t,i.mesh.position.addScaledVector(i.vel,t);let n=i.mesh.position,s=n.distanceTo(this.camera.position)<1.1,o=!1;for(let a of this.world.collidersNear(n.x,n.z,.6))if(n.x>a.minX&&n.x<a.maxX&&n.z>a.minZ&&n.z<a.maxZ&&n.y<a.height){o=!0;break}s&&(this.player.damage(i.dmg),this.player.registerHit(n),this.hud.flashDamage(),this.audio.hurt()),(s||o||i.life<=0)&&(this.particles.impact(n,6,[.6,1,.5]),i.mesh.visible=!1,this.scene.remove(i.mesh),this._shotPool.push(i.mesh),this._enemyShots.splice(e,1))}}_updateChevron(){let t=this.player.pos,e=null,i=1e9,n={boss:0,crime:1,shop:2,safehouse:3,upgrade:3};for(let a of this._pois){let l=n[a.type];if(l===void 0||l===3&&this.progression.points<=0)continue;let h=Math.hypot(a.x-t.x,a.z-t.z),c=l*1e3+h;c<i&&(i=c,e=a)}if(!e){this.chevron.visible=!1;return}if(Math.hypot(e.x-t.x,e.z-t.z)<9){this.chevron.visible=!1;return}this.chevron.visible=!0;let o=5.2+Math.sin(performance.now()/320)*.45;this.chevron.position.set(e.x,o,e.z),this.chevron.rotation.y+=.02}_updateMusic(t){if(this.musicStyle==="off"||!this.music)return;let e=0,i=!1;for(let n of this.director.enemies){if(!n.alive)continue;let s=n.group.position.distanceTo(this.player.pos);s<30&&(e=Math.max(e,1-s/30)),n.isBoss&&s<80&&(i=!0,e=1)}this.music.setMood(i?"boss":e>.25?"combat":"calm"),this.music.setIntensity(e)}_updateHitDir(){let t=performance.now()-this.player.lastDamageAt;if(t>900){this.hud.hitDirection(null);return}let e=this.player.lastDamageDir-(this.player.yaw+Math.PI);this.hud.hitDirection(e,1-t/900)}_updateDebug(){let t=this.renderer.info,e=this.player.pos,i=this.world.chunkSize;this.hud.debug([`fps ${this.hud._lastFps||0}   frame ${(this._hudDt*1e3).toFixed(1)}ms`,`pos ${e.x.toFixed(0)}, ${e.z.toFixed(0)}   chunk ${Math.floor(e.x/i)},${Math.floor(e.z/i)} (${this._surface()})`,`chunks ${this.world.chunks.size}   enemies ${this.director.enemies.length}   shots ${this._enemyShots.length}`,`draws ${t.render.calls}   tris ${(t.render.triangles/1e3).toFixed(0)}k   geoms ${t.memory.geometries}`,`rain ${this.weather.rain.toFixed(2)}   timeScale ${this.timeScale.toFixed(2)}   music ${this.music?this.music.mood:"-"}`])}_nearestBoss(){let t=null,e=90;for(let i of this.director.enemies){if(!i.alive||!i.isBoss)continue;let n=i.group.position.distanceTo(this.player.pos);n<e&&(e=n,t=i)}return t}_syncSafeZones(){this.safeZones.length=0,this.safeZones.push(this.safeHouse.zone),this.safeZones.push(this.upgradeStation.zone),this.store.active&&this.store.pos&&this.safeZones.push({x:this.store.pos.x,z:this.store.pos.z,r:8})}_onEnemyDeath(t){if(t.t.explodes){let e=t.group.position.clone();this.particles.explosion(e,45),this.audio.explosion(),this.player.addShake(.5),this.player.pos.distanceTo(e)<t.t.explodes.radius&&this.player.damage(t.t.explodes.damage)}}_onSummon(t){this.audio.groan();let e=t.group.position;for(let i=0;i<2;i++)this.director.spawnAt("runner",new w(e.x+(Math.random()-.5)*8,0,e.z+(Math.random()-.5)*8))}},$_=new ct("#0b1024"),Y_=new ct("#3f6fb5"),Z_=new ct("#2a3a6a"),K_=new ct("#182240"),J_=new ct("#bcd4ec"),j_=new ct("#e8915a"),Q_=new ct("#0a0e18"),ty=new ct("#4a5460"),ey=new ct("#ffb27a"),iy=new ct("#fff4e2"),ny=new ct("#3a4d78"),sy=new ct("#8fa8cc"),ry=new ct("#7f9ede"),oy=new ct("#bcd6ff");xu(is);bu(is);var Bo=new is(document.getElementById("game"),{seed:20261017,startTime:.3,dayLength:300,worldWeights:[["downtown",2],["city",5],["residential",3],["industrial",2],["jungle",2],["park",2],["playground",1],["school",1],["plaza",1],["desert",2],["snow",2],["swamp",2]],safeHouseTitle:"SAFE HOUSE",armory:!1,pool:["walker","runner"],maxAlive:16,spawnInterval:1.9,autoSpawn:!0,campaign:/[?&]campaign/.test(location.search),ally:/[?&]ally/.test(location.search),mode:(function(){let r=(location.search.match(/[?&]mode=([a-z]+)/)||[])[1];return["arena","bossrush","defence","extraction"].includes(r)?r:"arena"})(),persist:!0,progressionKey:"ow-survival",startingWeapons:["knife","pistol"],killerDefault:"the horde",objectiveMain:"SURVIVE",objectiveSub:"kill the horde \u2022 spend skill points at a Safe House \u2022 buy gear from the merchant",subtitle:"Endless survival. Level up, buy gear, stay alive.",difficulty:r=>1+r.stats.time/110+r.progression.level*.12,onGameplay(r,t){let e=t.director.difficulty,i=["walker","runner"].concat(t.modPool||[]);e>1.5&&i.push("crawler"),e>2.2&&i.push("spitter"),e>2.9&&i.push("bloater","screamer"),e>4.2&&i.push("brute"),e>6&&i.push("brute","screamer","pickpocket"),t.director.pool=i,t.director.maxAlive=Math.min(28,14+Math.floor(e*1.4));let n=Math.floor(t.stats.time/60),s=Math.floor(t.stats.time%60);t.hud.setObjective(`SURVIVED ${n}:${String(s).padStart(2,"0")}  \u2022  ${t.stats.kills} KILLS  \u2022  SCORE ${t.stats.score}`,e>6?"mutations: bloaters, screamers & brutes":`difficulty x${e.toFixed(1)}`),t._bossT=(t._bossT??110)-r;let o=t.director.enemies.some(a=>a.alive&&a.isBoss);if(t._bossT<=0&&!o&&e>3.5){t._bossT=140+Math.random()*70;let a=e>6&&Math.random()<.5?"warlord":"behemoth",l=t.world.spawnAround(t.player.pos,40,60);t.director.spawnAt(a,l),t.hud.notify("\u26A0 "+a.toUpperCase()+" INBOUND",!0),t.audio.siren(),t.audio.bossRoar(),t.music&&t.music.sting("boss"),t.hud.banner(a.toUpperCase(),"boss incoming")}if(t._surge=(t._surge??0)-r,t._surge<=0){t._surge=55+Math.random()*25;let a=4+Math.floor(e*1.5);for(let l=0;l<a;l++)t.director.spawnAround(t.player,30,48);t.hud.notify("HORDE INCOMING",!0),t.audio.siren()}if(t._hordeT=(t._hordeT??75)-r,t._hordeT<=0){t._hordeT=85+Math.random()*55;let a=t.director.difficulty,l=t.world.spawnAround(t.player.pos,62,92),h=7+Math.floor(Math.min(9,a*1.6));t.director.spawnHorde(l,h,a),t.hud.notify("\u26A0 HORDE INCOMING \u2014 "+h+" contacts",!0),t.audio.bossRoar()}if(t._ambT=(t._ambT??18)-r,t._ambT<=0&&(t._ambT=24+Math.random()*22,t.director.enemies.filter(l=>l.alive&&l.passive).length<5)){let l=t.director.spawnAt("walker",t.world.spawnAround(t.player.pos,55,95));l.passive=!0}t._saveT=(t._saveT??0)+r,t._saveT>15&&(t._saveT=0,t.progression.save())},extraPois(r,t){for(let e of t.director.enemies)!e.alive||e.isBoss||r.push({x:e.group.position.x,z:e.group.position.z,type:"enemy",label:e.t.name});for(let e of t.loot.items)r.push({x:e.mesh.position.x,z:e.mesh.position.z,type:"loot",label:e.type})}});Bo.init();Bo.hud.hide();Bo.loop();window.__game=Bo;})();
