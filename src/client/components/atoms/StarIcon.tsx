import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

interface IconProps extends SvgIconProps {
  className?: string;
}

const StarIcon: React.FC<IconProps> = ({ className, ...props }) => {
  return (
    <SvgIcon
      {...props}
      className={className}
      viewBox="0 0 24 24"
      sx={{
        fontSize: 24, // Default size equivalent to "size-6" in Tailwind
        ...(props.sx || {}), // Allow custom sx prop to override styles
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      />
    </SvgIcon>
  );
};

export default StarIcon;