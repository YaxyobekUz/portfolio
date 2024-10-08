import React from "react";
import { Link } from "react-router-dom";

// Translate
import { useTranslation } from "react-i18next";

// Components
import MainArrow from "../components/MainArrow";
import MarkdownRenderer from "../components/MarkdownRenderer";

const Home = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="flex flex-col items-start justify-end min-h-full pt-12 pb-20 sm:py-24 sm:items-center sm:justify-center">
      <div className="flex flex-col items-start gap-6 max-w-96 sm:items-center sm:max-w-xl md:max-w-2xl">
        {/* Title */}
        <h1 className="markdown strong-primary sm:text-center">
          <MarkdownRenderer text={t("homepage_title")} />
        </h1>

        {/* Description */}
        <p className="text-white/70 sm:text-center md:text-lg">
          {t("homepage_description")}
        </p>

        {/* Projects link */}
        <Link
          to={`/${currentLanguage}/about`}
          className="btn-primary group px-9"
        >
          <span>{t("homepage_main_btn")}</span>
          <MainArrow
            direction="right"
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
