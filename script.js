const tagsDesktop = Array.from(document.querySelectorAll('.display-post-tag-wrapper .tag-item.cs-tag_topic_title'))
const tagsMobile = Array.from(document.querySelectorAll('.display-tag .button.tiny.gtm-tag-topic-title'))

const allTags = [...tagsDesktop,...tagsMobile].map(tag=>tag.textContent);

console.log(allTags);