import Page from "./Page";

class Notebook {
  private sheet: Page;
  constructor(firstPage: Page) {
    this.sheet = firstPage;
  }

  addNote(note: string) {
    this.sheet.addText(note);
  }

  get page() {
    return this.sheet;
  }
}

export default Notebook;
