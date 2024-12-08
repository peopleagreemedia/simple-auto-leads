export const translations = {
  EN: {
    hero: {
      title: "Get Your Personal Ford Shopping Dashboard",
      subtitle: "Expert guidance and personalized recommendations, right on your phone",
      description: "Start your journey to finding the perfect Ford with a simple consultation call. Our experts will set up your custom dashboard and guide you every step of the way."
    },
    benefits: [
      "Get personalized vehicle recommendations",
      "Compare prices and features instantly",
      "Access expert research and reviews",
      "Chat with consultants anytime in the app",
      "Track your favorite vehicles",
      "Estimate your credit score instantly",
      "Available in English and Spanish",
      "Most vehicles come with Free Lifetime Powertrain Warranty (see dealer for details)"
    ],
    features: {
      chatSupport: {
        title: "Expert Support",
        description: "Chat with our consultants anytime through the app"
      },
      creditScore: {
        title: "Smart Tools",
        description: "Estimate payments and explore financing options"
      },
      warranty: {
        title: "Peace of Mind",
        description: "Most vehicles include Free Lifetime Powertrain Warranty coverage. See dealer for complete details."
      }
    },
    setup: {
      title: "Easy 3-Step Setup",
      steps: [
        {
          title: "Quick Consultation",
          description: "Brief call with our expert to understand your needs"
        },
        {
          title: "Secure Access",
          description: "Receive your personal setup code via SMS"
        },
        {
          title: "Start Shopping",
          description: "Access your dashboard and start exploring options"
        }
      ]
    },
    form: {
      title: "Get Started with Your Personal Dashboard",
      subtitle: "Fill out this form to schedule your quick consultation call",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Your Phone Number",
      submitButton: "Schedule My Consultation",
      loadingButton: "Scheduling...",
      privacyNote: "Your information is secure. We'll text you to confirm your consultation time."
    },
    testimonial: {
      quote: "The personal dashboard made finding my perfect Ford so easy. The consultant was incredibly helpful during setup!",
      author: "- Sarah M., Happy Ford Owner"
    },
    preview: {
      default: "Select a vehicle model to see detailed information",
      custom: (model: string) => `Get detailed information about your ${model} and connect with our experts`
    }
  },
  ES: {
    hero: {
      title: "Obtén Tu Panel de Control Personal Ford",
      subtitle: "Orientación experta y recomendaciones personalizadas, directamente en tu teléfono",
      description: "Comienza tu búsqueda del Ford perfecto con una simple llamada de consulta. Nuestros expertos configurarán tu panel personalizado y te guiarán en cada paso."
    },
    benefits: [
      "Obtén recomendaciones personalizadas de vehículos",
      "Compara precios y características al instante",
      "Accede a investigaciones y reseñas de expertos",
      "Chatea con consultores en cualquier momento",
      "Sigue tus vehículos favoritos",
      "Estima tu puntaje crediticio al instante",
      "Disponible en inglés y español",
      "La mayoría de los vehículos incluyen garantía gratuita de por vida del tren motriz (consulte al distribuidor para más detalles)"
    ],
    features: {
      chatSupport: {
        title: "Soporte Experto",
        description: "Chatea con nuestros consultores en cualquier momento"
      },
      creditScore: {
        title: "Herramientas Inteligentes",
        description: "Estima pagos y explora opciones de financiamiento"
      },
      warranty: {
        title: "Tranquilidad Total",
        description: "La mayoría de los vehículos incluyen garantía gratuita de por vida del tren motriz. Consulte al distribuidor para detalles completos."
      }
    },
    setup: {
      title: "Configuración en 3 Pasos",
      steps: [
        {
          title: "Consulta Rápida",
          description: "Breve llamada con nuestro experto para entender tus necesidades"
        },
        {
          title: "Acceso Seguro",
          description: "Recibe tu código de configuración por SMS"
        },
        {
          title: "Empieza a Comprar",
          description: "Accede a tu panel y comienza a explorar opciones"
        }
      ]
    },
    form: {
      title: "Comienza con Tu Panel Personal",
      subtitle: "Completa este formulario para programar tu consulta rápida",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Correo Electrónico",
      phonePlaceholder: "Tu Número de Teléfono",
      submitButton: "Programar Mi Consulta",
      loadingButton: "Programando...",
      privacyNote: "Tu información está segura. Te enviaremos un mensaje para confirmar tu hora de consulta."
    },
    testimonial: {
      quote: "El panel personal hizo que encontrar mi Ford perfecto fuera muy fácil. ¡El consultor fue increíblemente útil durante la configuración!",
      author: "- Sara M., Propietaria Feliz de Ford"
    },
    preview: {
      default: "Seleccione un modelo de vehículo para ver información detallada",
      custom: (model: string) => `Obtenga información detallada sobre su ${model} y conéctese con nuestros expertos`
    }
  }
};
