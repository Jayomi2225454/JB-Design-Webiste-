
import { useState, lazy, Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OngoingProjects from "@/components/OngoingProjects";

interface Project {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
}

const Projects = () => {
  const projectsData = {
    all: [
      { id: "contemporary-comfort", image: "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png", category: "Residential Interior", title: "RESIDENTIAL PROJECT", description: "A modern approach to residential interior design featuring elegant spaces with refined finishes in Ahmedabad." },
      { id: "elegant-lighting", image: "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png", category: "Residential Interior", title: "RESIDENTIAL PROJECT", description: "Contemporary home interior design in Ahmedabad featuring stylish spaces with detailed woodwork and elegant lighting solutions." },
      { id: "logic-factory", image: "/lovable-uploads/cdfd3545-f45d-4f9a-9e6a-3844122e5cb2.png", category: "Office", title: "OFFICE SPACE", description: "Modern office interior design featuring innovative branding elements and functional workspace solutions in Ahmedabad." },
      { id: "productive-environment", image: "/lovable-uploads/b30960a1-e90c-44f3-9a65-4d27d8d39085.png", category: "Office Space", title: "OFFICE SPACE", description: "Modern corporate office design with innovative layouts and thoughtful branding elements in Ahmedabad." },
      { id: "sk-mishra", image: "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png", category: "Architecture", title: "ARCHITECTURE PROJECT", description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces in Mumbai." },
      { id: "architecture-project", image: "/lovable-uploads/ce00e14a-8d46-4ff9-9afb-cff44dfa7962.png", category: "Architecture", title: "ARCHITECTURE PROJECT", description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces in Ahmedabad." },
    ],
    residential: [
      { id: "contemporary-comfort", image: "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png", category: "Residential Interior", title: "RESIDENTIAL PROJECT", description: "A modern approach to residential interior design featuring elegant spaces with refined finishes in Ahmedabad." },
      { id: "elegant-lighting", image: "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png", category: "Residential Interior", title: "RESIDENTIAL PROJECT", description: "Contemporary home interior design in Ahmedabad featuring stylish spaces with detailed woodwork and elegant lighting solutions." },
    ],
    office: [
      { id: "productive-environment", image: "/lovable-uploads/b30960a1-e90c-44f3-9a65-4d27d8d39085.png", category: "Office Space", title: "OFFICE SPACE", description: "Modern corporate office design with innovative layouts and thoughtful branding elements in Ahmedabad." },
      { id: "logic-factory", image: "/lovable-uploads/cdfd3545-f45d-4f9a-9e6a-3844122e5cb2.png", category: "Office", title: "OFFICE SPACE", description: "Modern office interior design featuring innovative branding elements and functional workspace solutions in Ahmedabad." },
    ],
    architecture: [
      { id: "sk-mishra", image: "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png", category: "Architecture", title: "ARCHITECTURE PROJECT", description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces in Mumbai." },
      { id: "architecture-project", image: "/lovable-uploads/ce00e14a-8d46-4ff9-9afb-cff44dfa7962.png", category: "Architecture", title: "ARCHITECTURE PROJECT", description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces in Ahmedabad." },
    ],
  };

  return (
    <>
      <Header />
      <main className="pt-40">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-16 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Projects
            </h1>
            <div className="w-20 h-1 bg-interior-gold mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our complete portfolio of interior design projects across various categories
            </p>
          </div>

          {/* Ongoing Projects Section */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6 text-center">Ongoing Projects</h2>
            <div className="w-16 h-1 bg-interior-gold mx-auto mb-12"></div>
            <Suspense fallback={<div className="py-8 text-center">Loading ongoing projects...</div>}>
              <OngoingProjects />
            </Suspense>
          </div>

          <h2 className="font-serif text-3xl font-bold mb-6 text-center">Completed Projects</h2>
          <div className="w-16 h-1 bg-interior-gold mx-auto mb-12"></div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="all" className="font-medium text-sm">All</TabsTrigger>
                <TabsTrigger value="residential" className="font-medium text-sm">Residential</TabsTrigger>
                <TabsTrigger value="office" className="font-medium text-sm">Office</TabsTrigger>
                <TabsTrigger value="architecture" className="font-medium text-sm">Architecture</TabsTrigger>
              </TabsList>
            </div>
            
            {Object.entries(projectsData).map(([category, projects]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project: Project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="no-underline">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                        <AspectRatio ratio={3/2}>
                          <img 
                            src={project.image} 
                            alt={project.title}
                            loading="lazy"
                            width="600"
                            height="400" 
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" 
                          />
                        </AspectRatio>
                        <CardContent className="p-6">
                          <div className="text-sm text-interior-gold mb-2 font-medium">{project.category}</div>
                          <h3 className="font-serif text-xl mb-2">{project.title}</h3>
                          <p className="text-gray-600 text-sm">{project.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
