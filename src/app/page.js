import AppointmentFeatureSectionPage from "@/components/AppointmentFeatureSection";
import BannerPage from "@/components/Banner";
import CategorySectionPage from "@/components/CategorySection";
import FeaturePage from "@/components/Feature";

export const metadata = {
  title: "Home - Doctor Appointment",
};

export default function Home() {
  return (
    <div>
      <BannerPage />
      <FeaturePage />
      <CategorySectionPage />
      <AppointmentFeatureSectionPage />
    </div>
  );
}
