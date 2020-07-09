const API_ROOT = "http://localhost:4000";
export const APIUrls = {
  // Transaction APIs
  fetchTransactions: () => `${API_ROOT}/transactions`,
  createTransaction: () => `${API_ROOT}/transactions`,
  editTransaction: (id) => `${API_ROOT}/transactions/${id}`,
  deleteTransaction: (id) => `${API_ROOT}/transactions/${id}`,

  // User APIs
  fetchUsers: () => `${API_ROOT}/users`,
  createUser: () => `${API_ROOT}/users`,
  editUser: (id) => `${API_ROOT}/users/${id}`,
  deleteUser: (id) => `${API_ROOT}/users/${id}`,

  // Banner APIs
  fetchBanners: () => `${API_ROOT}/banners`,
  createBanner: () => `${API_ROOT}/banners`,
  editBanner: (id) => `${API_ROOT}/banners/${id}`,
  deleteBanner: (id) => `${API_ROOT}/banners/${id}`,

  // BrandFriend APIs
  fetchBrandFriends: () => `${API_ROOT}/brand-friend`,
  createBrandFriend: () => `${API_ROOT}/brand-friend`,
  editBrandFriend: (id) => `${API_ROOT}/brand-friend/${id}`,
  deleteBrandFriend: (id) => `${API_ROOT}/brand-friend/${id}`,

  // Dispute APIs
  fetchDisputes: () => `${API_ROOT}/disputes`,
  createDispute: () => `${API_ROOT}/disputes`,
  editDispute: (id) => `${API_ROOT}/disputes/${id}`,
  deleteDispute: (id) => `${API_ROOT}/disputes/${id}`,

  // Category APIs
  fetchCategories: () => `${API_ROOT}/category`,
  createCategory: () => `${API_ROOT}/category`,
  editCategory: (id) => `${API_ROOT}/category/${id}`,
  deleteCategory: (id) => `${API_ROOT}/category/${id}`,

  // Franchise APIs
  fetchFranchises: () => `${API_ROOT}/franchises`,
  createFranchise: () => `${API_ROOT}/franchises`,
  editFranchise: (id) => `${API_ROOT}/franchises/${id}`,
  deleteFranchise: (id) => `${API_ROOT}/franchises/${id}`,
};
