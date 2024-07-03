import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguagePage } from "../../pages/LanguagePage/LanguagePage";
import { GenderPage } from "../../pages/GenderPage/GenderPage";
import { AgePage } from "../../pages/AgePage/AgePage";
import { HatePage } from "../../pages/HatePage/HatePage";
import { TopicsPage } from "../../pages/TopicsPage/TopicsPage";
import { EmailPage } from "../../pages/EmailPage/EmailPage";
import { ThanksPage } from "../../pages/ThanksPage/ThanksPage";

export const RoutingComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguagePage />} />
        <Route path="/quiz/2" element={<GenderPage />} />
        <Route path="/quiz/3" element={<AgePage />} />
        <Route path="/quiz/4" element={<HatePage />} />
        <Route path="/quiz/5" element={<TopicsPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </BrowserRouter>
  );
};
