
interface Data {
	id: string
	name: string,
	price: number
}

export interface IEdit {
  id: string;
  edite: boolean;
}

export interface IData {
  data: {
    data: Data[];
  };
}