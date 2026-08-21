/* @ds-bundle: {"format":4,"namespace":"DesignSystem_6cc531","components":[{"name":"FeaturedCard","sourcePath":"components/cards/FeaturedCard.jsx"},{"name":"ResourceCard","sourcePath":"components/cards/ResourceCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Heading","sourcePath":"components/core/Heading.jsx"},{"name":"IconEmbed","sourcePath":"components/core/IconEmbed.jsx"},{"name":"Spacer","sourcePath":"components/core/Spacer.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FilterDropdown","sourcePath":"components/forms/FilterDropdown.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Container","sourcePath":"components/layout/Container.jsx"},{"name":"HeroSection","sourcePath":"components/layout/HeroSection.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"}],"sourceHashes":{"components/cards/FeaturedCard.jsx":"37b94c9dba4a","components/cards/ResourceCard.jsx":"f1ec93de2d8a","components/core/Button.jsx":"4ee400e895bf","components/core/Divider.jsx":"5571d417d459","components/core/Eyebrow.jsx":"6d7c353beedf","components/core/Heading.jsx":"680b52c9d928","components/core/IconEmbed.jsx":"3d33d56f676c","components/core/Spacer.jsx":"b3f947f368e2","components/core/Tag.jsx":"b6e46f0e3e9b","components/forms/Checkbox.jsx":"db88c0e29785","components/forms/FilterDropdown.jsx":"e8ac652503d4","components/forms/Input.jsx":"e4112bf37334","components/forms/Label.jsx":"26c2bc02a5c7","components/forms/Radio.jsx":"88daadf859f8","components/layout/Container.jsx":"7e3022b7a33e","components/layout/HeroSection.jsx":"43398943ca3b","components/layout/Section.jsx":"49728357bb19","components/navigation/Footer.jsx":"7acee6e00027","components/navigation/Navbar.jsx":"4ab31f1d17ec","components/navigation/Pagination.jsx":"205955a2e2ed","ui_kits/marketing_site/CareerPathsScreen.jsx":"94c56bd817d0","ui_kits/marketing_site/EducationScreen.jsx":"72b1a654daa8","ui_kits/marketing_site/GetTrainedScreen.jsx":"a2f9eed814c5","ui_kits/marketing_site/ResourceRequestModal.jsx":"a5c4e0bed8ee","ui_kits/marketing_site/data.js":"472d6fd7411f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_6cc531 = window.DesignSystem_6cc531 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: 'var(--green-mist)',
    color: 'var(--neutral-1)',
    border: 'none'
  },
  secondary: {
    backgroundImage: 'linear-gradient(214deg,#306052,#1c3831)',
    color: 'var(--white)',
    border: 'none'
  },
  teal: {
    background: 'var(--teal-bright)',
    color: 'var(--neutral-1)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--neutral-1)',
    border: '1px solid var(--core-green)'
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--white)',
    border: '2px solid var(--core-green)'
  },
  ghost: {
    background: 'var(--wash-white-10)',
    color: 'var(--white)',
    border: 'none'
  },
  link: {
    background: 'transparent',
    color: 'var(--neutral-1)',
    border: 'none',
    padding: '0.25rem 0',
    lineHeight: 1
  }
};
const HOVERS = {
  primary: '#82dfccb3',
  teal: '#3fcccab3',
  outline: 'var(--core-green)'
};
const SIZES = {
  large: {
    padding: '0.9rem 2rem 1rem',
    fontSize: '1.125rem'
  },
  medium: {
    padding: '0.75rem 1rem',
    fontSize: '1rem'
  },
  small: {
    padding: '0.5rem 1.13rem',
    fontSize: '0.875rem'
  },
  navigation: {
    padding: '0.4rem 1.13rem 0.5rem',
    fontSize: '0.875rem'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'large',
  disabled = false,
  icon = null,
  fullWidth = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.large;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: icon ? 'space-between' : 'center',
    gap: '0.75rem',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius: variant === 'link' ? 0 : 'var(--radius-md)',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--weight-regular)',
    lineHeight: 1.125,
    transition: 'var(--transition-button)',
    flex: 'none',
    width: fullWidth ? '100%' : undefined,
    ...v,
    ...(variant === 'link' ? {} : s)
  };
  if (disabled) {
    base.background = 'var(--neutral-4)';
    base.backgroundImage = 'none';
    base.color = 'var(--neutral-1)';
  } else if (hover && HOVERS[variant]) {
    base.background = HOVERS[variant];
    base.backgroundImage = 'none';
    if (variant === 'outline') base.color = 'var(--white)';
  } else if (hover && variant === 'secondary') {
    base.backgroundImage = 'none';
    base.background = 'var(--forest-900)';
  }
  const Tag = href && !disabled ? 'a' : 'button';
  return React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...style
    },
    ...rest
  }, children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  tone = 'light',
  style,
  ...rest
}) {
  const colors = {
    light: 'var(--white)',
    dark: 'var(--neutral-5)',
    accent: 'var(--core-green)'
  };
  return React.createElement('div', {
    style: {
      width: '100%',
      height: 1,
      background: colors[tone] || tone,
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'inherit',
  size = 'small',
  style,
  ...rest
}) {
  const colors = {
    inherit: 'inherit',
    green: 'var(--core-green)',
    teal: 'var(--teal-bright)',
    white: 'var(--white)'
  };
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      lineHeight: 1.4,
      fontWeight: size === 'small' ? 600 : 400,
      fontSize: size === 'small' ? '0.75rem' : '1rem',
      letterSpacing: size === 'small' ? '0.15rem' : undefined,
      color: colors[tone] || tone,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeaturedCard.jsx
try { (() => {
function FeaturedCard({
  image,
  label = 'Featured',
  title,
  kicker,
  description,
  ctaLabel = 'Watch the Recording',
  href,
  onCta,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      borderRadius: 'var(--radius-md)',
      overflow: 'clip',
      color: 'var(--white)',
      background: 'var(--white)',
      boxShadow: '0 2px 4px -2px #0000000f,0 4px 8px -2px #0000001a',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      minHeight: '14.625rem',
      padding: '1rem 1.75rem 1.19rem 1.31rem',
      backgroundImage: image ? 'linear-gradient(#18181899,#18181899),url(' + image + ')' : 'linear-gradient(253deg,var(--teal-bright),var(--core-green))',
      backgroundSize: 'auto,cover',
      backgroundPosition: '0 0,50%',
      backgroundRepeat: 'repeat,no-repeat'
    }
  }, React.createElement(__ds_scope.Eyebrow, null, label), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: '2rem',
      lineHeight: 1.1
    }
  }, title)), kicker ? React.createElement('div', {
    style: {
      fontSize: '0.875rem'
    }
  }, kicker) : null), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '1.5rem',
      minHeight: '12.4365rem',
      width: '100%',
      boxSizing: 'border-box',
      padding: '1.06rem 1.75rem 1.62rem',
      color: 'var(--neutral-1)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: '0.875rem'
    }
  }, description), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement(__ds_scope.Button, {
    variant: 'teal',
    size: 'small',
    href: href,
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { FeaturedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeaturedCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ResourceCard.jsx
try { (() => {
function ResourceCard({
  category,
  title,
  description,
  meta = [],
  ctaLabel = 'Access Resource',
  onCta,
  href,
  featured = false,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      padding: '1.5rem',
      borderRadius: 'var(--radius-md)',
      overflow: 'clip',
      backgroundImage: featured ? 'linear-gradient(253deg,var(--teal-bright),var(--core-green))' : 'linear-gradient(34deg,#fff,#e7e8ea)',
      color: 'var(--neutral-1)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      marginBottom: '1rem'
    }
  }, React.createElement(__ds_scope.Eyebrow, {
    tone: featured ? 'white' : 'green'
  }, category), React.createElement('div', {
    style: {
      paddingTop: '0.5rem'
    }
  }), React.createElement('div', {
    style: {
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-medium)'
    }
  }, title), React.createElement('div', {
    style: {
      paddingTop: '0.25rem'
    }
  }), React.createElement('p', {
    style: {
      fontSize: '0.875rem',
      margin: 0
    }
  }, description), React.createElement('div', {
    style: {
      paddingTop: '1rem'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem'
    }
  }, meta.map((m, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }
  }, m.icon ? React.createElement('img', {
    src: m.icon,
    alt: '',
    style: {
      width: '1rem',
      height: '1rem',
      flex: 'none'
    }
  }) : null, React.createElement('span', {
    style: {
      fontSize: '0.75rem'
    }
  }, m.label))))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    }
  }, React.createElement(__ds_scope.Button, {
    variant: 'teal',
    size: 'small',
    href: href,
    onClick: onCta
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ResourceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ResourceCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Heading.jsx
try { (() => {
const SCALE = {
  h1: ['4.5rem', 1.2],
  h2: ['4rem', 1.2],
  h3: ['3.5rem', 1.2],
  h4: ['3rem', 1.3],
  h5: ['2.5rem', 1.4],
  h6: ['2rem', 1.4]
};
function Heading({
  children,
  level = 'h3',
  as,
  weight = 300,
  tone,
  tight = false,
  style,
  ...rest
}) {
  const [size, lh] = SCALE[level] || SCALE.h3;
  const colors = {
    white: 'var(--white)',
    green: 'var(--core-green)',
    lime: 'var(--highlight-lime)',
    navy: 'var(--navy-deep)'
  };
  return React.createElement(as || level, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: weight,
      fontSize: size,
      lineHeight: tight ? 1.1 : lh,
      color: tone ? colors[tone] || tone : undefined,
      textWrap: 'pretty',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Heading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Heading.jsx", error: String((e && e.message) || e) }); }

// components/core/IconEmbed.jsx
try { (() => {
const SIZES = {
  xxsmall: '1rem',
  xsmall: '1.5rem',
  small: '1.5rem',
  custom: '1.6875rem'
};
function IconEmbed({
  name,
  src,
  size = 'xxsmall',
  alt = '',
  style,
  ...rest
}) {
  const dim = SIZES[size] || size;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      ...style
    },
    ...rest
  }, React.createElement('img', {
    src: src || 'assets/icons/' + name + '.svg',
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { IconEmbed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconEmbed.jsx", error: String((e && e.message) || e) }); }

// components/core/Spacer.jsx
try { (() => {
const SCALE = {
  tiny: '0.125rem',
  xxsmall: '0.25rem',
  xsmall: '0.5rem',
  smaller: '0.75rem',
  small: '1rem',
  'small-2': '1.5rem',
  medium: '2rem',
  large: '3rem',
  xlarge: '4rem',
  xxlarge: '5rem',
  huge: '6rem',
  xhuge: '8rem',
  xxhuge: '12rem'
};
function Spacer({
  size = 'small',
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      width: '100%',
      paddingTop: SCALE[size] || size,
      ...style
    },
    ...rest
  });
}
Object.assign(__ds_scope, { Spacer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spacer.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'dark',
  style,
  ...rest
}) {
  const tones = {
    dark: {
      backgroundImage: 'linear-gradient(#4d4d4d66,#4d4d4d66)',
      color: 'var(--white)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)'
    },
    light: {
      backgroundImage: 'linear-gradient(#1818181a,#1818181a)',
      color: 'var(--neutral-1)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)'
    },
    grey: {
      background: 'var(--grey-eee)',
      color: 'var(--neutral-1)'
    }
  };
  const compact = tone === 'grey';
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      borderRadius: 'var(--radius-md)',
      padding: compact ? '0.25rem 0.5rem' : '0.75rem',
      fontSize: compact ? 'var(--text-small)' : undefined,
      fontWeight: compact ? 600 : undefined,
      ...tones[tone],
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  square = false,
  style,
  ...rest
}) {
  const box = {
    width: '1.125rem',
    height: '1.125rem',
    minWidth: '1.125rem',
    minHeight: '1.125rem',
    flex: 'none',
    boxSizing: 'border-box',
    marginRight: '0.75rem',
    cursor: 'pointer',
    transition: 'all .2s',
    borderRadius: square ? 0 : 'var(--radius-xs)',
    border: '1px solid ' + (checked ? 'var(--core-green)' : 'var(--neutral-1)'),
    background: checked ? 'var(--core-green)' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  return React.createElement('label', {
    onClick: onChange,
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '0.5rem 0',
      margin: 0,
      ...style
    },
    ...rest
  }, React.createElement('span', {
    style: box
  }, checked ? React.createElement('svg', {
    width: 12,
    height: 12,
    viewBox: '0 0 16 16',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M2 8.5L6 12.5L14 4',
    stroke: '#fff',
    strokeWidth: 2,
    strokeLinecap: 'square'
  })) : null), React.createElement('span', {
    style: {
      fontSize: 'var(--text-regular)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FilterDropdown.jsx
try { (() => {
function FilterDropdown({
  label,
  options = [],
  value,
  onChange,
  tone = 'light',
  pill = true,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const onDark = tone === 'light';
  return React.createElement('div', {
    style: {
      position: 'relative',
      minWidth: '16rem',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    onClick: () => setOpen(!open),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.5rem',
      minHeight: '3.01953rem',
      padding: '0.5rem 1.15rem',
      boxSizing: 'border-box',
      cursor: 'pointer',
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      border: '1px solid ' + (onDark ? 'var(--white)' : 'var(--neutral-1)'),
      color: onDark ? 'var(--white)' : 'var(--neutral-1)',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      transition: 'background-color .26s'
    }
  }, React.createElement('span', {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, value || label), React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 30 30',
    fill: 'none',
    style: {
      flex: 'none',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .2s'
    }
  }, React.createElement('path', {
    d: 'M20 12.5L15 17.5L10 12.5',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'square'
  }))), open ? React.createElement('div', {
    style: {
      position: 'absolute',
      top: 'calc(100% + 0.5rem)',
      left: 0,
      right: 0,
      zIndex: 20,
      background: 'var(--white)',
      color: 'var(--neutral-1)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: '0 4px 12px 0 #00000040',
      padding: '0.5rem 0',
      maxHeight: '18rem',
      overflowY: 'auto'
    }
  }, options.map(o => React.createElement('div', {
    key: o,
    onClick: () => {
      onChange && onChange(o);
      setOpen(false);
    },
    style: {
      padding: '0.6rem 1.15rem',
      fontSize: '0.875rem',
      cursor: 'pointer'
    }
  }, o))) : null);
}
Object.assign(__ds_scope, { FilterDropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FilterDropdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  tone = 'dark',
  textarea = false,
  hero = false,
  iconLeft,
  style,
  ...rest
}) {
  const base = {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: textarea ? '8rem' : '3rem',
    padding: iconLeft ? '0.5rem 1rem 0.5rem 2.75rem' : textarea ? '0.75rem 1rem 0.5rem' : '0.5rem 1rem',
    border: '1px solid var(--core-green)',
    borderRadius: 0,
    background: 'transparent',
    color: tone === 'white' ? 'var(--neutral-1)' : 'var(--white)',
    fontFamily: 'var(--font-body)',
    fontSize: hero ? '1.25rem' : 'var(--text-regular)',
    outline: 'none',
    transition: 'all .2s'
  };
  if (tone === 'white') {
    base.background = 'var(--white)';
  }
  if (hero) {
    base.height = '4rem';
    base.width = '24.375rem';
    base.color = 'var(--grey-f4)';
  }
  const el = React.createElement(textarea ? 'textarea' : 'input', {
    style: {
      ...base,
      ...style
    },
    ...rest
  });
  if (!iconLeft) return el;
  return React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('img', {
    src: iconLeft,
    alt: '',
    style: {
      position: 'absolute',
      left: '1rem',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '1rem',
      height: '1rem'
    }
  }), el);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function Label({
  children,
  htmlFor,
  style,
  ...rest
}) {
  return React.createElement('label', {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--text-regular)',
      display: 'block',
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  checked = false,
  onChange,
  style,
  ...rest
}) {
  return React.createElement('label', {
    onClick: onChange,
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '0.5rem 0',
      ...style
    },
    ...rest
  }, React.createElement('span', {
    style: {
      width: '1.125rem',
      height: '1.125rem',
      minWidth: '1.125rem',
      flex: 'none',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-round)',
      marginRight: '0.75rem',
      border: checked ? '4px solid var(--core-green)' : '1px solid var(--neutral-1)',
      background: 'transparent',
      transition: 'all .2s'
    }
  }), React.createElement('span', {
    style: {
      fontSize: 'var(--text-regular)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/layout/Container.jsx
try { (() => {
const WIDTHS = {
  large: '80rem',
  '75': '75rem',
  small: '48rem',
  medium: '32rem',
  xlarge: '64rem'
};
function Container({
  children,
  width = 'large',
  center = true,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      width: '100%',
      maxWidth: WIDTHS[width] || width,
      marginLeft: center ? 'auto' : undefined,
      marginRight: center ? 'auto' : undefined,
      ...style
    },
    ...rest
  }, children);
}
Object.assign(__ds_scope, { Container });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Container.jsx", error: String((e && e.message) || e) }); }

// components/layout/HeroSection.jsx
try { (() => {
function HeroSection({
  image,
  scrim = '#18181899',
  children,
  minHeight,
  align = 'flex-start',
  padding = '7.5rem',
  style,
  ...rest
}) {
  return React.createElement('header', {
    style: {
      position: 'relative',
      zIndex: 2,
      color: 'var(--white)',
      backgroundImage: 'linear-gradient(' + scrim + ',' + scrim + ')' + (image ? ',url(' + image + ')' : ''),
      backgroundSize: 'auto,cover',
      backgroundPosition: '0 0,50%',
      backgroundRepeat: 'repeat,no-repeat',
      minHeight: minHeight,
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      paddingLeft: padding,
      paddingRight: padding
    }
  }, React.createElement('div', {
    style: {
      width: '100%',
      maxWidth: '80rem',
      margin: '0 auto',
      paddingTop: '7.5rem',
      paddingBottom: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: align
    }
  }, children)));
}
Object.assign(__ds_scope, { HeroSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/HeroSection.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
const PAD = {
  small: '3rem',
  medium: '5rem',
  large: '7.5rem',
  none: '0'
};
function Section({
  children,
  padding = 'medium',
  gutter = '7.5rem',
  tone = 'light',
  noTop = false,
  noBottom = false,
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: 'var(--white)',
      color: 'var(--neutral-1)'
    },
    dark: {
      background: 'var(--neutral-1)',
      color: 'var(--white)'
    },
    grey: {
      background: 'var(--grey-f4)',
      color: 'var(--neutral-1)'
    }
  };
  return React.createElement('section', {
    style: {
      position: 'relative',
      ...(tones[tone] || {}),
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      paddingLeft: gutter,
      paddingRight: gutter
    }
  }, React.createElement('div', {
    style: {
      paddingTop: noTop ? 0 : PAD[padding] || padding,
      paddingBottom: noBottom ? 0 : PAD[padding] || padding
    }
  }, children)));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const SOCIALS = ['social-facebook', 'social-linkedin', 'social-instagram', 'social-x', 'social-email'];
function FooterLink({
  children,
  medium
}) {
  const [h, setH] = React.useState(false);
  return React.createElement('a', {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      color: 'var(--white)',
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: h ? 500 : 400,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all .2s'
    }
  }, children);
}
function Footer({
  logo = 'assets/logo-wordmark-white.svg',
  links = ['The Mission', 'Career Paths', 'Suppliers', 'Opportunities', 'Newsroom', 'Training Partner'],
  iconBase = 'assets/icons/',
  copyright = 'Copyright 2026 BuildSubmarines.com. All rights reserved.',
  funding = 'Paid for by the U.S. Department of the Navy in partnership with BlueForge Alliance',
  legal = ['Privacy Notice', 'Terms and Conditions'],
  style,
  ...rest
}) {
  return React.createElement('footer', {
    style: {
      position: 'relative',
      zIndex: 2,
      padding: '2.5rem 4rem',
      boxSizing: 'border-box',
      background: 'var(--neutral-1)',
      color: 'var(--white)',
      borderTop: '1px solid var(--white)',
      fontFamily: 'var(--font-body)',
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '4vw',
      flexWrap: 'wrap'
    }
  }, React.createElement('img', {
    src: logo,
    alt: 'Build Submarines',
    style: {
      width: '9.6875rem',
      display: 'block'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }, links.map(l => React.createElement(FooterLink, {
    key: l
  }, l)))), React.createElement('div', {
    style: {
      width: '100%',
      height: 1,
      background: '#ffffff1a',
      margin: '2rem 0'
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '1.5rem',
      flexWrap: 'wrap'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    }
  }, React.createElement('div', {
    style: {
      fontSize: '0.875rem'
    }
  }, copyright), React.createElement('div', {
    style: {
      fontSize: '0.75rem'
    }
  }, funding)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center'
    }
  }, legal.map(l => React.createElement('a', {
    key: l,
    style: {
      color: 'var(--white)',
      fontSize: '0.875rem',
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }, l))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'center'
    }
  }, SOCIALS.map(s => React.createElement('a', {
    key: s,
    style: {
      display: 'flex',
      width: '1.5rem',
      height: '1.5rem',
      color: 'var(--white)'
    }
  }, React.createElement('img', {
    src: iconBase + s + '.svg',
    alt: '',
    style: {
      width: '100%',
      height: '100%'
    }
  }))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const CHEVRON = React.createElement('svg', {
  width: 18,
  height: 18,
  viewBox: '0 0 30 30',
  fill: 'none',
  style: {
    flex: 'none'
  }
}, React.createElement('path', {
  d: 'M20 12.5L15 17.5L10 12.5',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square'
}));
function NavLink({
  children,
  active,
  onClick,
  hasMenu
}) {
  const [h, setH] = React.useState(false);
  return React.createElement('a', {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      color: 'var(--white)',
      textAlign: 'center',
      padding: '1.5rem 0',
      flex: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: '0.875rem',
      fontWeight: 400,
      borderBottom: '3px solid ' + (h || active ? 'var(--core-green)' : 'transparent'),
      transition: 'border-color .2s'
    }
  }, children, hasMenu ? CHEVRON : null);
}
function Navbar({
  logo = 'assets/logo-wordmark-on-dark.svg',
  links = [],
  primaryCta,
  secondaryCta,
  transparent = false,
  active,
  onNavigate,
  style,
  ...rest
}) {
  return React.createElement('div', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 99999,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      minHeight: '4.5rem',
      padding: '0 1.25rem',
      color: 'var(--white)',
      background: transparent ? 'transparent' : '#18181866',
      backdropFilter: transparent ? 'none' : 'blur(5px)',
      WebkitBackdropFilter: transparent ? 'none' : 'blur(5px)',
      borderBottom: '1px solid ' + (transparent ? 'transparent' : '#dbdbdb33'),
      ...style
    },
    ...rest
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '100%'
    }
  }, React.createElement('a', {
    onClick: () => onNavigate && onNavigate('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, React.createElement('img', {
    src: logo,
    alt: 'Build Submarines',
    width: 170,
    style: {
      display: 'block',
      width: 170
    }
  })), React.createElement('nav', {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginLeft: '1.5rem',
      gap: '1.25rem'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      marginRight: '1rem'
    }
  }, links.map(l => React.createElement(NavLink, {
    key: l.label,
    active: active === l.id,
    hasMenu: l.hasMenu,
    onClick: () => onNavigate && onNavigate(l.id)
  }, l.label))), secondaryCta ? React.createElement(__ds_scope.Button, {
    variant: 'ghost',
    size: 'navigation',
    onClick: secondaryCta.onClick
  }, secondaryCta.label) : null, primaryCta ? React.createElement(__ds_scope.Button, {
    variant: 'primary',
    size: 'navigation',
    onClick: primaryCta.onClick
  }, primaryCta.label) : null)));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  label = 'Load More',
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem 0',
      ...style
    },
    ...rest
  }, React.createElement('a', {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      cursor: 'pointer',
      fontFamily: 'var(--font-display)',
      fontSize: '1rem',
      color: h ? 'var(--teal-bright)' : 'var(--core-green)',
      transition: 'color .26s'
    }
  }, label, React.createElement('svg', {
    width: 16,
    height: 16,
    viewBox: '0 0 30 30',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M20 12.5L15 17.5L10 12.5',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'square'
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/CareerPathsScreen.jsx
try { (() => {
(function () {
  const DS = window.DesignSystem_6cc531;
  const {
    Navbar,
    Footer,
    HeroSection,
    Section,
    Container,
    Heading,
    Tag,
    Eyebrow,
    Spacer,
    Button,
    IconEmbed
  } = DS;
  const ICONS2 = '../../assets/icons/';
  function PathTile({
    item,
    onNavigate
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      onClick: () => onNavigate('trained'),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: '16rem',
        padding: '1.5rem',
        borderRadius: '.5rem',
        overflow: 'clip',
        cursor: 'pointer',
        color: 'var(--white)',
        textDecoration: 'none',
        backgroundImage: 'linear-gradient(' + (h ? '#18181899' : '#18181866') + ',' + (h ? '#18181899' : '#18181866') + '),url(' + item.img + ')',
        backgroundSize: 'auto,cover',
        backgroundPosition: '0 0,50%',
        transition: 'all .3s ease'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: '1.5rem',
        lineHeight: 1.2
      }
    }, item.label), /*#__PURE__*/React.createElement(IconEmbed, {
      src: ICONS2 + 'icon-arrow-northeast.svg',
      size: "xsmall",
      style: {
        opacity: h ? 1 : 0,
        transform: h ? 'none' : 'translateX(-6px)',
        transition: 'all .26s'
      }
    })));
  }
  function CareerPathsScreen({
    onNavigate
  }) {
    const D = window.BS_DATA;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
      logo: "../../assets/logo-wordmark-on-dark.svg",
      links: D.nav,
      active: "paths",
      secondaryCta: {
        label: 'Create Employer Account'
      },
      primaryCta: {
        label: 'Explore Open Roles',
        onClick: () => onNavigate('trained')
      },
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(HeroSection, {
      image: "../../assets/img-header.jpg"
    }, /*#__PURE__*/React.createElement(Tag, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Careers that build the fleet")), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement(Heading, {
      level: "h3",
      tone: "white"
    }, "Find the work that fits you"), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '48rem',
        margin: 0,
        fontSize: '1rem',
        lineHeight: 1.5
      }
    }, "The submarine industrial base is hiring across nine specialties and every level of experience. Start with the trade that interests you, or with where you are in your career.")), /*#__PURE__*/React.createElement(Section, {
      tone: "light",
      padding: "medium"
    }, /*#__PURE__*/React.createElement(Container, {
      width: "large"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "green"
    }, "By Specialty"), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement(Heading, {
      level: "h5"
    }, "Nine trades, one mission"), /*#__PURE__*/React.createElement(Spacer, {
      size: "large"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '1.5rem'
      }
    }, D.specialties.map(s => /*#__PURE__*/React.createElement(PathTile, {
      key: s.label,
      item: s,
      onNavigate: onNavigate
    }))))), /*#__PURE__*/React.createElement(Section, {
      tone: "dark",
      padding: "medium"
    }, /*#__PURE__*/React.createElement(Container, {
      width: "large"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "teal"
    }, "By Experience"), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement(Heading, {
      level: "h5",
      tone: "white"
    }, "Wherever you're starting from"), /*#__PURE__*/React.createElement(Spacer, {
      size: "large"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: '1.5rem'
      }
    }, D.experience.map(s => /*#__PURE__*/React.createElement(PathTile, {
      key: s.label,
      item: s,
      onNavigate: onNavigate
    }))), /*#__PURE__*/React.createElement(Spacer, {
      size: "xlarge"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onNavigate('trained')
    }, "Get Trained"), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary"
    }, "Explore Open Roles")))), /*#__PURE__*/React.createElement(Footer, {
      logo: "../../assets/logo-wordmark-white.svg",
      iconBase: ICONS2
    }));
  }
  window.CareerPathsScreen = CareerPathsScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/CareerPathsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/EducationScreen.jsx
try { (() => {
(function () {
  const DS = window.DesignSystem_6cc531;
  const {
    Navbar,
    Footer,
    HeroSection,
    Section,
    Container,
    Heading,
    Tag,
    Eyebrow,
    Spacer,
    ResourceCard,
    FeaturedCard,
    FilterDropdown,
    Pagination,
    Checkbox,
    Divider
  } = DS;
  const ICONS = '../../assets/icons/';
  function EducationScreen({
    onNavigate,
    onRequest
  }) {
    const D = window.BS_DATA;
    const [type, setType] = React.useState('');
    const [audience, setAudience] = React.useState('');
    const [visible, setVisible] = React.useState(6);
    const filtered = D.resources.filter(r => (!type || r.type === type) && (!audience || r.audience.includes(audience)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
      logo: "../../assets/logo-wordmark-on-dark.svg",
      links: D.nav,
      active: "education",
      secondaryCta: {
        label: 'Create Employer Account'
      },
      primaryCta: {
        label: 'Explore Open Roles',
        onClick: () => onNavigate('trained')
      },
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(HeroSection, {
      image: "../../assets/img-header.jpg"
    }, /*#__PURE__*/React.createElement(Tag, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Resources for Educators")), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement(Heading, {
      level: "h3",
      tone: "white"
    }, "The tools to help launch careers"), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '48rem',
        margin: 0,
        fontSize: '1rem',
        lineHeight: 1.5
      }
    }, "Education plays a vital role in helping to grow our nation's maritime manufacturing workforce. Tailored for educators and administrators, this collection of programs and tools is designed to promote awareness of maritime manufacturing industries in the classroom and spark interest among students. Access worksheets, videos, webinars and more \u2014 all organized by grade level and learning objectives."), /*#__PURE__*/React.createElement(Spacer, {
      size: "medium"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(FilterDropdown, {
      label: "All resource types",
      value: type,
      onChange: setType,
      options: ['Lesson Plans & Class Activities', 'Videos', 'Networking Opportunities']
    }), /*#__PURE__*/React.createElement(FilterDropdown, {
      label: "All audiences",
      value: audience,
      onChange: setAudience,
      options: ['Elementary', 'Middle School', 'High School', 'Career & Technical Education (CTE)', 'Administrators', 'Post-Secondary']
    }))), /*#__PURE__*/React.createElement(Section, {
      tone: "light",
      padding: "medium",
      gutter: "2.5rem",
      noBottom: true
    }, /*#__PURE__*/React.createElement(Container, {
      width: "large"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem'
      }
    }, D.featured.map(c => /*#__PURE__*/React.createElement(FeaturedCard, {
      key: c.title,
      image: c.image,
      title: c.title,
      kicker: c.kicker,
      description: c.description,
      ctaLabel: c.cta,
      onCta: () => onRequest(c.title)
    }))))), /*#__PURE__*/React.createElement(Section, {
      tone: "light",
      padding: "medium",
      gutter: "2.5rem"
    }, /*#__PURE__*/React.createElement(Container, {
      width: "75"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr',
        gap: '3rem',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        minWidth: '17.75rem',
        maxWidth: '19rem',
        position: 'sticky',
        top: '6rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.5rem',
        paddingRight: '1rem'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.4,
        fontFamily: 'var(--font-display)'
      }
    }, "Filters"), /*#__PURE__*/React.createElement("a", {
      onClick: () => {
        setType('');
        setAudience('');
      },
      style: {
        fontSize: '.875rem',
        color: 'var(--core-green)',
        cursor: 'pointer'
      }
    }, "Clear all")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.875rem',
        marginBottom: '1.5rem'
      }
    }, filtered.length, " results"), /*#__PURE__*/React.createElement(Divider, {
      tone: "dark"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.25rem 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.875rem',
        fontWeight: 500,
        marginBottom: '.5rem'
      }
    }, "Resource type"), ['Lesson Plans & Class Activities', 'Videos', 'Networking Opportunities'].map(o => /*#__PURE__*/React.createElement(Checkbox, {
      key: o,
      square: true,
      label: o,
      checked: type === o,
      onChange: () => setType(type === o ? '' : o)
    }))), /*#__PURE__*/React.createElement(Divider, {
      tone: "dark"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '1.25rem 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '.875rem',
        fontWeight: 500,
        marginBottom: '.5rem'
      }
    }, "Audience"), ['Elementary', 'Middle School', 'High School', 'Career & Technical Education (CTE)', 'Administrators'].map(o => /*#__PURE__*/React.createElement(Checkbox, {
      key: o,
      square: true,
      label: o,
      checked: audience === o,
      onChange: () => setAudience(audience === o ? '' : o)
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        alignItems: 'stretch'
      }
    }, filtered.slice(0, visible).map(r => /*#__PURE__*/React.createElement(ResourceCard, {
      key: r.title,
      category: r.type,
      title: r.title,
      description: r.description,
      ctaLabel: r.cta,
      onCta: () => onRequest(r.title),
      meta: [{
        icon: ICONS + 'icon-resource-type.svg',
        label: r.type
      }, {
        icon: ICONS + 'icon-audience.svg',
        label: r.audience.join(', ')
      }, {
        icon: ICONS + 'icon-location.svg',
        label: 'Nationwide'
      }]
    }))), visible < filtered.length ? /*#__PURE__*/React.createElement(Pagination, {
      onClick: () => setVisible(visible + 2)
    }) : null)))), /*#__PURE__*/React.createElement(Footer, {
      logo: "../../assets/logo-wordmark-white.svg",
      iconBase: ICONS
    }));
  }
  window.EducationScreen = EducationScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/EducationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/GetTrainedScreen.jsx
try { (() => {
(function () {
  const DS = window.DesignSystem_6cc531;
  const {
    Navbar,
    Footer,
    HeroSection,
    Section,
    Container,
    Heading,
    Tag,
    Eyebrow,
    Spacer,
    Button,
    ResourceCard,
    Divider
  } = DS;
  const ICONS3 = '../../assets/icons/';
  function GetTrainedScreen({
    onNavigate,
    onRequest
  }) {
    const D = window.BS_DATA;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
      logo: "../../assets/logo-wordmark-on-dark.svg",
      links: D.nav,
      active: "trained",
      secondaryCta: {
        label: 'Create Employer Account'
      },
      primaryCta: {
        label: 'Explore Open Roles'
      },
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(HeroSection, {
      image: "../../assets/img-welding.avif",
      scrim: "#0009"
    }, /*#__PURE__*/React.createElement(Tag, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Training and apprenticeships")), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement(Heading, {
      level: "h3",
      tone: "white"
    }, "Get trained. Get hired."), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        maxWidth: '48rem',
        margin: 0,
        fontSize: '1rem',
        lineHeight: 1.5
      }
    }, "You do not need a four-year degree to build submarines. Tuition-free accelerated programs, paid apprenticeships and community college pathways all lead into the submarine industrial base."), /*#__PURE__*/React.createElement(Spacer, {
      size: "medium"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "Find a Program"), /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      onClick: () => onNavigate('education')
    }, "Resources for Educators"))), /*#__PURE__*/React.createElement(Section, {
      tone: "dark",
      padding: "medium"
    }, /*#__PURE__*/React.createElement(Container, {
      width: "small",
      center: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-atdm-horizontal-white.png",
      alt: "ATDM",
      style: {
        maxWidth: '11.6875rem',
        width: '100%',
        display: 'block'
      }
    }), /*#__PURE__*/React.createElement(Spacer, {
      size: "medium"
    }), /*#__PURE__*/React.createElement(Heading, {
      level: "h6",
      tone: "white"
    }, "Accelerated Training in Defense Manufacturing"), /*#__PURE__*/React.createElement(Spacer, {
      size: "small"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '1rem',
        lineHeight: 1.5
      }
    }, "Sixteen weeks. No tuition. A paid stipend while you train in Danville, Virginia \u2014 then placement support into the shipyards and suppliers that build the fleet."), /*#__PURE__*/React.createElement(Spacer, {
      size: "medium"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => onRequest('Accelerated Training in Defense Manufacturing')
    }, "Apply to ATDM")))), /*#__PURE__*/React.createElement(Section, {
      tone: "light",
      padding: "medium"
    }, /*#__PURE__*/React.createElement(Container, {
      width: "large"
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "green"
    }, "Pathways"), /*#__PURE__*/React.createElement(Spacer, {
      size: "small-2"
    }), /*#__PURE__*/React.createElement(Heading, {
      level: "h5"
    }, "Three ways in"), /*#__PURE__*/React.createElement(Spacer, {
      size: "large"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: '1.5rem',
        alignItems: 'stretch'
      }
    }, D.training.map(t => /*#__PURE__*/React.createElement(ResourceCard, {
      key: t.title,
      category: "Training Program",
      title: t.title,
      description: t.description,
      ctaLabel: "Learn More",
      onCta: () => onRequest(t.title),
      meta: [{
        icon: ICONS3 + 'icon-location.svg',
        label: t.location
      }, {
        icon: ICONS3 + 'icon-resource-type.svg',
        label: t.length
      }]
    }))), /*#__PURE__*/React.createElement(Spacer, {
      size: "xlarge"
    }), /*#__PURE__*/React.createElement(Divider, {
      tone: "dark"
    }), /*#__PURE__*/React.createElement(Spacer, {
      size: "medium"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Heading, {
      level: "h6"
    }, "Already trained?"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline"
    }, "Explore Open Roles")))), /*#__PURE__*/React.createElement(Footer, {
      logo: "../../assets/logo-wordmark-white.svg",
      iconBase: ICONS3
    }));
  }
  window.GetTrainedScreen = GetTrainedScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/GetTrainedScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ResourceRequestModal.jsx
try { (() => {
(function () {
  const DS = window.DesignSystem_6cc531;
  const {
    Heading,
    Label,
    Input,
    Divider,
    Button,
    Checkbox,
    IconEmbed
  } = DS;
  function ResourceRequestModal({
    resource,
    onClose
  }) {
    const [sent, setSent] = React.useState(false);
    const [consent, setConsent] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#181818cc',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        color: 'var(--white)',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: '37rem',
        padding: '4rem 1.5rem',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: onClose,
      style: {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        width: '1rem',
        height: '1rem',
        cursor: 'pointer',
        color: 'var(--white)'
      }
    }, /*#__PURE__*/React.createElement(IconEmbed, {
      src: "../../assets/icons/icon-close.svg",
      size: "1rem"
    })), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(Heading, {
      level: "h5",
      tone: "white"
    }, "Thank You for Your Request"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1rem'
      }
    }, "A member of the team will follow up by email with access details."), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onClose
    }, "Back to Resources")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement(Heading, {
      level: "h5",
      tone: "white"
    }, "Unlock this opportunity"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1rem'
      }
    }, "Complete this short form to access programming at no cost."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1rem'
      }
    }, "*All fields are required."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "res"
    }, "Requested resource"), /*#__PURE__*/React.createElement(Input, {
      id: "res",
      tone: "dark",
      value: resource || '',
      readOnly: true
    })), /*#__PURE__*/React.createElement(Divider, {
      tone: "light"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "fn"
    }, "First Name"), /*#__PURE__*/React.createElement(Input, {
      id: "fn",
      tone: "dark"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "ln"
    }, "Last Name"), /*#__PURE__*/React.createElement(Input, {
      id: "ln",
      tone: "dark"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "em"
    }, "Work Email"), /*#__PURE__*/React.createElement(Input, {
      id: "em",
      tone: "dark",
      type: "email"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "sc"
    }, "School or District"), /*#__PURE__*/React.createElement(Input, {
      id: "sc",
      tone: "dark"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, {
      htmlFor: "st"
    }, "State"), /*#__PURE__*/React.createElement(Input, {
      id: "st",
      tone: "dark"
    })), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I would like to hear about future programs and events.",
      checked: consent,
      onChange: () => setConsent(!consent)
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      fullWidth: true,
      onClick: () => setSent(true)
    }, "Submit Request"))));
  }
  window.ResourceRequestModal = ResourceRequestModal;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ResourceRequestModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/data.js
try { (() => {
window.BS_DATA = {
  nav: [{
    id: 'mission',
    label: 'Our Mission'
  }, {
    id: 'paths',
    label: 'Career Paths',
    hasMenu: true
  }, {
    id: 'trained',
    label: 'Get Trained'
  }, {
    id: 'education',
    label: 'Resources',
    hasMenu: true
  }],
  specialties: [{
    label: 'Additive Manufacturing',
    img: '../../assets/img-additive.avif'
  }, {
    label: 'CNC Machining',
    img: '../../assets/img-cnc.avif'
  }, {
    label: 'Design',
    img: '../../assets/img-design.avif'
  }, {
    label: 'Engineering',
    img: '../../assets/img-engineering.avif'
  }, {
    label: 'Metrology',
    img: '../../assets/img-metrology.avif'
  }, {
    label: 'Non-Destructive Testing',
    img: '../../assets/img-nondestructive.avif'
  }, {
    label: 'Planning',
    img: '../../assets/img-planning.avif'
  }, {
    label: 'Welding',
    img: '../../assets/img-welding.avif'
  }],
  experience: [{
    label: 'Internships',
    img: '../../assets/img-interns.avif'
  }, {
    label: 'Entry Level',
    img: '../../assets/img-entry.avif'
  }, {
    label: 'Transitioning Military & Veteran',
    img: '../../assets/img-transition.avif'
  }, {
    label: 'Skilled Professional',
    img: '../../assets/img-skills.avif'
  }],
  featured: [{
    title: 'Shape Futures, Inspire Careers: Elevating Career Literacy for Workforce Development',
    kicker: 'Videos',
    image: '../../assets/img-nav-cut.avif',
    cta: 'Watch the Recording',
    description: 'This edWebinar equips K–12 educators with strategies, resources, and real-world insights to strengthen career literacy, helping students explore pathways and build skills aligned with workforce needs in the submarine industrial base.'
  }, {
    title: "Building Tomorrow's Workforce: Creating K-12 Education Partnerships with Industry",
    kicker: 'Videos',
    image: '../../assets/img-welding.avif',
    cta: 'Watch the Recording',
    description: 'This edWebinar explores how industry–education partnerships can equip K–12 students with the technical skills, real-world experiences, and critical thinking needed to succeed in a modern, technology-driven manufacturing workforce.'
  }],
  resources: [{
    type: 'Lesson Plans & Class Activities',
    title: 'Production Instruction',
    audience: ['Career & Technical Education (CTE)', 'High School'],
    cta: 'Access Resource',
    description: 'In collaboration with the SIB, General Dynamics Electric Boat offers a program where students manufacture common submarine components, complete with material kits, blueprints, and career exploration guides.'
  }, {
    type: 'Lesson Plans & Class Activities',
    title: 'Boats for Explorers',
    audience: ['High School', 'Middle School'],
    cta: 'Access Resource',
    description: "In collaboration with RoboNation's SeaPerch program, students build submersible ROVs using provided materials, learning technical vocabulary and skills while gaining hands-on robotics experience."
  }, {
    type: 'Videos',
    title: 'Boats for Next Gen',
    audience: ['Elementary', 'Middle School'],
    cta: 'Launch Videos',
    description: 'A short video series introducing younger students to the trades that build submarines, with classroom discussion prompts and a printable activity sheet.'
  }, {
    type: 'Networking Opportunities',
    title: 'Guest Speaker Panels',
    audience: ['High School', 'Career & Technical Education (CTE)'],
    cta: 'Access Resource',
    description: 'Request a panel of working machinists, welders, designers and engineers from the submarine industrial base to speak with your students, in person or virtually.'
  }, {
    type: 'Networking Opportunities',
    title: 'Career Fairs and Employer Networking',
    audience: ['High School', 'Post-Secondary'],
    cta: 'Access Resource',
    description: 'Connect your school to regional career fairs and employer networking events hosted with submarine industrial base partners.'
  }, {
    type: 'Networking Opportunities',
    title: 'Connection with Regional Industry Partners',
    audience: ['Administrators'],
    cta: 'Access Resource',
    description: 'Get introduced to the manufacturers, suppliers and training providers building the fleet in your region.'
  }],
  training: [{
    title: 'Accelerated Training in Defense Manufacturing',
    location: 'Danville, Virginia',
    length: '16 weeks',
    description: 'A tuition-free, 16-week accelerated program in welding, CNC machining, metrology, additive manufacturing, non-destructive testing and more, with placement support into the submarine industrial base.'
  }, {
    title: 'Registered Apprenticeships',
    location: 'Nationwide',
    length: '2–4 years',
    description: 'Earn while you learn. Paid apprenticeships combine on-the-job training at a shipyard or supplier with classroom instruction.'
  }, {
    title: 'Community College Pathways',
    location: 'Nationwide',
    length: '1–2 years',
    description: 'Certificate and associate degree programs at partner colleges, mapped to the specialties the submarine industrial base is hiring for right now.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.FeaturedCard = __ds_scope.FeaturedCard;

__ds_ns.ResourceCard = __ds_scope.ResourceCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Heading = __ds_scope.Heading;

__ds_ns.IconEmbed = __ds_scope.IconEmbed;

__ds_ns.Spacer = __ds_scope.Spacer;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FilterDropdown = __ds_scope.FilterDropdown;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Container = __ds_scope.Container;

__ds_ns.HeroSection = __ds_scope.HeroSection;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Pagination = __ds_scope.Pagination;

})();
