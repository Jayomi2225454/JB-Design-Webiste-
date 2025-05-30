import { useParams, Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Image } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// This is just mock data - in a real app this would come from an API or database
const projectsData = {
  "contemporary-comfort": {
    title: "Project",
    category: "Residential Interior",
    description: "A modern approach to residential interior design featuring elegant spaces with refined finishes. This project incorporates contemporary elements with functional layout planning, custom furniture, and thoughtful lighting solutions to create a sophisticated yet comfortable living environment.",
    client: "Private",
    location: "Ahmedabad, Gujarat",
    year: "2023",
    mainImage: "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png",
    galleryImages: [
      "/lovable-uploads/f7eb8f22-a7f4-4f2c-ac7a-92f8e9bfa0a7.png",
      "/lovable-uploads/6343d498-d1fb-4f90-8cec-9d41e38d06ef.png",
      "/lovable-uploads/78da7c8e-6576-4717-9e98-035acd9d8953.png",
      "/lovable-uploads/9d151cff-36c4-4f79-b213-43a42890d02c.png",
      "/lovable-uploads/8166d5f5-c434-4975-bd16-8dd9f6e80489.png",
      "/lovable-uploads/c301d838-6e26-4aa3-8deb-19a06f2b9c60.png",
      "/lovable-uploads/fc50f247-2270-4eb7-8194-dd3b1ba39fd1.png",
      "/lovable-uploads/c20e2172-d110-4581-8c34-7b44ba5ed327.png",
      "/lovable-uploads/cd0cee40-9d6d-47e2-b009-fbc93731c461.png"
    ]
  },
  "elegant-lighting": {
    title: "Project",
    category: "Residential Interior",
    description: "Contemporary home interior design in Ahmedabad featuring stylish spaces with detailed woodwork and elegant lighting solutions. This residential project balances modern aesthetics with functional living spaces, creating a comfortable and sophisticated home environment.",
    client: "Private",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    mainImage: "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png",
    galleryImages: [
      "/lovable-uploads/f99c3da1-0d31-4847-bf6e-9dceb62e04cf.png",
      "/lovable-uploads/ff4c739d-831c-416e-b549-a9e950b19d1e.png",
      "/lovable-uploads/72e5a038-d2d6-454b-840c-26632e703a33.png",
      "/lovable-uploads/70e09526-27d3-4283-9db4-9ce23544f584.png",
      "/lovable-uploads/060beaa6-a0c1-4baf-b153-2aded1afc8c2.png",
      "/lovable-uploads/9a5eae0d-76dd-43d2-b726-5ae320658b24.png",
      "/lovable-uploads/0187c96c-d581-46c9-b7b4-4c81358e43b6.png",
      "/lovable-uploads/70897698-728a-49bc-9b10-137bbe42cc4f.png",
      "/lovable-uploads/4e7b1b91-83c4-4841-ba5c-5f3d8700c358.png"
    ]
  },
  "productive-environment": {
    title: "Office Space",
    category: "Office Space",
    description: "A modern corporate workspace design featuring innovative layouts, premium materials, and thoughtful branding elements. This office project combines functionality with aesthetic excellence, creating a productive and inspiring work environment.",
    client: "Private",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    mainImage: "/lovable-uploads/b30960a1-e90c-44f3-9a65-4d27d8d39085.png",
    galleryImages: [
      "/lovable-uploads/b30960a1-e90c-44f3-9a65-4d27d8d39085.png",
      "/lovable-uploads/ceca21b6-fa7f-48fd-9915-ac90f2372f98.png",
      "/lovable-uploads/caaa88f5-152a-4b88-8c82-7e7d5fecca9a.png", 
      "/lovable-uploads/9be51e35-16ce-4508-be50-74e5c57c154c.png",
      "/lovable-uploads/1d7f8c01-ea4a-443b-9dee-4929ce574665.png",
      "/lovable-uploads/b4c39dc9-e91b-4691-a493-aa630a805b17.png",
      "/lovable-uploads/cc953a97-dd75-499d-84cd-ec13f2cb0d7c.png",
      "/lovable-uploads/60a896e8-2e9a-4e73-adcf-b7b0be683a6e.png"
    ]
  },
  "logic-factory": {
    title: "Logic Factory",
    category: "Office",
    description: "Modern office interior design featuring innovative branding elements and functional workspace solutions. This project showcases contemporary corporate aesthetics with attention to detail in creating a productive and visually appealing environment.",
    client: "Private",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    mainImage: "/lovable-uploads/cdfd3545-f45d-4f9a-9e6a-3844122e5cb2.png",
    galleryImages: [
      "/lovable-uploads/cdfd3545-f45d-4f9a-9e6a-3844122e5cb2.png",
      "/lovable-uploads/08006506-e6a4-4304-a23e-4b51c4b25501.png",
      "/lovable-uploads/b2eccccf-a65b-42ee-bef6-c17d414484ab.png",
      "/lovable-uploads/0c6bdaef-2ca6-4178-9676-3a5eaac71cac.png",
      "/lovable-uploads/03da9f3e-a88f-433e-9db8-05851506f03c.png",
      "/lovable-uploads/eb2ea9df-b163-4c09-993c-90f3ff9aaeb7.png"
    ]
  },
  "sk-mishra": {
    title: "SK Mishra",
    category: "Architecture",
    description: "Contemporary architectural design featuring elegant modern aesthetics with functional living spaces. This residential project showcases innovative form and structure with attention to natural light and spatial flow.",
    client: "SK Mishra Residence",
    location: "Mumbai, India",
    year: "2024",
    mainImage: "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png",
    galleryImages: [
      "/lovable-uploads/e59cef9a-5949-44aa-ba5b-7778c8fc62d2.png",
      "/lovable-uploads/6b6e6aa1-c1a0-4a58-8e67-206abd94be9c.png",
      "/lovable-uploads/8ebcfa03-3693-4995-9943-6acd25347333.png",
      "/lovable-uploads/91d4631a-5383-447f-95a1-ef5211b94c0c.png"
    ]
  },
  "architecture-project": {
    title: "ARCHITECTURE PROJECT",
    category: "Architecture",
    description: "Contemporary residential architectural design featuring modern aesthetics with innovative structural elements. This project showcases excellent use of materials including brick and contemporary finishes, creating a harmonious blend of traditional and modern architectural styles.",
    client: "Private",
    location: "Ahmedabad, Gujarat",
    year: "2024",
    mainImage: "/lovable-uploads/ce00e14a-8d46-4ff9-9afb-cff44dfa7962.png",
    galleryImages: [
      "/lovable-uploads/ce00e14a-8d46-4ff9-9afb-cff44dfa7962.png",
      "/lovable-uploads/df1e5540-1378-4f90-871c-b1f6edf966e3.png"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Check if projectId exists in our data
  const project = projectId && projectsData[projectId as keyof typeof projectsData];
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="font-serif text-2xl mb-6">Project not found</h2>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2" size={16} />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }
  
  const handleRequestProject = () => {
    // Create WhatsApp message with project details
    const message = `Hello, I'm interested in a project similar to "${project.title}"!\n\nProject Type: ${project.category}\nLocation: ${project.location}\n\nI would like to discuss how we can create something similar for my space.`;
    
    // Redirect to WhatsApp with the message
    const whatsappUrl = `https://wa.me/919377766717?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-interior-charcoal min-h-screen pb-20">
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src={project.mainImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-interior-gold text-xl">{project.category}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link to="/#projects" className="inline-flex mb-8">
          <Button variant="outline" className="border-interior-gold text-interior-gold hover:bg-interior-gold/10">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-white mb-6">Project Overview</h2>
            <p className="text-interior-beige/80 mb-8 leading-relaxed">{project.description}</p>
            
            <h2 className="font-serif text-2xl text-white mb-6 mt-12">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group cursor-pointer overflow-hidden rounded-md"
                  onClick={() => setSelectedImage(image)}
                >
                  <AspectRatio ratio={3/2}>
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Image className="text-white" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-interior-navy/30 p-6 h-fit rounded-md border border-interior-gold/10">
            <h3 className="font-serif text-xl text-white mb-6">Project Details</h3>
            <dl className="space-y-4">
              <div>
                <dt className="text-interior-gold text-sm">Client</dt>
                <dd className="text-white">{project.client}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Location</dt>
                <dd className="text-white">{project.location}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Year Completed</dt>
                <dd className="text-white">{project.year}</dd>
              </div>
              <div>
                <dt className="text-interior-gold text-sm">Category</dt>
                <dd className="text-white">{project.category}</dd>
              </div>
            </dl>
            
            <div className="mt-8">
              <Button 
                className="w-full bg-interior-gold hover:bg-interior-gold/90 text-black"
                onClick={handleRequestProject}
              >
                Request Similar Project
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-black border-gray-800">
          <div className="relative w-full">
            <img
              src={selectedImage || ''}
              alt="Enlarged view"
              className="w-full h-auto object-contain max-h-[80vh]"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
