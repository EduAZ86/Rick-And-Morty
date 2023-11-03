// props
export interface styleTextPropsInterface {
    fontSize:string;
    color:string;
    fontWeight?:string;
    textAlign?:'center'|'justify'|'start'|'end';
}
export interface contentTextPropsInterface{
    text:string;
    htmlFor?:string;
    type: 'maintitle' | 'title' | 'subtitle' | 'paragraph' | 'text' | 'label';
}
export interface typographyPropsInterface {
    content:contentTextPropsInterface;
    style:styleTextPropsInterface;
}

// styled

export interface titleStyledInterface {
    fontSize:string;
    color:string;
    fontWeight?:string;
}

export interface paragraphStyledInterface {
    fontSize:string;
    color:string;
    fontWeight?:string;
    textAlign?:'center'|'justify'|'start'|'end';
}

export interface LabelStyledInterface {
    fontSize:string;
    color:string;
    fontWeight?:string;
}