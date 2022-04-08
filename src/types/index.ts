export interface ITypes {
    name: string;
    description: string;
  }

export interface baseModal {
    isModalVisible: boolean;
    toggleModel(): void;
  }