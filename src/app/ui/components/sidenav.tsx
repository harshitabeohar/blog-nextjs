import NavLinks from '@/app/ui/components/nav-links';
// import UserButton from '@/app/ui/components/login/user-button';

export default function SideNav() {
  return (
    <div className="flex flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <UserButton /> */}
      </div>
    </div>
  );
}