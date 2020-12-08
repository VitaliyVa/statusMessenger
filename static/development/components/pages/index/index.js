import './index.scss';



create_status_messenger({
  block: '.status_messenger_indicator__block',
  indicator: '.status_messenger_indicator',
});

function create_status_messenger({ block, indicator }) {
  let all_status_messenger = $(block);

  all_status_messenger.map((index, name) => {
    let all_indicators = $(name).find(indicator);
    let quantity_indicators = all_indicators.length;
    $(indicator).css('width', `${100 / quantity_indicators}%`);
  });
}


function add_content_in_popup({ popup, status, date, title, text, error_name, error_minute, error_hour }) {
  $(popup).find('.status_messenger_popup__block').removeClass('bad');
  $(popup).find('.status_messenger_popup__block').removeClass('normal');
  $(popup).find('.status_messenger_popup__block').removeClass('good');
  $(popup).find('.status_messenger_popup__block').addClass(status);
  $(popup).find('.status_messenger_popup_date').text(date);
  $(popup).find('.status_messenger_popup_title').text(title);
  $(popup).find('.status_messenger_popup_text').text(text);
  $(popup).find('.status_messenger_popup_error_title').text(error_name);
  $(popup).find('.status_messenger_popup_error_minutes').text(error_minute);
  $(popup).find('.status_messenger_popup_error_hours').text(error_hour);
}

$('.status_messenger_indicator').on('mouseover', function () {
  let absolute_arrow = $(this).parents('.status_messenger_indicator__block').find('.status_messenger_popup__block_absolute_arrow');
  $(absolute_arrow).removeClass('hidden');

  let popup = $(this).parents('.status_messenger_indicator__block').find('.status_messenger_popup__block');

  let indicator_width = $(this).innerWidth();
  let popup_width = $(popup).innerWidth();
  let indicator__block_width = $(this).parents('.status_messenger_indicator__block').innerWidth();

  let position_indicator = $(this).position().left;
  let current_position_popup;

  let popup_left_border = position_indicator - (popup_width / 2);
  let popup_right_border = position_indicator + popup_width;

  let arrow = $(popup).find('.status_messenger_popup__block_arrow');


  if (popup_left_border <= 0) {
    current_position_popup = '-10px';
    $(arrow).css('display', `none`);
    $(absolute_arrow).css('display', `block`);
    $(absolute_arrow).css('left', `calc(${position_indicator + (indicator_width / 2)}px + 2px)`)
  } else if (popup_right_border >= indicator__block_width) {
    current_position_popup = `calc(100% - ${popup_width}px + 10px)`;
    $(arrow).css('display', `none`);
    $(absolute_arrow).css('display', `block`);
    $(absolute_arrow).css('left', `calc(${position_indicator + (indicator_width / 2)}px + 2px)`)
  } else {
    current_position_popup = position_indicator - (popup_width / 2) + (indicator_width / 2);
    $(absolute_arrow).css('display', `none`);
    $(arrow).css('display', `block`);

  }



  $(popup).addClass('active');
  $(popup).css('width', `${popup_width}px`);
  $(popup).css('left', current_position_popup);

  add_content_in_popup({
    popup: $(this).parents('.status_messenger_indicator__block'),
    status: $(this).attr('data-status'),
    date: $(this).attr('data-date'),
    title: $(this).attr('data-title'),
    text: $(this).attr('data-text'),
    error_name: $(this).attr('data-error-name'),
    error_minute: $(this).attr('data-error-minute'),
    error_hour: $(this).attr('data-error-hour'),
  })
})

$('.status_messenger_btn').on('click', function () {
  let wrapper = $(this).parents('.status_messenger_optional');
  $(wrapper).toggleClass('show');
});

$('.status_messenger_indicator').on('mouseout', function () {

  $('.status_messenger_popup__block').removeClass('active');
  $('.status_messenger_popup__block_absolute_arrow').addClass('hidden');
})