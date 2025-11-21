import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Star, Megaphone, PenTool, BookOpen, ChevronUp } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useState } from "react";

const WebsiteListing = () => {
  const domainName = "SaferBoards.com";
  const price = "$3,500";
  const backlinks = "8";
  const domainAge = "2 years";
  const monthlyVisits = "235";
  const seoRating = "9";
  
  const [isBlogVisible, setIsBlogVisible] = useState(false);
  
  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: 'var(--gradient-hero)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/40 hover:bg-white/30 font-montserrat">
            Premium Domain Available
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white font-spartan">
            {domainName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-poppins">
            Redefining kitchen and construction safety with advanced non-slip board technology
          </p>
          <div className="text-5xl font-bold mb-8 text-white font-spartan">
            {price}
          </div>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg font-montserrat"
          >
            Contact Seller
          </Button>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-6 text-center">
              <div 
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <span className="text-3xl font-bold text-white">{backlinks}</span>
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <p className="text-2xl font-bold text-foreground font-spartan">Backlinks</p>
                <TrendingUp className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-sm text-muted-foreground">Strong SEO Foundation</p>
            </CardContent>
          </Card>

          <Card className="border-none" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-6 text-center">
              <div className="text-5xl font-bold mb-2 text-primary font-spartan">{domainAge}</div>
              <p className="text-xl font-semibold text-foreground mb-2 font-spartan">Domain Age</p>
              <p className="text-sm text-muted-foreground">Established Authority</p>
            </CardContent>
          </Card>

          <Card className="border-none" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-6 text-center">
              <div className="text-5xl font-bold mb-2 text-primary font-spartan">{monthlyVisits}</div>
              <p className="text-xl font-semibold text-foreground mb-2 font-spartan">Monthly Visits</p>
              <p className="text-sm text-muted-foreground">Organic Traffic</p>
            </CardContent>
          </Card>

          <Card className="border-none" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardContent className="p-6 text-center">
              <div className="text-5xl font-bold mb-2 text-primary font-spartan">{seoRating}/10</div>
              <p className="text-xl font-semibold text-foreground mb-2 font-spartan">SEO Rating</p>
              <p className="text-sm text-muted-foreground">Excellent Score</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none" style={{ boxShadow: 'var(--shadow-luxury)' }}>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-foreground font-spartan">About {domainName}</h2>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                SaferBoards.com specializes in high-performance non-slip cutting boards and kitchen safety gear designed to prevent accidents before they happen.
              </p>
              <p className="text-lg mb-4 text-muted-foreground leading-relaxed">
                Built for homes, professional chefs, and commercial kitchens, our products combine hygiene, durability, and smart design.
              </p>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                Also has the potential to expand into outdoor and industrial markets, we bring safer surfaces to decking and construction environments.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary font-montserrat">Perfect For</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Home cooks who value safe, stable, and hygienic cutting surfaces</li>
                    <li>• Commercial kitchens that need durable, non-slip chopping boards</li>
                    <li>• Construction and industrial environments requiring safety boards</li>
                    <li>• DTC brands selling kitchenware or safety tools</li>
                    <li>• Affiliate marketers in home improvement and kitchen niches</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary font-montserrat">Market Opportunity</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Kitchen safety tools industry is booming with millions of annual sales</li>
                    <li>• Non-slip and antimicrobial boards are trending globally</li>
                    <li>• Ideal for building a microbrand focused on safety</li>
                    <li>• High demand in both home and industrial sectors</li>
                    <li>• Strong potential for influencer-driven kitchen safety content</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* DAAS Promotional Section - Blog Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-2xl p-8 md:p-12" style={{ boxShadow: 'var(--shadow-luxury)' }}>
            <Badge className="mb-6 bg-primary text-primary-foreground font-montserrat">Featured Article</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-spartan leading-tight">
              From Kitchens to Construction: The Rise of Safer Boards in Everyday Safety
            </h2>
            
            <div className="prose max-w-none">
              <p className="text-lg md:text-xl mb-6 text-foreground leading-relaxed font-poppins">
                Accidents in the kitchen or on the job site often start with one thing — a slippery surface. At SaferBoards.com, we've made it our mission to eliminate that risk with advanced non-slip board technology designed for both the kitchen and the construction site.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                In the kitchen, a stable cutting board isn't just a convenience — it's a critical safety feature. Our non-slip cutting boards are crafted with premium materials that grip securely to countertops, reducing knife accidents and cross-contamination. Each board is heat-resistant, easy to sanitize, and built to last — ideal for both home chefs and professional kitchens.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                But safety doesn't stop at the kitchen door. Slippery outdoor surfaces and decking remain one of the leading causes of construction-site injuries. That's why SaferBoards is expanding its innovation into anti-slip decking boards, engineered for maximum traction, weather resistance, and long-term durability.
              </p>
              
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                From food prep to floor safety, our goal is simple — to create smarter, safer boards that empower professionals and homeowners alike to work with confidence. Whether you're slicing vegetables or building outdoor decks, safety should never be an afterthought.
              </p>
              
              <p className="text-lg mb-6 text-foreground leading-relaxed font-semibold">
                Discover the new standard in safety at SaferBoards.com — where every surface is built to protect.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground font-spartan mt-10">
                Innovative Safety Features
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <Card className="border-primary/30 bg-primary/5">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary">
                        <Megaphone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground font-spartan">GripLock™ Technology</h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Our GripLock™ Surface Technology uses micro-texture engineering to prevent dangerous slips and ensure stability during use.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-secondary/30 bg-secondary/5">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-secondary">
                        <PenTool className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground font-spartan">SafeDeck™ Line</h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      The SafeDeck™ line brings anti-slip innovation to construction and outdoor usage with rugged durability.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10 p-8 bg-accent/30 rounded-xl text-center">
                <h4 className="text-2xl font-bold mb-4 text-primary font-spartan">Ready to Own This Domain?</h4>
                <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto">
                  Contact us today to discuss how SaferBoards.com can become your brand in the kitchen and construction safety market.
                </p>
                <Button 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-6 text-lg font-montserrat"
                >
                  Contact promotionocean.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Blog Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <Card className="border-none" style={{ boxShadow: 'var(--shadow-luxury)' }}>
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge className="mb-6 bg-primary text-primary-foreground font-montserrat">Latest Article</Badge>
                
                <div className="flex items-center justify-center gap-6 flex-wrap mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary font-spartan leading-tight">
                    Safety by Design: Why Non-Slip Innovation is Transforming Kitchens and Construction
                  </h2>
                  <Badge className="bg-accent text-secondary font-montserrat text-base px-4 py-2 whitespace-nowrap">
                    21 November 2025
                  </Badge>
                </div>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 font-poppins">
                  Discover how safety-focused design enhances both performance and aesthetics
                </p>
                
                <Button 
                  size="lg"
                  onClick={() => setIsBlogVisible(!isBlogVisible)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg font-montserrat"
                >
                  {isBlogVisible ? (
                    <>
                      <ChevronUp className="w-5 h-5 mr-2" />
                      Hide Article
                    </>
                  ) : (
                    <>
                      <BookOpen className="w-5 h-5 mr-2" />
                      Read Full Article
                    </>
                  )}
                </Button>
              </div>
              
              {isBlogVisible && (
                <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="max-w-3xl mx-auto">
                    {/* Blog Content */}
                    <div className="space-y-6">
                      <p className="text-lg text-foreground leading-relaxed font-poppins">
                        Safety doesn't have to look industrial — it can be sleek, modern, and beautifully practical. At SaferBoards.com, we're proving that safety-focused design can enhance both performance and aesthetics. From non-slip cutting boards in your kitchen to high-traction decking on the job site, it all starts with one principle: control through stability.
                      </p>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                        In the kitchen, slipping boards and unstable prep surfaces cause countless small injuries every year. Our non-slip cutting boards integrate friction-based base layers that lock firmly to countertops, preventing movement even under heavy chopping pressure. Combined with antimicrobial coatings and easy-clean finishes, they deliver a professional-grade experience for every cook.
                      </p>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                        On the construction side, our anti-slip decking systems use precision-molded grooves and weather-resistant compounds to maintain traction in all conditions. For builders, this means reduced liability, fewer slip incidents, and a more professional finish that lasts.
                      </p>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
                        The real innovation lies in the crossover — applying the same safety principles across environments. By reimagining how surfaces grip, absorb shock, and resist wear, SaferBoards is creating a safer future for both kitchens and construction sites.
                      </p>
                      
                      <p className="text-lg text-foreground leading-relaxed font-poppins font-semibold">
                        Because when design starts with safety, every space becomes a better place to work.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Purchase Section */}}
      <section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: 'var(--gradient-primary)' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white font-spartan">Ready to Purchase?</h2>
          <p className="text-xl mb-8 text-white/90 font-poppins">
            Secure this premium domain and establish your brand in the kitchen and construction safety market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 font-montserrat"
            >
              Send Email
            </Button>
            <Button 
              size="lg"
              className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary font-semibold px-8 font-montserrat transition-all"
            >
              View Domain Stats
            </Button>
          </div>
        </div>
      </section>

      {/* Rent Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Rent This Domain to Market Your Service</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            Not ready to purchase? Rent SaferBoards.com to promote your cutting board brand, kitchen safety products, construction safety equipment, or industrial safety tools with instant credibility and SEO benefits.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
          >
            Contact promotionocean.com
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebsiteListing;
