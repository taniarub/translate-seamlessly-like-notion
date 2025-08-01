import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  return (
    <section className="py-2xl">
      <div className="container mx-auto text-center">
        <p className="text-notion-xl text-text-secondary mb-8">
          Download now and enjoy full access for free.
        </p>
        
        <Button variant="primary" size="lg" className="font-medium">
          Get the App
        </Button>
      </div>
    </section>
  );
};

export default DownloadSection;