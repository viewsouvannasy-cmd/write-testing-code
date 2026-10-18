import { useTranslation } from "react-i18next";

export function Language() {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-4 gap-3 flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold ">Language Test</h1>
        <button
          onClick={() => {
            const next = t("language") === "en" ? "th" : "en";
            i18n.changeLanguage(next);
          }}
          className="p-1 px-3 text-white cursor-pointer bg-black"
        >
          {t("language") === "en" ? "TH" : "EN"}
        </button>
      </div>

      <div className="flex shadow shadow-olive-500 p-3 flex-col">
        <p className="text-lg font-medium">{t("greeting")}</p>
        <span>{t("name", { name: "bob" })}</span>
        <span>{t("age", { age: 30 })}</span>
        <span>{t("job", { job: "Solfware Engineer" })}</span>
      </div>
    </div>
  );
}
