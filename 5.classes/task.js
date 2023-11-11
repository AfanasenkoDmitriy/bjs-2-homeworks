class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
      if (this.state > 100) {
          this.state = 100;
      } else if (this.state < 0) {
        this.state = 0;
      }
      return this.state * 1.5;
  }

  setState(newState) {
      this.state = newState;
      
  }

  getState() {
    return _newState;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type = "book") {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class FantasticBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type = "fantastic"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class DetectiveBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state,
    type = "detective"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

let printEditionItem = new PrintEditionItem();
