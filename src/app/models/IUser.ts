export default interface IUser {
  _id: string,
  email: string,
  name?: string,
  access: number,
  isActivated: boolean,
}
