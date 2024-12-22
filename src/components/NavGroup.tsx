"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const GroupSvg = () => {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Vector"
          d="M22.4999 7.17499H1.49995C1.04995 7.17499 0.637451 7.54999 0.637451 8.03749C0.637451 8.48749 1.01245 8.89999 1.49995 8.89999H22.4999C22.9499 8.89999 23.3624 8.52499 23.3624 8.03749C23.3624 7.54999 22.9499 7.17499 22.4999 7.17499Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_2"
          d="M22.4999 13.55H1.49995C1.04995 13.55 0.637451 13.925 0.637451 14.4125C0.637451 14.9 1.01245 15.275 1.49995 15.275H22.4999C22.9499 15.275 23.3624 14.9 23.3624 14.4125C23.3624 13.925 22.9499 13.55 22.4999 13.55Z"
          fill="#E6E6E6"
        />
        <path
          id="Vector_3"
          d="M1.49995 2.44998H22.4999C22.9499 2.44998 23.3624 2.07498 23.3624 1.58748C23.3624 1.09998 22.9874 0.724976 22.4999 0.724976H1.49995C1.04995 0.724976 0.637451 1.09998 0.637451 1.58748C0.637451 2.07498 1.04995 2.44998 1.49995 2.44998Z"
          fill="#E6E6E6"
        />
      </g>
    </svg>
  );
};

const NavGroup = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <GroupSvg />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20 mt-1">
        <DropdownMenuGroup>
          <DropdownMenuItem>Blogs</DropdownMenuItem>
          <DropdownMenuItem>Docs</DropdownMenuItem>
          <DropdownMenuItem>
            <a href="https://discord.gg/j27XVFVmJM">Discord</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="https://x.com/tonboio">X</a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavGroup;
