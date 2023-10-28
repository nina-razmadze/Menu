export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public index: number;

  constructor(name: string, desc: string, imagePath: string, index: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.index = index;
  }
}
