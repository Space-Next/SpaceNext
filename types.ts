export interface RocketData {
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  first_stage: {
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  second_stage: {
    thrust: {
      kN: number;
      lbf: number;
    };
    payloads: {
      composite_fairing: {
        height: {
          meters: number;
          feet: number;
        };
        diameter: {
          meters: number;
          feet: number;
        };
      };
      option_1: string;
    };
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number;
  };
  engines: {
    isp: {
      sea_level: number;
      vacuum: number;
    };
    thrust_sea_level: {
      kN: number;
      lbf: number;
    };
    thrust_vacuum: {
      kN: number;
      lbf: number;
    };
    number: number;
    type: string;
    version: string;
    layout: string;
    engine_loss_max: number;
    propellant_1: string;
    propellant_2: string;
    thrust_to_weight: number;
  };
  landing_legs: {
    number: number;
    material: string;
  };
  payload_weights: {
    id: string;
    name: string;
    kg: number;
    lb: number;
  }[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
}

export interface FormattedRocketData {
  id: string;
  overview: {
    images: string[];
    name: string;
    description: string;
    wikipedia: string;
    active: boolean;
    engine: string;
    stages: number;
    layout: string;
  };
  specs: {
    spec: string;
    main: string | number;
    secondary: string | number;
    mainSuffix?: string;
    secondarySuffix?: string;
  }[];
  payloadWeights: {
    id: string;
    spec: string;
    main: number;
    secondary: number;
    mainSuffix: string;
    secondarySuffix: string;
  }[];
}

export interface LaunchData {
  fairings: {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: null;
    ships: string[] | [];
  };
  links: {
    patch: {
      small: string;
      large: string;
    };
    reddit: {
      campaign: string;
      launched: string;
      media: string | null;
      recovery: string;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    presskit: null;
    webcast: string;
    youtube_id: string;
    article: string | null;
    wikipedia: string;
  };

  static_fire_date_utc: number;
  static_fire_date_unix: number;
  tbd: boolean;
  net: boolean;
  window: string | number | null;
  rocket: string;
  success: boolean;
  details: string;
  crew: string[];
  ships: string[];
  capsules: string[];
  payloads: string[];
  launchpad: string;
  auto_update: boolean;
  launch_library_id: string;
  failures: string[];
  flight_number: number;
  name: string;
  date_utc: string;
  date_unix: number;
  date_local: string;
  date_precision: string;
  upcoming: boolean;
  cores: {
    core: string;
    flight: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    landing_attempt: boolean;
    landing_success: boolean;
    landing_type: string;
    landpad: string;
  }[];
  id: string;
}

export interface FormattedLaunchData {
  id: string;
  details: string;
  rocketId: string;
  flightNumber: number;
  success?: boolean;
  dateLocal: string;
  payloads: string[];
  largePatch: string;
  flickr: string[];
  wikipedia: string;
  youtube: string;
}

export interface HistoryData {
  links: {
    article: string
  };
  title: string;
  event_date_utc: string;
  details: string;
  id: string
}

export interface FormattedHistoryData {
  links: string;
  title: string;
  event_date: string;
  details: string;
  id: string;
}