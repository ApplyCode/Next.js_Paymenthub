export interface Route {
  id: string;
  label: string;
  path: string;
}

export interface Payment {
  title: string;
  description?: string;
  size?: "sm" | "lg";
}

export interface QueType {
    que: string;
    aws: string;
}
