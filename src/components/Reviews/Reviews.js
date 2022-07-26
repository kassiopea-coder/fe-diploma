import React from "react";
import "./reviews.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import reviews_ava_1 from "./img/reviews_ava_1.png";
import reviews_ava_2 from "./img/reviews_ava_2.png";

export default function Reviews() {
  return (
    <div className="reviews" id="reviews">
      <span className="reviews__title">Отзывы</span>
      <Carousel showThumbs={false}>
        <div className="reviews__slides">
          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_1}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Екатерина Вальнова</div>
                <div className="review__text">
                  <span>
                    Доброжелательные подсказки на всех этапах помогут правильно
                    заполнить поля и без затруднений купить авиа или ж/д билет,
                    даже если вы заказываете онлайн билет впервые.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_2}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Евгений Стрыкало</div>
                <div className="review__text">
                  <span>
                    СМС-сопровождение до посадки Сразу после оплаты ж/д билетов
                    и за 3 часа до отправления мы пришлем вам СМС-напоминание о
                    поездке.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews__slides">
          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_1}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Екатерина Вальнова</div>
                <div className="review__text">
                  <span>
                    Доброжелательные подсказки на всех этапах помогут правильно
                    заполнить поля и без затруднений купить авиа или ж/д билет,
                    даже если вы заказываете онлайн билет впервые.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_2}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Евгений Стрыкало</div>
                <div className="review__text">
                  <span>
                    СМС-сопровождение до посадки Сразу после оплаты ж/д билетов
                    и за 3 часа до отправления мы пришлем вам СМС-напоминание о
                    поездке.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews__slides">
          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_1}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Екатерина Вальнова</div>
                <div className="review__text">
                  <span>
                    Доброжелательные подсказки на всех этапах помогут правильно
                    заполнить поля и без затруднений купить авиа или ж/д билет,
                    даже если вы заказываете онлайн билет впервые.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_2}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Евгений Стрыкало</div>
                <div className="review__text">
                  <span>
                    СМС-сопровождение до посадки Сразу после оплаты ж/д билетов
                    и за 3 часа до отправления мы пришлем вам СМС-напоминание о
                    поездке.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews__slides">
          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_1}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Екатерина Вальнова</div>
                <div className="review__text">
                  <span>
                    Доброжелательные подсказки на всех этапах помогут правильно
                    заполнить поля и без затруднений купить авиа или ж/д билет,
                    даже если вы заказываете онлайн билет впервые.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="review__card">
              <div className="avatar__container">
                <img
                  src={reviews_ava_2}
                  alt="avatar"
                  className="avatar__image"
                />
              </div>
              <div className="review">
                <div className="review__title">Евгений Стрыкало</div>
                <div className="review__text">
                  <span>
                    СМС-сопровождение до посадки Сразу после оплаты ж/д билетов
                    и за 3 часа до отправления мы пришлем вам СМС-напоминание о
                    поездке.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
