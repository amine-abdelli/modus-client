import { ApolloLink } from '@apollo/client';

/* eslint-disable */
/* @ts-ignore */
// copied from https://gist.github.com/cdelgadob/4041818430bc5802016332dbe5611570
const cleanTypenameFieldLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, '__typename');
  }
  return forward(operation).map((data) => data);
});

const omitDeep = (obj: any, key: string | number): object => {
  const keys: Array<any> = Object.keys(obj);
  const newObj: any = {};
  keys.forEach((i: any) => {
    if (i !== key) {
      const val: any = obj[i];
      if (Array.isArray(val)) newObj[i] = omitDeepArrayWalk(val, key);
      else if (typeof val === 'object' && val !== null) newObj[i] = omitDeep(val, key);
      else newObj[i] = val;
    }
  });
  return newObj;
};

function omitDeepArrayWalk(arr: any[], key: string | number): any {
  return arr.map((val) => {
    if (Array.isArray(val)) return omitDeepArrayWalk(val, key);
    if (typeof val === 'object') return omitDeep(val, key);
    return val;
  });
}
export { cleanTypenameFieldLink };