import { lazy } from 'react';

export function lazyLoad(path, namedExport) {
  return lazy(async () => {
    const promise = import(path);
    if (namedExport == null) {
      return promise;
    }
    console.log(path, 'deddd');
    return promise.then((module) => ({ default: module[namedExport] }));
  });
}
