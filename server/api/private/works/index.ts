import type { loadingWorkEntity, WorkEntity } from 'api/@types/work';
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: WorkEntity[];
  };
  post: {
    reqBody: { novelUrl: string };
    resBody: loadingWorkEntity;
  };
}>;