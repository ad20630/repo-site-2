class Category {
  public constructor(
    private name: string,
    private idle: string,
    private hover: string
  ) {}
  public getName(): string {
    return this.name;
  }
  public getIdle(): string {
    return this.idle;
  }
  public getHover(): string {
    return this.hover;
  }
}

const Myrm = ["Myrmidon Line", "../assets/MyrmidonIdle.png", "../assets/MyrmidonHover.gif"];

function ListInfo() {
  return [
    Myrm,
  ];
}

export default ListInfo;
