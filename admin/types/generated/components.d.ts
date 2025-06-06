import type { Schema, Struct } from '@strapi/strapi';

export interface BasicButton extends Struct.ComponentSchema {
  collectionName: 'components_basic_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['filled', 'transparent']> &
      Schema.Attribute.DefaultTo<'filled'>;
    href: Schema.Attribute.String;
    mode: Schema.Attribute.Enumeration<
      ['default', 'full-width', 'mobile-full-width']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    size: Schema.Attribute.Enumeration<
      [
        'small',
        'medium',
        'large',
        'small-medium',
        'small-large',
        'medium-large',
      ]
    > &
      Schema.Attribute.DefaultTo<'small'>;
    text: Schema.Attribute.String;
  };
}

export interface BasicDoubleText extends Struct.ComponentSchema {
  collectionName: 'components_basic_double_texts';
  info: {
    displayName: 'Double text';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface BasicImage extends Struct.ComponentSchema {
  collectionName: 'components_basic_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface BasicLink extends Struct.ComponentSchema {
  collectionName: 'components_basic_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface BasicPicture extends Struct.ComponentSchema {
  collectionName: 'components_basic_pictures';
  info: {
    displayName: 'Picture';
  };
  attributes: {
    imgDesktop: Schema.Attribute.Media<'images'>;
    imgMobile: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface BasicRichtext extends Struct.ComponentSchema {
  collectionName: 'components_basic_richtexts';
  info: {
    displayName: 'Richtext';
  };
  attributes: {
    textblocks: Schema.Attribute.Blocks;
  };
}

export interface BasicText extends Struct.ComponentSchema {
  collectionName: 'components_basic_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface CustomGallery extends Struct.ComponentSchema {
  collectionName: 'components_custom_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    images: Schema.Attribute.Component<'basic.picture', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CustomHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_custom_hero_banners';
  info: {
    description: '';
    displayName: 'Hero banner';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'basic.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    imageDesktop: Schema.Attribute.Media<'images'>;
    imageMobile: Schema.Attribute.Media<'images', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CustomHeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_custom_hero_sliders';
  info: {
    displayName: 'Hero slider';
  };
  attributes: {
    slides: Schema.Attribute.Component<'custom.hero-banner', true>;
  };
}

export interface CustomImageContent extends Struct.ComponentSchema {
  collectionName: 'components_custom_image_contents';
  info: {
    displayName: 'Image Content';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'basic.button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    imageDesktop: Schema.Attribute.Media<'images'>;
    imageMobile: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'right'>;
    links: Schema.Attribute.Component<'basic.link', true>;
    textblocks: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface CustomStatistics extends Struct.ComponentSchema {
  collectionName: 'components_custom_statistics';
  info: {
    description: '';
    displayName: 'Statistics';
  };
  attributes: {
    link: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'basic.double-text', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.button': BasicButton;
      'basic.double-text': BasicDoubleText;
      'basic.image': BasicImage;
      'basic.link': BasicLink;
      'basic.picture': BasicPicture;
      'basic.richtext': BasicRichtext;
      'basic.text': BasicText;
      'custom.gallery': CustomGallery;
      'custom.hero-banner': CustomHeroBanner;
      'custom.hero-slider': CustomHeroSlider;
      'custom.image-content': CustomImageContent;
      'custom.statistics': CustomStatistics;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
    }
  }
}
