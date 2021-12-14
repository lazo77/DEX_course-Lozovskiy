
export interface IMatch {
  matchClassList: string
  header: string
  teams:
    {teamName: string
       imgUrl: string 
      }[];
  downText: {
    downDate: string
    downPlace: string
  }
}
export interface IClassList {
  clasList: string
}