function removeHTMLTags(text) {
    // 정규표현식을 사용하여 HTML 태그를 제거
    return text.replace(/<[^>]+>/g, '');
  }

export default removeHTMLTags;