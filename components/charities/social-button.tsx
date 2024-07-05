import React from "react";
import { socials } from "@/constants/index";

interface SocialButtonProps {
  url: string;
}

const SocialButton = ({ url }: SocialButtonProps) => {
  console.log(url);
  return (
    <div className="grid grid-cols-2 gap-2">
      {socials.map((social, index) => {
        const ShareComponent = social.component;
        const IconComponent = social.icon;
        return (
          <ShareComponent key={index} url={url}>
            <div className="px-4 py-3 flex items-center justify-start gap-3 w-full text-base bg-none text-black rounded-md hover:bg-slate-100">
              <IconComponent size={40} round />
              <span>{social.label}</span>
            </div>
          </ShareComponent>
        );
      })}
    </div>
  );
};

export default SocialButton;
