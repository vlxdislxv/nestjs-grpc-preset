/* eslint-disable */


export interface Empty {
}

export interface Hi {
  msg: string;
}

export interface Service {

  get(request: Empty): Promise<Hi>;

}

export const protobufPackage = 'service'
