import React from "react";
import PageHeader from "../components/PageHeader";
import TextBanner from "../components/TextBanner";
import MainContent from "../components/MainContent";
import MultiContentSwitcher from "../components/MultiContentSwitcher";
import PageFooter from "../components/PageFooter";
import Form from "../components/Form";
import ResourcesSection from "../components/ResourcesSection";

const HomePage = () => {
  return (
    <div>
      <PageHeader />
      <TextBanner />
      <MainContent />
      <MultiContentSwitcher />
      <ResourcesSection />
      <Form />
      <PageFooter />
    </div>
  );
};

export default HomePage;
