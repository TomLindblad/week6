export function reverseString(str:string): string {
    let strArr:string[] = str.split("");
    let revArr:string[] = strArr.reverse();
    let revStr:string = revArr.join("");

    return revStr;
}

export function reverseSentence(str:string): string {
    let strArr:string[] = str.split(" ");
    let revArr:string[] = strArr.reverse();
    let revStr:string = revArr.join(" ");

    return revStr;
}

export function countCharacters(str:string): number {
    let strArr: string[] = str.split(" ");
    let newString = strArr.join("");

    return newString.length;
}

export function countWords(str:string): number | string {
    let strArr: string[] = str.split(" ");

    if (strArr.length > 10){
        return "Very many words, like wow."
    }

    return strArr.length;
}