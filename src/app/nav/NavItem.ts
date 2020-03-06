export abstract class NavItem {
  public abstract path: string;
  public abstract text: string;
  public abstract icon: string;
  public enabled?: boolean;
  public fontSize?: string;
}
