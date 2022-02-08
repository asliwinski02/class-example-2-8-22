class Page {
  private textStr: string;
  private lastModifiedDate: Date;
  constructor() {
    this.textStr = "";
    this.lastModifiedDate = new Date();
  }

  addText(text: string) {
    this.textStr = this.textStr + "\n" + text;
    this.lastModifiedDate = new Date();
  }

  public get text() {
    return this.textStr;
  }

  public get lastModified() {
    return this.lastModifiedDate.toString();
  }
}

export default Page;
