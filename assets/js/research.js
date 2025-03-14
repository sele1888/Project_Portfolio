/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Web Development Trends In 2024",
    authors:
      "Andrew Atlas",
    conferences:
      "Discover the web development trends that will predominate in the field in 2024",
    researchYr: 2023,
    citebox: "popup1",
    image: "assets/images/research-page/W.png",
    citation: {
      vancouver:
        "https://atlasiko.com/blog/web-development/web-development-trends/",
    },
    abstract:
      "With today’s abundance of various digital solutions, you need to be well-versed with all available technologies and keep up with the latest web development trends to create a standout web-based product. Every year the web changes, obtaining new qualities, standards, functional characteristics, visual effects, etc. In the upcoming year 2024, developers anticipate an even bigger shift in the web development field due to the considerable innovations fast-progressing during 2023.",
    absbox: "absPopup1",
  },

  {
    title: "New and improved camera inspired by the human eye",
    authors:
      "University of Maryland",
    conferences:
      "Artificial Microsaccade-Enhanced Event Camera (AMI-EV)",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/EY.jpg",
    citation: {
      vancouver:
        "University of Maryland https://www.sciencedaily.com/releases/2024/07/240701162221.htm",
    },
    abstract:
      "A team led by University of Maryland computer scientists invented a camera mechanism that improves how robots see and react to the world around them. Inspired by how the human eye works, their innovative camera system mimics the tiny involuntary movements used by the eye to maintain clear and stable vision over time.",
    absbox: "absPopup2",
  },

  {
    title:
      "Accelerating AI Innovation",
    authors: " MIT campus",
    conferences:
      "THURSDAY, MAY 23,9:00 A.M. - 5:15 P.M.",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/ai.jpg",
    citation: {
      vancouver:
        "https://event.technologyreview.com/emtech-digital-us-2024/agenda-overview",
    },
    abstract:
      "In the ever-evolving landscape of technology and AI, each advancement fortifies the foundation for future innovation. As breakthroughs continue to unfold, they not only bring new capabilities but also propel us toward faster, more impactful innovations. Brace yourself for the imminent era of accelerated AI innovation.",
    absbox: "absPopup3",
  },

  {
    title:
      "LockBit’s latest attack shows why fintech needs more zero trust",
    authors:
      " “We’re going into the July 4th weekend, and I bet it’s no coincidence for this to hit now—security never takes a holiday”. Wise words from an about CISO.",
    conferences:
      "We want to hear from you! Take our quick AI survey and share your insights on the current state of AI, how you’re implementing it, and what you expect to see in the future.",
    researchYr: 2024,
    citebox: "popup4",
    image: "assets/images/research-page/c1.jpg",
    citation: {
      vancouver:
        "https://venturebeat.com/ai/lockbits-latest-attack-shows-why-fintech-needs-more-zero-trust/",
    },
    abstract:
      "Fintech has a cybersecurity problem. LockBit’s ransomware attack on Evolve and the risk it placed on its partnership network show why the industry needs to focus more on the foundations of zero trust across financial networks. When the Federal Reserve finds gaps two weeks before a ransom attack, it’s time to rethink cyber resilience and cybersecurity at the company and industry level. CISOs are needed to bring the resilience and about fintechs need to stay secure and grow.",
    absbox: "absPopup4",
  },

  // {
  //   title: "Dual Super-Resolution Learning for Semantic Segmentation",
  //   authors: "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup5",
  //   image: "assets/images/research-page/semanticSegmentation.png",
  //   citation: {
  //     vancouver:
  //       "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 5",
  //   absbox: "absPopup5",
  // },

  // {
  //   title: "Deep Unfolding Network for Image Super-Resolution",
  //   authors: "Zhang, Kai and Van Gool, Luc and Timofte, Radu",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup6",
  //   image: "assets/images/research-page/deepNetwork.png",
  //   citation: {
  //     vancouver:
  //       "Zhang, Kai and Van Gool, Luc and Timofte, Radu. Deep Unfolding Network for Image Super-Resolution. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 6",
  //   absbox: "absPopup6",
  // },

  // {
  //   title:
  //     "Unsupervised Learning for Intrinsic Image Decomposition From a Single Image",
  //   authors: "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup7",
  //   image: "assets/images/research-page/imageDecomposition.png",
  //   citation: {
  //     vancouver:
  //       "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 7",
  //   absbox: "absPopup7",
  // },
  // {
  //   title:
  //     "Forward and Backward Information Retention for Accurate Binary Neural Networks",
  //   authors:
  //     "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan",
  //   conferences:
  //     "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
  //   researchYr: 2020,
  //   citebox: "popup8",
  //   image: "assets/images/research-page/neuralNetworks.jpg",
  //   citation: {
  //     vancouver:
  //       "Qin, Haotong and Gong, Ruihao and Liu, Xianglong and Shen, Mingzhu and Wei, Ziran and Yu, Fengwei and Song, Jingkuan. Forward and Backward Information Retention for Accurate Binary Neural Networks. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
  //   },
  //   abstract:
  //     "This is currently left empty and this can be considered as a dummy data 8",
  //   absbox: "absPopup8",
  // },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
