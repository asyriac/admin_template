// Root API url
const API_ROOT = "http://localhost:4000";

export const APIUrls = {
  // Transaction APIs
  fetchTransactions: () => `${API_ROOT}/transactions`,
  createTransaction: () => `${API_ROOT}/transactions`,
  fetchSingleTransaction: (id) => `${API_ROOT}/transactions/${id}`,
  editTransaction: (id) => `${API_ROOT}/transactions/${id}`,
  deleteTransaction: (id) => `${API_ROOT}/transactions/${id}`,

  // User APIs
  fetchUsers: () => `${API_ROOT}/users`,
  createUser: () => `${API_ROOT}/users`,
  fetchSingleUser: (id) => `${API_ROOT}/users/${id}`,
  editUser: (id) => `${API_ROOT}/users/${id}`,
  deleteUser: (id) => `${API_ROOT}/users/${id}`,

  // Banner APIs
  fetchBanners: () => `${API_ROOT}/banners`,
  createBanner: () => `${API_ROOT}/banners`,
  fetchSingleBanner: (id) => `${API_ROOT}/banners/${id}`,
  editBanner: (id) => `${API_ROOT}/banners/${id}`,
  deleteBanner: (id) => `${API_ROOT}/banners/${id}`,

  // BrandFriend APIs
  fetchBrandFriends: () => `${API_ROOT}/brand-friend`,
  createBrandFriend: () => `${API_ROOT}/brand-friend`,
  fetchSingleBrandFriend: (id) => `${API_ROOT}/brand-friend/${id}`,
  editBrandFriend: (id) => `${API_ROOT}/brand-friend/${id}`,
  deleteBrandFriend: (id) => `${API_ROOT}/brand-friend/${id}`,

  // Dispute APIs
  fetchDisputes: () => `${API_ROOT}/disputes`,
  createDispute: () => `${API_ROOT}/disputes`,
  fetchSingleDispute: (id) => `${API_ROOT}/disputes/${id}`,
  editDispute: (id) => `${API_ROOT}/disputes/${id}`,
  deleteDispute: (id) => `${API_ROOT}/disputes/${id}`,

  // Category APIs
  fetchCategories: () => `${API_ROOT}/category`,
  fetchSingleCategory: (id) => `${API_ROOT}/category/${id}`,
  createCategory: () => `${API_ROOT}/category`,
  editCategory: (id) => `${API_ROOT}/category/${id}`,
  deleteCategory: (id) => `${API_ROOT}/category/${id}`,

  // Franchise APIs
  fetchFranchises: () => `${API_ROOT}/franchises`,
  createFranchise: () => `${API_ROOT}/franchises`,
  fetchSingleFranchise: (id) => `${API_ROOT}/franchises/${id}`,
  editFranchise: (id) => `${API_ROOT}/franchises/${id}`,
  deleteFranchise: (id) => `${API_ROOT}/franchises/${id}`,
};
