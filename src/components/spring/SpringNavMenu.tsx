import { motion } from "framer-motion";
import React, { useState } from "react";

interface NavItem {
  content: string;
  url?: string;
  urlType?: string;
  target?: string;
  roles?: string;
  items?: NavItem[];
}

interface NavMenuProps {
  navigation: NavItem[];
  level?: number;
}

const SpringNavMenu: React.FC<
  NavMenuProps & { onItemClick: (content: string) => void }
> = ({ navigation, level = 0, onItemClick }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (path: any) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [path]: !prevOpenItems[path],
    }));
  };

  const generatePath = (index: number): string => `${level}-${index}`;

  return (
    <>
      {navigation.length > 0 && (
        <ul className="nav-list">
          {navigation.map((item, index) => {
            const itemPath = generatePath(index);
            const isOpen = openItems[itemPath];
            return (
              <li key={index} data-depth={level}>
                {item.content && (
                  <div className="nav-item-wrapper nav-link">
                    {item.url ? (
                      <a
                        className={`${item.roles ? ` ${item.roles}` : ""}`}
                        href={item.urlType === "internal" ? item.url : item.url}
                        target={item.target || undefined}
                        rel={
                          item.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={() => {
                          toggleItem(itemPath);
                          onItemClick(item.content || "");
                        }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span
                        className="nav-text"
                        onClick={() => {
                          toggleItem(itemPath);
                          onItemClick(item.content || "");
                        }}
                      >
                        {item.content}
                      </span>
                    )}

                    {item.items && item.items.length > 0 && (
                      <motion.button
                        className="nav-item-toggle"
                        onClick={() => toggleItem(itemPath)}
                        animate={{ rotate: isOpen ? 0 : -90 }}
                        transition={{ duration: 0 }}
                      ></motion.button>
                    )}
                  </div>
                )}

                {item.items && item.items.length > 0 && isOpen && (
                  <SpringNavMenu
                    navigation={item.items}
                    level={level + 1}
                    onItemClick={onItemClick}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default SpringNavMenu;
