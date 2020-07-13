import React from "react";

const Toaster = React.lazy(() =>
  import("./views/notifications/toaster/Toaster")
);
const Tables = React.lazy(() => import("./views/base/tables/Tables"));

const Breadcrumbs = React.lazy(() =>
  import("./views/base/breadcrumbs/Breadcrumbs")
);
const Cards = React.lazy(() => import("./views/base/cards/Cards"));
const Carousels = React.lazy(() => import("./views/base/carousels/Carousels"));
const Collapses = React.lazy(() => import("./views/base/collapses/Collapses"));
const BasicForms = React.lazy(() => import("./views/base/forms/BasicForms"));

const Jumbotrons = React.lazy(() =>
  import("./views/base/jumbotrons/Jumbotrons")
);
const ListGroups = React.lazy(() =>
  import("./views/base/list-groups/ListGroups")
);
const Navbars = React.lazy(() => import("./views/base/navbars/Navbars"));
const Navs = React.lazy(() => import("./views/base/navs/Navs"));
const Paginations = React.lazy(() =>
  import("./views/base/paginations/Pagnations")
);
const Popovers = React.lazy(() => import("./views/base/popovers/Popovers"));
const ProgressBar = React.lazy(() =>
  import("./views/base/progress-bar/ProgressBar")
);
const Switches = React.lazy(() => import("./views/base/switches/Switches"));

const Tabs = React.lazy(() => import("./views/base/tabs/Tabs"));
const Tooltips = React.lazy(() => import("./views/base/tooltips/Tooltips"));
const BrandButtons = React.lazy(() =>
  import("./views/buttons/brand-buttons/BrandButtons")
);
const ButtonDropdowns = React.lazy(() =>
  import("./views/buttons/button-dropdowns/ButtonDropdowns")
);
const ButtonGroups = React.lazy(() =>
  import("./views/buttons/button-groups/ButtonGroups")
);
const Buttons = React.lazy(() => import("./views/buttons/buttons/Buttons"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));
const Alerts = React.lazy(() => import("./views/notifications/alerts/Alerts"));
const Badges = React.lazy(() => import("./views/notifications/badges/Badges"));
const Modals = React.lazy(() => import("./views/notifications/modals/Modals"));
const Colors = React.lazy(() => import("./views/theme/colors/Colors"));
const Typography = React.lazy(() =>
  import("./views/theme/typography/Typography")
);
const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const Transaction = React.lazy(() =>
  import("./views/pages/transaction/Transaction")
);
const AddTransaction = React.lazy(() =>
  import("./views/pages/add_transaction/AddTransaction")
);
const EditTransaction = React.lazy(() =>
  import("./views/pages/edit_transaction/EditTransaction")
);
const User = React.lazy(() => import("./views/pages/user/User"));
const AddUser = React.lazy(() => import("./views/pages/add_user/AddUser"));
const EditUser = React.lazy(() => import("./views/pages/edit_user/EditUser"));
const Banner = React.lazy(() => import("./views/pages/banner/Banner"));
const AddBanner = React.lazy(() =>
  import("./views/pages/add_banner/AddBanner")
);

const EditBanner = React.lazy(() =>
  import("./views/pages/edit_banner/EditBanner")
);
const BrandFriend = React.lazy(() =>
  import("./views/pages/brand_friend/BrandFriend")
);
const AddBrandFriend = React.lazy(() =>
  import("./views/pages/add_brand_friend/AddBrandFriend")
);
const EditBrandFriend = React.lazy(() =>
  import("./views/pages/edit_brand_friend/EditBrandFriend")
);
const Dispute = React.lazy(() => import("./views/pages/dispute/Dispute"));
const AddDispute = React.lazy(() =>
  import("./views/pages/add_dispute/AddDispute")
);
const EditDispute = React.lazy(() =>
  import("./views/pages/edit_dispute/EditDispute")
);
const Category = React.lazy(() => import("./views/pages/category/Category"));
const AddCategory = React.lazy(() =>
  import("./views/pages/add_category/AddCategory")
);
const EditCategory = React.lazy(() =>
  import("./views/pages/edit_category/EditCategory")
);
const Franchise = React.lazy(() => import("./views/pages/franchise/Franchise"));
const AddFranchise = React.lazy(() =>
  import("./views/pages/add_franchise/AddFranchise")
);
const EditFranchise = React.lazy(() =>
  import("./views/pages/edit_franchise/EditFranchise")
);
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/theme", name: "Theme", component: Colors, exact: true },
  { path: "/theme/colors", name: "Colors", component: Colors },
  { path: "/theme/typography", name: "Typography", component: Typography },
  { path: "/base", name: "Base", component: Cards, exact: true },
  { path: "/base/breadcrumbs", name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/base/cards", name: "Cards", component: Cards },
  { path: "/base/carousels", name: "Carousel", component: Carousels },
  { path: "/base/collapses", name: "Collapse", component: Collapses },
  { path: "/base/forms", name: "Forms", component: BasicForms },
  { path: "/base/jumbotrons", name: "Jumbotrons", component: Jumbotrons },
  { path: "/base/list-groups", name: "List Groups", component: ListGroups },
  { path: "/base/navbars", name: "Navbars", component: Navbars },
  { path: "/base/navs", name: "Navs", component: Navs },
  { path: "/base/paginations", name: "Paginations", component: Paginations },
  { path: "/base/popovers", name: "Popovers", component: Popovers },
  { path: "/base/progress-bar", name: "Progress Bar", component: ProgressBar },
  { path: "/base/switches", name: "Switches", component: Switches },
  { path: "/base/tables", name: "Tables", component: Tables },
  { path: "/base/tabs", name: "Tabs", component: Tabs },
  { path: "/base/tooltips", name: "Tooltips", component: Tooltips },
  { path: "/buttons", name: "Buttons", component: Buttons, exact: true },
  { path: "/buttons/buttons", name: "Buttons", component: Buttons },
  {
    path: "/buttons/button-dropdowns",
    name: "Dropdowns",
    component: ButtonDropdowns,
  },
  {
    path: "/buttons/button-groups",
    name: "Button Groups",
    component: ButtonGroups,
  },
  {
    path: "/buttons/brand-buttons",
    name: "Brand Buttons",
    component: BrandButtons,
  },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },
  {
    path: "/notifications",
    name: "Notifications",
    component: Alerts,
    exact: true,
  },
  { path: "/notifications/alerts", name: "Alerts", component: Alerts },
  { path: "/notifications/badges", name: "Badges", component: Badges },
  { path: "/notifications/modals", name: "Modals", component: Modals },
  { path: "/notifications/toaster", name: "Toaster", component: Toaster },
  { path: "/widgets", name: "Widgets", component: Widgets },
  {
    path: "/transactions",
    exact: true,
    name: "Transactions",
    component: Transaction,
  },
  {
    path: "/transactions/add",
    exact: true,
    name: "New Transaction",
    component: AddTransaction,
  },
  {
    path: "/transactions/edit/:id",
    exact: true,
    name: "Edit Transaction",
    component: EditTransaction,
  },
  {
    path: "/users",
    exact: true,
    name: "Users",
    component: User,
  },
  {
    path: "/users/add",
    exact: true,
    name: "New User",
    component: AddUser,
  },
  {
    path: "/users/edit/:id",
    exact: true,
    name: "Edit User",
    component: EditUser,
  },
  {
    path: "/banners",
    exact: true,
    name: "Banners",
    component: Banner,
  },
  {
    path: "/banners/add",
    exact: true,
    name: "New Banner",
    component: AddBanner,
  },
  {
    path: "/users/banners/:id",
    exact: true,
    name: "Edit Banner",
    component: EditBanner,
  },
  {
    path: "/brand-friend",
    exact: true,
    name: "Brand Friend",
    component: BrandFriend,
  },
  {
    path: "/brand-friend/add",
    exact: true,
    name: "New Brand Friend",
    component: AddBrandFriend,
  },
  {
    path: "/brand-friend/edit/:id",
    exact: true,
    name: "Edit Brand Friend",
    component: EditBrandFriend,
  },
  {
    path: "/disputes",
    exact: true,
    name: "Dispute",
    component: Dispute,
  },
  {
    path: "/disputes/add",
    exact: true,
    name: "New Dispute",
    component: AddDispute,
  },
  {
    path: "/disputes/edit/:id",
    exact: true,
    name: "Edit Dispute",
    component: EditDispute,
  },
  {
    path: "/category",
    exact: true,
    name: "Category",
    component: Category,
  },
  {
    path: "/category/add",
    exact: true,
    name: "New Category",
    component: AddCategory,
  },
  {
    path: "/category/edit/:id",
    exact: true,
    name: "Edit Category",
    component: EditCategory,
  },
  {
    path: "/franchises",
    exact: true,
    name: "Franchise",
    component: Franchise,
  },
  {
    path: "/franchises/add",
    exact: true,
    name: "New Franchise",
    component: AddFranchise,
  },
  {
    path: "/franchises/edit/:id",
    exact: true,
    name: "Edit Franchise",
    component: EditFranchise,
  },
];

export default routes;
