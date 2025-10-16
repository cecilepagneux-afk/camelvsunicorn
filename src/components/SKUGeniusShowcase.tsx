import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import skuGeniusLogin from "@/assets/sku-genius-login.png";
import skuGeniusCreate from "@/assets/sku-genius-create.png";
import skuGeniusDashboard from "@/assets/sku-genius-dashboard.png";
import skuGeniusInventory from "@/assets/sku-genius-inventory.png";
import skuGeniusProfitability from "@/assets/sku-genius-profitability.png";
import skuGeniusRationalization from "@/assets/sku-genius-rationalization.png";

const SKUGeniusShowcase = () => {
  const carouselImages = [
    { src: skuGeniusLogin, alt: "SKU Genius Login Screen" },
    { src: skuGeniusCreate, alt: "Create SKU Interface" },
    { src: skuGeniusDashboard, alt: "Analytics Dashboard" },
    { src: skuGeniusInventory, alt: "Real-Time Inventory View" },
    { src: skuGeniusProfitability, alt: "Profitability Analysis" },
    { src: skuGeniusRationalization, alt: "SKU Rationalization Module" },
  ];

  return (
    <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col gap-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cvds-primary to-cvds-secondary flex items-center justify-center">
            <ExternalLink className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h3 className="text-2xl font-bold text-cvds-dark">
              SKU Genius
            </h3>
            <span className="inline-block mt-2 md:mt-0 px-4 py-1 bg-cvds-primary/10 text-cvds-primary rounded-full text-sm font-medium">
              Prototype
            </span>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            AI-powered catalog and inventory manager helping e-commerce merchants streamline SKUs, automate product data enrichment, and maintain consistency across multiple sales channels.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Product data structuring
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              Multi-channel sync
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              AI enrichment
            </span>
          </div>

          {/* Carousel */}
          <div className="mb-6">
            <Carousel className="w-full">
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
            <p className="text-center text-sm text-gray-500 mt-4 italic">
              Explore the SKU Genius prototype — live demo available upon request.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="cvds-hero"
              size="lg"
              className="text-lg px-8 py-5 h-auto hover:shadow-lg transition-all group"
              asChild
            >
              <a 
                href="mailto:cecile.pagneux@hotmail.fr?subject=SKU%20Genius%20Demo%20Request"
                className="inline-flex items-center"
              >
                Request Live Demo
                <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SKUGeniusShowcase;
