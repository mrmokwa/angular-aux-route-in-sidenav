interface ApiResponse<T> {
  data: T[];
  paginacao: {
    registros: number;
    pageSize: number;
    pageNumber: number;
    totalPages: number;
    offset: number;
    orderBy?: string;
    orderDesc?: boolean;
  };
}
