import { useState } from 'react';

import {
  CoursesContainer,
  SearchInput,
  SearchSelect,
  SearchContainer,
} from '../../UI/shared/Grid/CoursesContainer';
import CardAncor from '../../Card/CardAncor';

export default function CardCertificates({ json, searchPlaceholder, defaultOption }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const getCardTags = () => {
    const tags = [];
    json.forEach((json) => {
      json.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
    return tags;
  };

  const tags = getCardTags();

  const filteredCards = json.filter((json) => {
    if (selectedTag === 'all' || json.tags.includes(selectedTag)) {
      return (
        json.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        json.paragraph.toLowerCase().includes(searchTerm.toLowerCase()) ||
        json.date.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return false;
  });

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder={searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <SearchSelect
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="all">{defaultOption}</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </SearchSelect>
      </SearchContainer>

      <CoursesContainer>
        {filteredCards.map((json) => (
          <CardAncor
            key={json.id}
            title={json.title}
            paragraph={json.paragraph}
            date={json.date}
            link={json.link}
            icon={json.icon}
          />
        ))}
      </CoursesContainer>
    </div>
  );
}
