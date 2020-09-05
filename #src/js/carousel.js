var content_slider_counter = 0;
(function(e) {
        function t(e, t) {
            this._constructor(e, t, 0)
        }
        function n(n, i) {
            var s = this;
            this.$element = e(n);
            this.$base = this.$element;
            this.$element.wrap('<div class="main_content_slider_wrapper">');
            this.$parent_wrapper = this.$element.parent();
            this.parent_wrapper_width = 0;
            this.id = this.$element.attr("id");
            if (typeof this.id == "undefined") {
                content_slider_counter++;
                this.id = "all_around_slider_" + content_slider_counter
            }
            this.options = e.extend({}, e.fn.content_slider.defaults, i);
            if (this.options.main_circle_position == 1) {
                var o = this.options.circle_left_offset;
                this.options.circle_left_offset = 0
            }
            if (this.options.main_circle_position == 2) {
                var u = this.options.minus_width;
                this.options.minus_width = 0
            }
            if (this.options.main_circle_position > 0) {
                this.options.max_shown_items += this.options.max_shown_items - 1
            }
            if (this.options.border_on_off == 0) {
                this.options.arrow_width = this.options.small_arrow_width;
                this.options.arrow_height = this.options.small_arrow_height;
                this.options.activate_border_div = 0;
                this.options.use_thin_arrows = 0;
                this.options.small_border = 0;
                this.options.big_border = 0
            }
            if (this.options.use_thin_arrows == 1) {
                this.options.arrow_width = this.options.small_arrow_width;
                this.options.arrow_height = this.options.small_arrow_height
            }
            if (this.options.activate_border_div == 1) {
                this.options.small_pic_width += this.options.small_border * 2;
                this.options.small_pic_height += this.options.small_border * 2;
                this.options.big_pic_width += this.options.big_border * 2;
                this.options.big_pic_height += this.options.big_border * 2;
                this.options.small_border += 1;
                this.options.big_border += 1
            }
            if (this.options.keep_on_top_middle_circle)
                this.options.dinamically_set_class_id = 1;
            if (this.options.hide_content == 1)
                this.options.wrapper_text_max_height = 0;
            if (this.options.content_margin_left != 0)
                e(this.options.text_object, this.$element).css("margin-left", this.options.content_margin_left + "px");
            this.have_text_label = 0;
            this.have_text_label_up = 0;
            this.have_text_label_down = 0;
            this.lock = 0;
            this.lock2 = 0;
            this.click = 0;
            this.keep_going = 0;
            this.going_counter = 0;
            this.sum_movement = 0;
            this.is_auto_play = 0;
            this.dismiss_auto_play = 0;
            if (this.options.hv_switch)
                this.last_mouse_x = this.options.y_offset;
            else
                this.last_mouse_x = 0;
            this.show_mouse_move = 0;
            this.max_show = this.options.max_shown_items + 2;
            this.anim_counter = 0;
            this.func = this.go_right;
            this.arrow_hidden_counter = 0;
            this.clicked = 0;
            this.speed = this.options.moving_speed;
            this.mid_elem = Math.floor(this.options.max_shown_items / 2);
            this.max_pos = 3;
            this.opration = 0;
            this.offset = 0;
            this.was_gone = 0;
            this.number_of_items = 0;
            this.slider_state = 0;
            this.prettyPhoto_status = 0;
            this.mouse_in_animation = 0;
            this.hover_status = 0;
            this.mouse_out_animation = 0;
            this.minus = 0;
            this.real_width = 0;
            this.last_resolution_mode = 0;
            this.last_resolution = 0;
            this.under_600 = 0;
            this.mouse_state = 0;
            this.mouse_moved = 0;
            this.ignore_click_up = 0;
            this.ignore_click_up2 = 0;
            this.ignore_click_down = 0;
            var a = this.$element.offset();
            this.x_offset = a.left;
            this.y_offset = a.top;
            a = this.$parent_wrapper.offset();
            this.parent_x_offset = a.left;
            this.last_c = {
                pos: 0,
                master_click: 1
            };
            this.first_touch_x = 0;
            this.first_touch_y = 0;
            this.first_scroll_y = 0;
            this.is_touch_device = "ontouchstart"in document.documentElement;
            this.last_height = this.options.wrapper_text_max_height;
            this.prettyPhoto_open_status = 0;
            if (!this.options.top_offset)
                this.options.top_offset = Math.floor(this.options.big_pic_height / 2) + this.options.big_border + 1;
            if (this.options.hv_switch == 1 && this.options.max_shown_items == 1) {
                this.options.left_offset += 4
            }
            this.math = new r(this.options.map.length,this.options.max_shown_items,this.mid_elem,this.options.active_item - this.mid_elem - 1,0,this.options.child_div_width,this.options.big_pic_width,this.options.small_pic_width,this.options.small_pic_height,this.options.big_pic_width,this.options.big_pic_height,this.options.top_offset,this.options.small_border,this.options.big_border,this.options.arrow_width,this.options.arrow_height,this.options.container_class_padding,this.options.mode,this,this.options.left_offset);
            if (this.options.main_circle_position == 1) {
                var f = this.math._calculate_child_coordinates_by_n(this.mid_elem + 1, 0);
                var l = f.new_pos + this.options.left_offset;
                if (this.options.hv_switch == 0) {
                    var c = this.options.arrow_width;
                    if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1)
                        c = this.options.small_arrow_width
                } else {
                    var c = this.options.arrow_height;
                    if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1)
                        c = this.options.small_arrow_height;
                    o += 4
                }
                this.options.circle_left_offset = 0 - (l - c);
                this.options.circle_left_offset += o
            }
            var h;
            if (this.options.main_circle_position == 2) {
                h = this.math._calculate_child_coordinates_by_n(this.max_show - 1, 0);
                var p = h.new_pos + this.options.left_offset;
                var f = this.math._calculate_child_coordinates_by_n(this.mid_elem + 2, 0);
                var d = f.new_pos + this.options.left_offset;
                this.options.minus_width = p - d;
                this.options.minus_width += u
            }
            if (this.options.hv_switch == 0) {
                h = this.math._calculate_child_coordinates_by_n(this.max_show - 1, 0);
                this.max_width = h.new_pos + this.options.left_offset;
                if (this.options.minus_width > 0)
                    this.max_width -= this.options.minus_width
            } else {
                this.max_width = this.options.wrapper_text_max_height
            }
            this.$parent_wrapper.css({
                "max-width": this.max_width + "px"
            });
            this.ret_values = {
                height: 0,
                width: 0
            };
            this.ret_values.height = 2 * this.options.top_offset + this.options.shadow_offset;
            this.create_html();
            this.$prettyPhoto_div = e("div.image_more_info", this.$base);
            this.$prettyPhoto_a = e("a", this.$prettyPhoto_div);
            this.$prettyPhoto_img = e("img", this.$prettyPhoto_div);
            if (this.options.hide_prettyPhoto == 0) {
                this.$prettyPhoto_img.css({
                    padding: "0px",
                    "background-color": this.options.prettyPhoto_color
                });
                if (this.options.prettyPhoto_img != "")
                    this.$prettyPhoto_img.attr("src", this.options.prettyPhoto_img);
                if (this.options.allow_shadow == 0) {
                    this.$prettyPhoto_div.css("box-shadow", "0px 0px 0px #fff")
                }
                if (this.options.keep_on_top_middle_circle) {
                    this.$prettyPhoto_div.css("z-index", this.max_show + 1)
                }
            } else {
                this.$prettyPhoto_div.hide()
            }
            this.$items = e("div." + this.options.picture_class, this.$base);
            if (this.options.allow_shadow == 0) {
                this.$items.css({
                    "-moz-box-shadow": "0px 0px 0px #fff",
                    "-webkit-box-shadow": "0px 0px 0px #fff",
                    "box-shadow": "0px 0px 0px #fff"
                })
            }
            this.$left_arrow_class = e(this.options.left_arrow_class, this.$element);
            this.$right_arrow_class = e(this.options.right_arrow_class, this.$element);
            this.$left_arrow = e(this.options.left_arrow_class + " img", this.$element);
            this.$right_arrow = e(this.options.right_arrow_class + " img", this.$element);
            if (this.options.hide_arrows == 0) {
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                    this.$left_arrow_class.addClass("circle_slider_no_border");
                    this.$right_arrow_class.addClass("circle_slider_no_border")
                }
                if (this.options.use_thin_arrows == 1) {
                    this.$left_arrow_class.addClass("circle_slider_no_border2_left")
                }
                if (this.options.border_on_off == 1) {
                    this.$left_arrow.css("background", this.options.arrow_color);
                    this.$right_arrow.css("background", this.options.arrow_color)
                }
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                    if (this.options.hv_switch == 0) {
                        this.$left_arrow.css({
                            "z-index": "1000",
                            "margin-top": "15px"
                        });
                        this.$right_arrow.css({
                            "z-index": "1000",
                            "margin-top": "15px"
                        })
                    } else {
                        this.$left_arrow.css({
                            "z-index": "1000",
                            "margin-left": "15px"
                        });
                        this.$right_arrow.css({
                            "z-index": "1000",
                            "margin-left": "15px"
                        })
                    }
                }
                this._set_arrows_events()
            } else {
                this.$left_arrow_class.hide();
                this.$right_arrow_class.hide()
            }
            var v = 0;
            this.items = new Array;
            e.each(this.$items, function(n, r) {
                s.items[v] = new t(r,e.extend(s.options, {
                    $parent: s.$element,
                    parent_this: s,
                    n: v
                }));
                v++
            });
            this.number_of_items = v;
            this._preset_all_children_parameters(0);
            this._align_arrows();
            this.last_middle = this.math._convert_position_to_image_array(0, this.mid_elem);
            if (this.options.max_shown_items == 1 && this.options.hv_switch == 0) {
                this.$container.css("left", "13px")
            }
            if (this.options.max_shown_items > 1 && this.options.hv_switch == 0 && this.options.border_on_off == 0) {
                this.$container.css("left", "2px")
            }
            this._set_parent_window_size();
            this.mid = this._return_middle_position_of_content();
            this.slider_text = e("." + this.options.left_text_class, this.$element);
            this.max_size = Math.floor((this.options.wrapper_text_max_height - this.ret_values.height - 45) / 2);
            this.orig_max_size = this.max_size;
            if (this.options.max_shown_items > 1 && this.options.hv_switch == 0) {
                if (this.options.border_on_off == 1)
                    e(this.options.text_object, this.$element).css("width", this.max_width - 16 + "px");
                else
                    e(this.options.text_object, this.$element).css("width", this.max_width - 22 + "px")
            }
            e(window).resize(e.proxy(this._resize, this));
            this._resize();
            var m = this.$container.offset();
            if (this.options.hv_switch)
                this.offset = m.top;
            else
                this.offset = m.left + this.minus;
            if (this.options.hv_switch)
                this._set_text_div_width_ver();
            else
                this._set_text_div_width_hor();
            this.show_text(this.math._convert_position_to_image_array(0, this.mid_elem));
            this._set_prettyPhoto_div_position();
            if (this.options.enable_mousewheel == 1) {
                this.$container.bind("mousewheel", function(e, t, n, r) {
                    e.preventDefault();
                    if (t == -1)
                        s.public_go_left();
                    else
                        s.public_go_right()
                })
            }
            if (this.options.auto_play)
                this.start_auto_play();
            if (this.is_touch_device)
                this._start_main_hover();
            e(window).on("keydown", e.proxy(this.keypress, this));
            e(window).on("hashchange", e.proxy(this.hashchange, this));
            if (this.options.hv_switch == 0 && this.options.border_on_off == 1 && this.options.use_thin_arrows == 1) {
                this.$left_arrow.css("margin-left", "0px")
            }
        }
        function r(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b) {
            var w = this;
            this.parent_this = y;
            this.image_array_lenght = e;
            this.visible_window_lenght = t;
            this.div_window_lenght = this.visible_window_lenght + 2;
            this.beginning_position_number = -1;
            this.n_img_offset = r;
            this.begining_n_img_offset2 = r;
            this.position_n_offset = i;
            this.element_width = s;
            this.master_element_width = o;
            this.master_element_height = l;
            this.current_mid_after_ratio = 1;
            this.max_show = this.visible_window_lenght;
            this.sum_movement = 0;
            this.mid_elem = n;
            this.left_offset = b;
            this.small_pic_width = u;
            this.small_pic_height = a;
            this.big_pic_width = f;
            this.big_pic_height = l;
            this.top_offset = c;
            this.small_border = h;
            this.big_border = p;
            this.arrow_width = d;
            this.arrow_height = v;
            this.container_padding = m;
            this.mode = g
        }
        t.prototype = {
            $: function(e) {
                return this.$element.find(e)
            },
            _constructor: function(t, n, r) {
                var i = this;
                this.$element = e(t);
                this.$base = this.$element;
                this.$parent = n.$parent;
                this.options = n;
                this.n = n.n;
                this.parent_this = n.parent_this;
                this.have_element = 1;
                this.$image = e("img", this.$element);
                this.$border_div = e("div." + this.options.border_class, this.$element);
                this.image_src = this.$image.attr("src");
                this.real_i = this.$image.attr("class");
                var s = this.real_i.substring(15);
                this.real_i = parseInt(s, 10);
                if (this.parent_this.have_text_label_up) {
                    this.upper_text_label_show = this.options.map[this.real_i].upper_text_label_show;
                    this.upper_text_label = this.options.map[this.real_i].upper_text_label;
                    this.upper_text_label_style = this.options.map[this.real_i].upper_text_label_style;
                    this.$upper_text = this.$element.next("div.all_around_text_up");
                    if (this.$upper_text.length) {
                        this.$upper_text_span = e("span", this.$upper_text)
                    }
                }
                if (this.parent_this.have_text_label_down) {
                    this.lower_text_label_show = this.options.map[this.real_i].lower_text_label_show;
                    this.lower_text_label = this.options.map[this.real_i].lower_text_label;
                    this.lower_text_label_style = this.options.map[this.real_i].lower_text_label_style;
                    this.$lower_text = this.$element.nextAll("div.all_around_text_down:first");
                    if (this.$lower_text.length) {
                        this.$lower_text_span = e("span", this.$lower_text)
                    }
                }
                this.turn_counter = 0;
                this.last_mouse_x = 0;
                this.show_mouse_move = 0;
                this.sum_movement = 0;
                this.mouse_in_animation = 0;
                this.hover_status = 0;
                this.mouse_out_animation = 0;
                this.positions = 0;
                this.max = this.parent_this.max_show;
                this.position_in_slider = this.n;
                this.marg_left = Math.floor((this.options.big_pic_width - this.options.small_pic_width) / 2);
                this.marg_top = Math.floor((this.options.big_pic_height - this.options.small_pic_height) / 2);
                this.$element.mousedown(e.proxy(this._mouse_down, this));
                this.$element.mouseup(e.proxy(this._mouse_up, this));
                this.$element.mouseleave(e.proxy(this._mouse_leave, this));
                this.$element.mousemove(e.proxy(this._mouse_move, this));
                this.$image.mousedown(e.proxy(this._mouse_down, this));
                this.$image.mouseup(e.proxy(this._mouse_up, this));
                if (this.options.dinamically_set_position_class) {
                    this.$element.addClass("all_around_position_" + this.position_in_slider)
                }
            },
            _set_img: function(e, t) {
                var n = 0;
                var r = 0;
                var i = "";
                if (this.options.activate_border_div == 0 && this.options.border_on_off == 1) {
                    n = 10;
                    r = 10
                }
                if (this.parent_this.options.hv_switch == 0)
                    i = "width: " + (this.options.small_pic_width + r) + "px; ";
                if (this.parent_this.have_text_label_up) {
                    this.upper_text_label_show = this.options.map[t].upper_text_label_show;
                    this.upper_text_label = this.options.map[t].upper_text_label;
                    this.upper_text_label_style = this.options.map[t].upper_text_label_style;
                    this.$upper_text_span.html(this.upper_text_label);
                    this.$upper_text_span.attr("style", i + this.upper_text_label_style)
                }
                if (this.parent_this.have_text_label_down) {
                    this.lower_text_label_show = this.options.map[t].lower_text_label_show;
                    this.lower_text_label = this.options.map[t].lower_text_label;
                    this.lower_text_label_style = this.options.map[t].lower_text_label_style;
                    this.$lower_text_span.html(this.lower_text_label);
                    if (this.parent_this.options.hv_switch == 0)
                        this.$lower_text_span.attr("style", i + this.lower_text_label_style)
                }
                this.image_src = e;
                this.$image.attr("src", e);
                if (this.options.dinamically_set_class_id) {
                    if (typeof t != "undefined") {
                        if (t != this.real_i) {
                            this.$element.removeClass("all_around_circle_" + this.real_i);
                            this.real_i = t;
                            this.$image.attr("class", "all_around_img_" + t);
                            this.$element.addClass("all_around_circle_" + this.real_i)
                        }
                    }
                }
            },
            _set_pos_size: function(e, t, n, r, i, s, o, u) {
                var a, f;
                var l = this.options.border_color;
                var c = 5;
                var h = 0;
                if (this.options.activate_border_div == 0 && this.options.border_on_off == 1)
                    h = 12;
                if (this.options.border_on_off == 0)
                    s = 0;
                this.current_border = s;
                if (!o) {
                    if (this.options.border_radius == -1)
                        a = r;
                    else {
                        if (this.options.radius_proportion) {
                            var p = this.options.big_pic_width / this.options.border_radius;
                            var d = r / p;
                            a = d
                        } else {
                            a = this.options.border_radius
                        }
                    }
                    if (this.parent_this.options.hv_switch) {
                        if (this.options.activate_border_div) {
                            this.$element.css({
                                left: n,
                                top: e,
                                width: r,
                                height: i,
                                "border-radius": a,
                                border: l + " solid 0px"
                            });
                            this.$border_div.css({
                                width: r + 2,
                                height: i + 2,
                                "border-radius": a,
                                border: l + " solid " + s + "px"
                            })
                        } else {
                            this.$element.css({
                                left: n,
                                top: e,
                                width: r,
                                height: i,
                                "border-radius": a,
                                border: l + " solid " + s + "px"
                            })
                        }
                        if (typeof this.parent_this.default_circle_top == "undefined")
                            this.parent_this.default_circle_top = n - c;
                        if (this.parent_this.have_text_label_up) {
                            this.$upper_text.css({
                                top: e,
                                left: n - c - this.parent_this.default_circle_top,
                                width: this.parent_this.default_circle_top
                            })
                        }
                        if (this.parent_this.have_text_label_down) {
                            if (r == this.options.big_pic_width) {
                                h += 10;
                                if (this.options.activate_border_div == 1)
                                    h += 15
                            }
                            this.$lower_text.css({
                                top: e,
                                left: n + i + c + h,
                                width: this.parent_this.default_circle_top
                            })
                        }
                        if (this.parent_this.have_text_label) {
                            var v = 0;
                            var m = 0;
                            var g = 0;
                            if (this.parent_this.have_text_label_up) {
                                this.$upper_text_span.css("width", this.parent_this.default_circle_top);
                                v = this.$upper_text.height();
                                m = this.$upper_text_span.height()
                            }
                            if (m > 0)
                                g = v / 2 - m / 2;
                            var y = 0;
                            var b = 0;
                            var w = 0;
                            if (this.parent_this.have_text_label_down) {
                                this.$lower_text_span.css("width", this.parent_this.default_circle_top);
                                y = this.$lower_text.height();
                                b = this.$lower_text_span.height()
                            }
                            if (b > 0)
                                w = y / 2 - b / 2;
                            if (this.parent_this.have_text_label_up)
                                this.$upper_text_span.css("top", g + "px");
                            if (this.parent_this.have_text_label_down)
                                this.$lower_text_span.css("top", w + "px")
                        }
                    } else {
                        if (this.options.activate_border_div) {
                            this.$element.css({
                                left: e,
                                top: n,
                                width: r,
                                height: i,
                                "border-radius": a,
                                border: l + " solid 0px"
                            });
                            this.$border_div.css({
                                width: r + 2,
                                height: i + 2,
                                "border-radius": a,
                                border: l + " solid " + s + "px"
                            })
                        } else {
                            this.$element.css({
                                left: e,
                                top: n,
                                width: r,
                                height: i,
                                "border-radius": a,
                                border: l + " solid " + s + "px"
                            })
                        }
                        if (typeof this.parent_this.default_circle_top == "undefined")
                            this.parent_this.default_circle_top = n - c;
                        if (this.parent_this.have_text_label)
                            f = r - (r - this.options.small_pic_width) / 2 - this.options.small_pic_width;
                        if (this.parent_this.have_text_label_up) {
                            this.$upper_text.css({
                                left: e + f,
                                top: n - c - this.parent_this.default_circle_top,
                                height: this.parent_this.default_circle_top
                            })
                        }
                        if (this.parent_this.have_text_label_down) {
                            if (r == this.options.big_pic_width) {
                                h += 10;
                                if (this.options.activate_border_div == 1)
                                    h += 15
                            }
                            this.$lower_text.css({
                                left: e + f,
                                top: n + i + c + h,
                                height: this.parent_this.default_circle_top
                            })
                        }
                    }
                    this.$image.css({
                        width: r,
                        height: i,
                        "border-radius": a
                    })
                } else {
                    if (this.options.border_radius == -1)
                        a = this.parent_this.options.big_pic_width;
                    else {
                        if (this.options.radius_proportion) {
                            var p = this.options.big_pic_width / this.options.border_radius;
                            var d = r / p;
                            a = d
                        } else {
                            a = this.options.border_radius
                        }
                    }
                    if (this.options.activate_border_div) {
                        this.$element.css({
                            "border-radius": a + "px"
                        });
                        this.$border_div.css({
                            "border-radius": a + "px"
                        })
                    } else {
                        this.$element.css({
                            "border-radius": a + "px"
                        })
                    }
                    this.$image.css({
                        "border-radius": a + "px"
                    });
                    if (this.parent_this.options.hv_switch) {
                        if (this.options.activate_border_div) {
                            this.$element.animate({
                                left: n,
                                top: e,
                                width: r,
                                height: i,
                                "border-width": "0px"
                            }, t, this.options.moving_easing, u);
                            this.$border_div.animate({
                                width: r + 2,
                                height: i + 2,
                                "border-width": s + "px"
                            }, t, this.options.moving_easing)
                        } else {
                            this.$element.animate({
                                left: n,
                                top: e,
                                width: r,
                                height: i,
                                "border-width": s + "px"
                            }, t, this.options.moving_easing, u)
                        }
                        this.$image.animate({
                            width: i,
                            height: r
                        }, t, this.options.arrow_easing, u);
                        if (typeof this.parent_this.default_circle_top == "undefined")
                            this.parent_this.default_circle_top = n - c;
                        if (this.parent_this.have_text_label_up) {
                            this.$upper_text.animate({
                                top: e,
                                left: n - c - this.parent_this.default_circle_top,
                                width: this.parent_this.default_circle_top
                            }, t, this.options.moving_easing)
                        }
                        if (this.parent_this.have_text_label_down) {
                            if (r == this.options.big_pic_width) {
                                h += 10;
                                if (this.options.activate_border_div == 1)
                                    h += 15
                            }
                            this.$lower_text.animate({
                                top: e,
                                left: n + i + c + h,
                                width: this.parent_this.default_circle_top
                            }, t, this.options.moving_easing)
                        }
                        if (this.parent_this.have_text_label) {
                            var v = 0;
                            var m = 0;
                            var g = 0;
                            if (this.parent_this.have_text_label_up) {
                                this.$upper_text_span.css("width", this.parent_this.default_circle_top);
                                v = this.$upper_text.height();
                                m = this.$upper_text_span.height()
                            }
                            if (m > 0)
                                g = v / 2 - m / 2;
                            var y = 0;
                            var b = 0;
                            var w = 0;
                            if (this.parent_this.have_text_label_down) {
                                this.$lower_text_span.css("width", this.parent_this.default_circle_top);
                                y = this.$lower_text.height();
                                b = this.$lower_text_span.height()
                            }
                            if (b > 0)
                                w = y / 2 - b / 2;
                            if (this.parent_this.have_text_label_up)
                                this.$upper_text_span.animate({
                                    top: g + "px"
                                }, t, this.options.moving_easing);
                            if (this.parent_this.have_text_label_down)
                                this.$lower_text_span.css({
                                    top: w + "px"
                                })
                        }
                    } else {
                        if (this.options.activate_border_div) {
                            this.$element.animate({
                                left: e,
                                top: n,
                                width: r,
                                height: i,
                                "border-width": "0px"
                            }, t, this.options.moving_easing, u);
                            this.$border_div.animate({
                                width: r + 2,
                                height: i + 2,
                                "border-width": s + "px"
                            }, t, this.options.moving_easing)
                        } else {
                            this.$element.animate({
                                left: e,
                                top: n,
                                width: r,
                                height: i,
                                "border-width": s + "px"
                            }, t, this.options.moving_easing, u)
                        }
                        this.$image.animate({
                            width: r,
                            height: i
                        }, t, this.options.arrow_easing, u);
                        if (this.parent_this.have_text_label)
                            f = r - (r - this.options.small_pic_width) / 2 - this.options.small_pic_width;
                        if (this.parent_this.have_text_label_up) {
                            this.$upper_text.animate({
                                left: e + f,
                                top: n - c - this.parent_this.default_circle_top,
                                height: this.parent_this.default_circle_top
                            }, t, this.options.moving_easing)
                        }
                        if (this.parent_this.have_text_label_down) {
                            if (r == this.options.big_pic_width) {
                                h += 10;
                                if (this.options.activate_border_div == 1)
                                    h += 15
                            }
                            this.$lower_text.animate({
                                left: e + f,
                                top: n + i + c + h,
                                height: this.parent_this.default_circle_top
                            }, t, this.options.moving_easing)
                        }
                    }
                }
            },
            _mouse_down: function(e) {
                e.preventDefault();
                if (this.options.hv_switch)
                    var t = e.pageY - this.parent_this.y_offset - this.options.circle_left_offset;
                else
                    var t = e.pageX - this.parent_this.x_offset + this.parent_this.minus - this.options.circle_left_offset;
                var n = this.parent_this.math._convert_x_position_to_n(t);
                if (n.master_click == 1)
                    return;
                this._mouse_leave(e)
            },
            _mouse_leave: function(e) {
                e.preventDefault();
                if (this.options.hover_movement == 0 || this.parent_this.show_mouse_move == 1 || this.parent_this.slider_state == 1)
                    return;
                if (this.mouse_out_animation == 1 || this.hover_status == 0)
                    return;
                if (this.mouse_in_animation == 1) {
                    this.$element.stop();
                    this.$image.stop();
                    if (this.options.activate_border_div)
                        this.$border_div.stop();
                    this.mouse_in_animation = 0
                }
                if (this.element_top < 1) {
                    this.hover_status = 0;
                    this.mouse_in_animation = 0;
                    this.mouse_out_animation = 0;
                    return
                }
                this.hover_status = 1;
                this.mouse_out_animation = 1;
                this._end_hover2()
            },
            _end_hover2: function() {
                this.$element.animate({
                    left: this.element_left + "px",
                    top: this.element_top + "px",
                    width: this.element_width + "px",
                    height: this.element_height + "px"
                }, this.options.hover_speed, this.options.hover_easing, e.proxy(this._hover_ended2, this));
                if (this.options.activate_border_div) {
                    this.$border_div.animate({
                        width: this.element_width + 2 + "px",
                        height: this.element_height + 2 + "px"
                    }, this.options.hover_speed, this.options.hover_easing)
                }
                this.$image.animate({
                    width: this.image_width + "px",
                    height: this.image_height + "px"
                }, this.options.hover_speed, this.options.hover_easing)
            },
            _hover_ended2: function() {
                this.hover_status = 0;
                this.mouse_out_animation = 0
            },
            _mouse_move: function(e) {
                e.preventDefault();
                if (this.options.hover_movement == 0 || this.parent_this.show_mouse_move == 1 || this.parent_this.slider_state == 1)
                    return;
                if (this.mouse_in_animation == 1 || this.hover_status == 2)
                    return;
                if (this.mouse_out_animation == 1) {
                    this.$element.stop();
                    this.$image.stop();
                    if (this.options.activate_border_div)
                        this.$border_div.stop();
                    this.mouse_out_animation = 0
                }
                if (this.options.hv_switch)
                    var t = e.pageY - this.parent_this.y_offset - this.options.circle_left_offset;
                else
                    var t = e.pageX - this.parent_this.x_offset + this.parent_this.minus - this.options.circle_left_offset;
                var n = this.parent_this.math._convert_x_position_to_n(t);
                if (n.master_click == 1)
                    return;
                this.hover_status = 1;
                this.mouse_in_animation = 1;
                this._start_hover()
            },
            _calculate_hovers: function() {
                this.positions = 1;
                hover_movement_middle = Math.floor(this.options.hover_movement / 2);
                hover_movement = this.options.hover_movement;
                hover_movement2 = hover_movement * 2;
                var e = this.$element.position();
                pos2 = this.$image.position();
                this.element_top = e.top;
                this.element_left = e.left;
                this.element_width = this.$element.width();
                this.element_height = this.$element.height();
                this.image_top = pos2.top;
                this.image_left = pos2.left;
                this.image_height = this.$image.height();
                this.image_width = this.$image.width();
                this.element_top_middle = this.element_top - hover_movement_middle;
                this.element_left_middle = this.element_left - hover_movement_middle;
                this.element_width_middle = this.element_width + hover_movement;
                this.element_height_middle = this.element_height + hover_movement;
                this.image_width_middle = this.image_width + hover_movement;
                this.image_height_middle = this.image_height + hover_movement;
                this.element_top_end = this.element_top - hover_movement;
                this.element_left_end = this.element_left - hover_movement;
                this.element_width_end = this.element_width + hover_movement2;
                this.element_height_end = this.element_height + hover_movement2;
                this.image_width_end = this.image_width + hover_movement2;
                this.image_height_end = this.image_height + hover_movement2
            },
            _start_hover: function() {
                if (this.positions == 0) {
                    this._calculate_hovers()
                }
                if (this.element_top < 3) {
                    this.hover_status = 0;
                    this.mouse_in_animation = 0;
                    this.mouse_out_animation = 0;
                    return
                }
                this.$element.animate({
                    left: this.element_left_end + "px",
                    top: this.element_top_end + "px",
                    width: this.element_width_end + "px",
                    height: this.element_height_end + "px"
                }, this.options.hover_speed, this.options.hover_easing, e.proxy(this._end_hover, this));
                if (this.options.activate_border_div) {
                    this.$border_div.animate({
                        width: this.element_width_end + 2 + "px",
                        height: this.element_height_end + 2 + "px"
                    }, this.options.hover_speed, this.options.hover_easing)
                }
                this.$image.animate({
                    width: this.image_width_end + "px",
                    height: this.image_height_end + "px"
                }, this.options.hover_speed, this.options.hover_easing)
            },
            _end_hover: function() {
                this.$element.animate({
                    left: this.element_left_middle + "px",
                    top: this.element_top_middle + "px",
                    width: this.element_width_middle + "px",
                    height: this.element_height_middle + "px"
                }, this.options.hover_speed, this.options.hover_easing, e.proxy(this._hover_ended, this));
                if (this.options.activate_border_div) {
                    this.$border_div.animate({
                        width: this.element_width_middle + 2 + "px",
                        height: this.element_height_middle + 2 + "px"
                    }, this.options.hover_speed, this.options.hover_easing)
                }
                this.$image.animate({
                    width: this.image_width_middle + "px",
                    height: this.image_height_middle + "px"
                }, this.options.hover_speed, this.options.hover_easing)
            },
            _hover_ended: function() {
                this.hover_status = 2;
                this.mouse_in_animation = 0
            },
            reset_positions: function() {
                if (this.positions == 0)
                    return;
                if (this.mouse_in_animation == 1 || this.mouse_out_animation == 1) {
                    this.$element.stop();
                    this.$image.stop();
                    if (this.options.activate_border_div)
                        this.$border_div.stop()
                }
                if (this.parent_this.mouse_moved == 0) {
                    this.$element.css({
                        left: this.element_left + "px",
                        top: this.element_top + "px",
                        width: this.element_width + "px",
                        height: this.element_height + "px"
                    });
                    if (this.options.activate_border_div) {
                        this.$border_div.css({
                            width: this.element_width + 2 + "px",
                            height: this.element_height + 2 + "px"
                        })
                    }
                    this.$image.css({
                        width: this.image_width + "px",
                        height: this.image_height + "px"
                    })
                }
                this.positions = 0;
                this.mouse_in_animation = 0;
                this.hover_status = 0;
                this.mouse_out_animation = 0
            },
            value_reset: function() {
                this.positions = 0;
                this.mouse_in_animation = 0;
                this.hover_status = 0;
                this.mouse_out_animation = 0
            }
        };
        n.prototype = {
            $: function(e) {
                return this.$element.find(e)
            },
            hashchange: function() {
                var t = window.location.hash;
                var n = t.length;
                var r = this.id.length;
                var i = -1;
                var s = 0;
                var o = "";
                if (t.substr(0, 1) == "#")
                    t = t.substr(1);
                if (t.substr(0, r) == this.id) {
                    var u = t.substr(r);
                    if (u.substr(0, 1) == "_")
                        u = u.substr(1);
                    var a = u;
                    i = parseInt(a, 10);
                    var f;
                    var l = 0;
                    if (isNaN(i)) {
                        i = -1;
                        if (a.length > 0) {
                            l = 1;
                            f = -1
                        } else {
                            l = 0;
                            f = -1
                        }
                    } else {
                        f = a.indexOf("_")
                    }
                    if (f != -1 || l == 1) {
                        o = a.substr(f + 1);
                        if (o == "scroll")
                            s = 1
                    }
                    if (s) {
                        e("html, body").animate({
                            scrollTop: this.$element.offset().top - 40
                        }, 1e3)
                    }
                    if (i > -1) {
                        this.public_go_to_slide(i)
                    }
                }
            },
            keypress: function(e) {
                if (this.options.bind_arrow_keys) {
                    if (e.keyCode == 39)
                        this.public_go_left();
                    if (e.keyCode == 37)
                        this.public_go_right()
                }
            },
            public_go_left: function(e, t) {
                if (typeof e == "undefined")
                    e = 0;
                if (typeof t == "undefined")
                    t = 1;
                if (e == 1 && this.is_auto_play == 1 && this.dismiss_auto_play == 1)
                    return;
                if (this.slider_state == 0) {
                    this._stop_children();
                    this.slider_state = 1;
                    this._arrow_mouse_down();
                    this._arrow_mouse_up();
                    this.left_clicked_n(t)
                }
            },
            public_go_right: function(e, t) {
                if (typeof e == "undefined")
                    e = 0;
                if (typeof t == "undefined")
                    t = 1;
                if (e == 1 && this.is_auto_play == 1 && this.dismiss_auto_play == 1)
                    return;
                if (this.slider_state == 0) {
                    this._stop_children();
                    this.slider_state = 1;
                    this._arrow_mouse_down();
                    this._arrow_mouse_up();
                    this.right_clicked_n(t)
                }
            },
            public_go_one_slide_left: function(e) {
                this.public_go_right(0, 1)
            },
            public_go_one_slide_right: function(e) {
                this.public_go_left(0, 1)
            },
            public_go_n_slides_left: function(e) {
                this.public_go_right(0, e)
            },
            public_go_n_slides_right: function(e) {
                this.public_go_left(0, e)
            },
            public_go_to_slide: function(e) {
                var t = this.last_middle;
                var n = this.items_counts;
                var r = 0;
                while (1) {
                    if (t == n)
                        t = 0;
                    if (t == e)
                        break;
                    if (r > n * 2) {
                        r = 0;
                        break
                    }
                    r++;
                    t++
                }
                t = this.last_middle;
                n = this.items_counts;
                var i = 0;
                while (1) {
                    if (t == -1)
                        t = n - 1;
                    if (t == e)
                        break;
                    if (i > n * 2) {
                        i = 0;
                        break
                    }
                    i++;
                    t--
                }
                var s = 0;
                var o = "";
                if (r == 0 && i == 0)
                    return;
                if (r < i) {
                    s = r;
                    o = "f"
                }
                if (r > i) {
                    s = i;
                    o = "b"
                }
                if (r == i) {
                    s = r;
                    o = "f"
                }
                if (s == 0)
                    return;
                if (o == "f")
                    this.public_go_left(0, s);
                if (o == "b")
                    this.public_go_right(0, s)
            },
            check_under_600: function(t) {
                if (this.under_600 == 0 && t < 600) {
                    this.under_600 = 1;
                    this.height_backup = this.$element.height();
                    this.$element.css({
                        height: ""
                    });
                    e(this.options.text_object, this.$element).css({
                        "float": "",
                        top: "0px",
                        left: "0px",
                        clear: "both"
                    });
                    if (this.options.small_resolution_max_height)
                        this.$parent_wrapper.css({
                            height: this.options.small_resolution_max_height
                        })
                }
                if (this.under_600 == 1 && t >= 600) {
                    this.under_600 = 0;
                    this.$element.css({
                        height: this.height_backup
                    });
                    e(this.options.text_object, this.$element).css({
                        "float": "left",
                        clear: ""
                    });
                    if (this.options.small_resolution_max_height)
                        this.$parent_wrapper.css({
                            height: ""
                        })
                }
            },
            get_window_width: function() {
                if (this.options.responsive_by_available_space == 1) {
                    var t = this.$parent_wrapper.parent().width();
                    return t
                } else {
                    return e(window).width()
                }
            },
            _resize: function() {
                var t = this.get_window_width();
                if (this.last_resolution == t)
                    return;
                var n = e(this.$element).offset();
                this.x_offset = n.left;
                this.y_offset = n.top;
                n = this.$parent_wrapper.offset();
                this.parent_x_offset = n.left;
                var r = this.$container.offset();
                if (this.options.hv_switch) {
                    this.offset = r.top
                } else {
                    this.offset = r.left + this.minus
                }
                if (t < this.options.big_pic_width + 59) {
                    var i = t;
                    x_ww = this.options.big_pic_width + 59;
                    var s = x_ww - i;
                    var o = i / (x_ww / 100);
                    o -= 4;
                    o = o / 100;
                    this.$container.css("transform", "scale(" + o + ", " + o + ")");
                    if (this.options.hv_switch == 1)
                        this.$container.css("left", "-" + s / 3 + "px");
                    e(".circle_slider_text_wrapper", this.$element).css("top", "-" + s / 2 + "px")
                } else {
                    this.$container.css("transform", "scale(1,1)");
                    if (this.options.hv_switch == 1)
                        this.$container.css("left", "0px");
                    e(".circle_slider_text_wrapper", this.$element).css("top", "0px")
                }
                this.last_resolution = t;
                if (this.options.hv_switch) {
                    this.check_under_600(t);
                    if (this.options.wrapper_text_max_height + 13 >= t) {
                        this.max_size = Math.floor((t - this.ret_values.height - 45) / 2) - 5;
                        if (this.under_600 == 1) {
                            if (this.options.vert_text_mode == 1)
                                this.max_size = Math.floor(this.options.big_pic_width / 2);
                            else
                                this.max_size = this.options.child_div_width
                        }
                        this._set_parent_window_size(1, t);
                        this._set_text_div_width_ver();
                        this.show_text(this.last_middle, 1);
                        this.last_resolution_mode = 2
                    } else {
                        if (this.last_resolution_mode == 2) {
                            this.max_size = this.orig_max_size;
                            this._set_parent_window_size(1, this.options.wrapper_text_max_height);
                            this._set_text_div_width_ver();
                            this.show_text(this.last_middle, 1, 1)
                        }
                        this.last_resolution_mode = 1
                    }
                    return
                } else {
                    var u = this.real_width;
                    var a = e(this.options.text_field_id_prefix + this.last_middle, this.$element);
                    if (u + 13 >= t) {
                        if (this.options.small_resolution_max_height)
                            this.$parent_wrapper.css({
                                height: this.options.small_resolution_max_height
                            });
                        if (this.options.main_circle_position == 0) {
                            var f = u + 13 - t;
                            var l = f;
                            f = Math.floor(f / 2) - 8;
                            this.minus = f;
                            this.$element.css({
                                left: "-" + f + "px"
                            })
                        }
                        if (this.options.main_circle_position == 2) {
                            var f = u + 13 - t;
                            var l = f;
                            f -= 8;
                            this.minus = f;
                            this.$element.css({
                                left: "-" + f + "px"
                            })
                        }
                        $block = e("div.content_slider_text_block_wrap", a);
                        if ($block.length) {
                            if (typeof this.last_text_width == "undefined")
                                this.last_text_width = a.width();
                            a.css("width", t - 10 + "px")
                        }
                        this._set_text_div_width_hor();
                        this._set_parent_window_size(1, t - 10);
                        this.last_resolution_mode = 2
                    } else {
                        if (this.last_resolution_mode == 2) {
                            if (this.options.small_resolution_max_height)
                                this.$parent_wrapper.css({
                                    height: ""
                                });
                            this.minus = 0;
                            this.$element.css({
                                left: "0px"
                            });
                            this._set_text_div_width_hor();
                            this._set_parent_window_size(1, this.real_width);
                            if (typeof this.last_text_width == "undefined")
                                this.last_text_width = this.real_width - 5;
                            a.css("width", this.last_text_width + "px")
                        }
                        this.last_resolution_mode = 1
                    }
                }
            },
            _set_text_div_width_hor: function() {
                $text_element = e(this.options.text_object, this.$element);
                var t = 0;
                var n = this.mid;
                var r = this.get_window_width();
                if (this.minus > 0)
                    n = Math.floor(r / 2) - 5;
                if (this.options.activate_border_div == 1)
                    t = Math.floor(this.options.big_border / 2);
                var i = 0;
                if (this.options.max_shown_items > 1 && this.options.hv_switch == 0) {
                    if (this.options.border_on_off == 1)
                        i = 8;
                    else
                        i = 11
                }
                this.slider_text.css({
                    width: n - this.options.left_text_class_padding - t - i + "px"
                });
                if (this.minus > 0) {
                    $text_element.css({
                        left: this.minus + "px"
                    })
                } else {
                    $text_element.css({
                        left: "0px"
                    })
                }
            },
            _set_text_div_width_ver: function() {
                if (!this.options.vert_text_mode) {
                    this.slider_text.css({
                        width: this.max_size + "px"
                    })
                } else {
                    if (this.under_600 == 0)
                        this.slider_text.css({
                            left: this.ret_values.height + "px"
                        })
                }
            },
            create_html: function() {
                this.items_counts = this.options.map.length;
                var t, n, r;
                var i = '<div class="' + this.options.container_class + '"><div class="image_more_info"><a href="#"><img alt="" src="' + this.options.plugin_url + 'images/more.png"></a></div>';
                this._start = -1;
                this._end = this.max_show - 1;
                var s, r;
                var o, u, a, f, l, c;
                for (t = 0; t < this.items_counts; t++) {
                    if (this.options.map[t].upper_text_label_show == 1)
                        this.have_text_label_up = 1;
                    if (this.options.map[t].lower_text_label_show == 1)
                        this.have_text_label_down = 1
                }
                if (this.have_text_label_up || this.have_text_label_down)
                    this.have_text_label = 1;
                for (t = this._start; t < this._end; t++) {
                    r = this.math._convert_position_to_image_array(0, t);
                    n = this.options.map[r].image;
                    o = 0;
                    u = "";
                    a = "";
                    if (typeof this.options.map[r].upper_text_label_show != "undefined")
                        o = this.options.map[r].upper_text_label_show;
                    if (typeof this.options.map[r].upper_text_label != "undefined")
                        u = this.options.map[r].upper_text_label;
                    if (typeof this.options.map[r].upper_text_label_style != "undefined")
                        a = this.options.map[r].upper_text_label_style;
                    f = 0;
                    l = "";
                    c = "";
                    if (typeof this.options.map[r].lower_text_label_show != "undefined")
                        f = this.options.map[r].lower_text_label_show;
                    if (typeof this.options.map[r].lower_text_label != "undefined")
                        l = this.options.map[r].lower_text_label;
                    if (typeof this.options.map[r].lower_text_label_style != "undefined")
                        c = this.options.map[r].lower_text_label_style;
                    s = this.math._calculate_child_coordinates_by_n(t);
                    i += this._create_a_html_for_a_child(n, s.new_pos, r, o, u, a, f, l, c)
                }
                var h = this.options.max_shown_items * this.options.child_div_width;
                if (this.options.preload_all_images) {
                    for (t = 0; t < this.items_counts; t++) {
                        e("<img/>")[0].src = this.options.map[t].image
                    }
                }
                i += this._create_arrows();
                if (this.options.hv_switch)
                    i += '<div class="clear"></div></div>';
                else
                    i += "</div>";
                this.$element.prepend(i);
                this.$container = e("div." + this.options.container_class, this.$element);
                this.$container.mousedown(e.proxy(this._mouse_down, this));
                this.$container.mouseup(e.proxy(this._mouse_up, this));
                this.$element.mouseenter(e.proxy(this._mouse_enter_widget, this));
                this.$element.mouseleave(e.proxy(this._mouse_leave_widget, this));
                this.$container.mouseleave(e.proxy(this._mouse_leave, this));
                this.$container.mousemove(e.proxy(this._mouse_move, this));
                this.$container.on("touchstart", e.proxy(function(t) {
                    t.preventDefault();
                    var n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    var r = 0;
                    if (typeof n == "undefined" || typeof n.clientY == "undefined")
                        r = 1;
                    if (r == 0) {
                        this.first_touch_x = n.clientX;
                        this.first_touch_y = n.clientY;
                        this.first_scroll_y = e("body").scrollTop();
                        this.ignore_click_up2 = 0
                    }
                    this._mouse_down(n, 1)
                }, this));
                this.$container.on("touchend", e.proxy(function(e) {
                    e.preventDefault();
                    var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    this._mouse_up(t)
                }, this));
                this.$container.on("touchmove", e.proxy(function(t) {
                    t.preventDefault();
                    var n = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    n.touched = 1;
                    var r = e(this.$container).offset();
                    var i = n.pageX - r.left + this.minus - this.options.circle_left_offset;
                    var s = n.pageY - r.top;
                    while (1) {
                        if (this.options.hv_switch == 0 && this.options.enable_scroll_with_touchmove_on_horizontal_version == 0)
                            break;
                        if (this.options.hv_switch == 1 && this.options.enable_scroll_with_touchmove_on_vertical_version == 0)
                            break;
                        if (typeof n == "undefined" || typeof n.clientY == "undefined")
                            break;
                        var o = 0;
                        if (n.clientX > 0 && n.clientY > 0)
                            o = 1;
                        else
                            break;
                        var u = Math.abs(n.clientX - this.first_touch_x);
                        var a = Math.abs(n.clientY - this.first_touch_y);
                        if (u > a)
                            break;
                        if (a > 10)
                            this.ignore_click_up2 = 1;
                        a = n.clientY - this.first_touch_y;
                        var f = this.first_scroll_y - a;
                        e("body").scrollTop(f);
                        return
                    }
                    if (i < e(this.$container).width() && i > 0 && s < e(this.$container).height() && s > 0)
                        this._mouse_move(n);
                    else
                        this._mouse_leave(n)
                }, this))
            },
            _set_prettyPhoto_div_position: function() {
                this.prettyPhoto_left = this._return_middle_position_of_content() - Math.floor(this.options.big_pic_width / 2) + Math.floor(this.options.big_pic_width * this.options.prettyPhoto_start);
                var e = 0;
                if (this.options.top_offset > 0)
                    e = this.options.top_offset - Math.floor(this.options.big_pic_height / 2);
                this.prettyPhoto_top = e + Math.floor(this.options.big_pic_height * this.options.prettyPhoto_start);
                if (this.options.hv_switch) {
                    this.$prettyPhoto_div.css({
                        top: this.prettyPhoto_left + "px",
                        left: this.prettyPhoto_top + "px"
                    })
                } else {
                    this.$prettyPhoto_div.css({
                        left: this.prettyPhoto_left + "px",
                        top: this.prettyPhoto_top + "px"
                    })
                }
            },
            _set_parent_window_size: function(t, n) {
                if (typeof t == "undefined")
                    t = 0;
                if (typeof n == "undefined")
                    n = 0;
                this.ret_values.height = 2 * this.options.top_offset + this.options.shadow_offset;
                var r = this.math._calculate_child_coordinates_by_n(this.max_show - 1, 0);
                if (this.options.minus_width > 0)
                    r.new_pos -= this.options.minus_width;
                r.new_pos2 = r.new_pos + this.options.left_offset;
                wrapper_text_max_height = this.options.wrapper_text_max_height;
                var i = e(this.options.text_field_id_prefix + this.last_middle, this.$element);
                if (this.minus > 0 && this.last_middle > -1) {
                    $block = e("div.content_slider_text_block_wrap", i);
                    if ($block.length) {
                        if (typeof this.last_text_width == "undefined")
                            this.last_text_width = i.width();
                        var s = this.get_window_width();
                        i.css("width", s - 10 + "px")
                    }
                }
                var o;
                if (this.options.hide_content == 0)
                    o = i.height();
                else
                    o = 0;
                var u = this.$parent_wrapper.height();
                var a = this.ret_values.height + o + 10;
                if (a > wrapper_text_max_height)
                    wrapper_text_max_height = a;
                if (t) {
                    if (!this.options.hv_switch) {
                        if (n != 0) {
                            this.$parent_wrapper.css({
                                width: n + "px"
                            });
                            this.parent_wrapper_width = n;
                            if (this.options.main_circle_position != 0)
                                e(this.options.text_object, this.$element).css("width", n + "px");
                            if (this.options.max_shown_items == 1 && this.options.hv_switch == 0) {
                                this.$container.css("left", "3px")
                            }
                        }
                        this.$element.css({
                            height: wrapper_text_max_height + "px"
                        });
                        return
                    } else {
                        this.$element.css({
                            width: n + "px"
                        });
                        return
                    }
                }
                if (r.new_pos <= 0)
                    return;
                this.container_height = this.ret_values.height;
                if (this.options.hv_switch) {
                    this.$container.css({
                        height: r.new_pos + "px",
                        width: this.ret_values.height + "px"
                    });
                    this.$element.css({
                        height: r.new_pos2 + "px",
                        width: this.options.wrapper_text_max_height + "px"
                    })
                } else {
                    this.$container.css({
                        width: r.new_pos + "px",
                        height: this.ret_values.height + "px"
                    });
                    this.$element.css({
                        width: r.new_pos2 + "px",
                        height: wrapper_text_max_height + "px"
                    });
                    if (this.real_width == 0)
                        this.real_width = r.new_pos2
                }
                this.ret_values.width = r.new_pos
            },
            _return_container_width_height: function() {
                return this.ret_values
            },
            _return_middle_position_of_content: function() {
                var e = this.math._calculate_child_coordinates_by_n(this.mid_elem + 1, 0);
                e.new_pos += Math.floor(this.options.big_pic_width / 2) + this.options.big_border;
                return e.new_pos
            },
            _create_arrows: function() {
                var e;
                if (this.options.hv_switch) {
                    if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                        e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left_vertical2.png" alt="left" /></div>';
                        e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right_vertical2.png" alt="right" /></div>'
                    } else {
                        e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left_vertical.png" alt="left" /></div>';
                        e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right_vertical.png" alt="right" /></div>'
                    }
                } else {
                    if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1) {
                        e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left2.png" alt="left" /></div>';
                        e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right2.png" alt="right" /></div>'
                    } else {
                        e = '<div class="circle_slider_nav_left"><img src="' + this.options.plugin_url + 'images/left.png" alt="left" /></div>';
                        e += '<div class="circle_slider_nav_right"><img src="' + this.options.plugin_url + 'images/right.png" alt="right" /></div>'
                    }
                }
                return e
            },
            _hide_arrows: function(t) {
                if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1)
                    move_more = 4;
                else
                    move_more = 0;
                if (t) {
                    this.hide_text(this.math._convert_position_to_image_array(0, this.mid_elem), 1);
                    this.arrow_hidden_counter = 0;
                    if (this.options.hv_switch) {
                        this.$left_arrow.animate({
                            top: this.options.arrow_width + move_more
                        }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this));
                        this.$right_arrow.animate({
                            top: -this.options.arrow_width
                        }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this))
                    } else {
                        this.$left_arrow.animate({
                            left: this.options.arrow_width + move_more
                        }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this));
                        this.$right_arrow.animate({
                            left: -this.options.arrow_width
                        }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_hidden, this))
                    }
                } else {
                    this.hide_text(this.math._convert_position_to_n(this.mid_elem - 2), 0);
                    if (this.options.hv_switch) {
                        this.$left_arrow.css({
                            top: this.options.arrow_width + move_more
                        });
                        this.$right_arrow.css({
                            top: -this.options.arrow_width
                        })
                    } else {
                        this.$left_arrow.css({
                            left: this.options.arrow_width + move_more
                        });
                        this.$right_arrow.css({
                            left: -this.options.arrow_width
                        })
                    }
                }
            },
            _arrows_hidden: function() {
                if (this.arrow_hidden_counter >= 1) {
                    this.func();
                    this.arrow_hidden_counter = 0
                } else
                    this.arrow_hidden_counter++
            },
            _arrows_shown: function() {
                this.clicked = 0
            },
            _show_arrows: function() {
                this.slider_state = 0;
                var t = 0;
                if (this.options.hv_switch) {
                    if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1)
                        t = 34;
                    this.$left_arrow.animate({
                        top: 0
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this));
                    this.$right_arrow.animate({
                        top: t + "px"
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this))
                } else {
                    if (this.options.border_on_off == 0 || this.options.use_thin_arrows == 1)
                        t = 4;
                    this.$left_arrow.animate({
                        left: 0
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this));
                    this.$right_arrow.animate({
                        left: t + "px"
                    }, this.options.arrow_speed, this.options.arrow_easing, e.proxy(this._arrows_shown, this))
                }
                this.show_text(this.math._convert_position_to_image_array(0, this.mid_elem));
                if (this.last_c.master_click == 1 || this.is_touch_device)
                    this._start_main_hover();
                this.$element.trigger("open", [this.last_middle])
            },
            _align_arrows: function() {
                var e = this.math._calculate_arrows_positions();
                if (this.options.hv_switch) {
                    this.$left_arrow_class.css({
                        top: e.first_arrow_x,
                        left: e.arrow_y
                    });
                    this.$right_arrow_class.css({
                        top: e.second_arrow_x,
                        left: e.arrow_y
                    })
                } else {
                    this.$left_arrow_class.css({
                        left: e.first_arrow_x,
                        top: e.arrow_y
                    });
                    this.$right_arrow_class.css({
                        left: e.second_arrow_x,
                        top: e.arrow_y
                    })
                }
            },
            _set_arrows_events: function() {
                var t = this;
                this.$prettyPhoto_img.on("touchstart", function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    e(this).click()
                });
                this.$prettyPhoto_img.on("touchend", function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                });
                this.$prettyPhoto_img.mouseup(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                });
                this.$prettyPhoto_img.mousedown(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                });
                this.$prettyPhoto_img.click(function(n) {
                    var r = t.$prettyPhoto_a.attr("rel");
                    if (r == "prettyPhoto") {
                        var i = t.$prettyPhoto_a.attr("href");
                        n.preventDefault();
                        n.stopPropagation();
                        if (t.is_auto_play == 1) {
                            t.dismiss_auto_play = 1;
                            t.prettyPhoto_open_status = 1
                        }
                        e.fn.prettyPhoto({
                            callback: function() {
                                t.prettyPhoto_open_status = 0
                            }
                        });
                        e.prettyPhoto.open(i)
                    }
                });
                this.$left_arrow_class.click(e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.public_go_right()
                }, this));
                this.$right_arrow_class.click(e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.public_go_left()
                }, this));
                this.$left_arrow_class.on("touchstart", e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.public_go_right()
                }, this));
                this.$left_arrow_class.on("touchend", e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }, this));
                this.$right_arrow_class.on("touchstart", e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.public_go_left()
                }, this));
                this.$right_arrow_class.on("touchend", e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }, this));
                this.$left_arrow_class.mouseup(e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }, this));
                this.$right_arrow_class.mousedown(e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }, this));
                this.$left_arrow_class.mousedown(e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }, this));
                this.$right_arrow_class.mousedown(e.proxy(function(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }, this))
            },
            hide_text: function(t, n) {
                $text_element = e(this.options.text_object, this.$element);
                this.last_parent_height = this.$parent_wrapper.height();
                if (this.options.small_resolution_max_height == 0 && this.options.hv_switch && this.under_600)
                    this.$parent_wrapper.css("height", this.last_parent_height + "px");
                if (n)
                    $text_element.fadeOut();
                else
                    $text_element.hide()
            },
            show_text: function(t, n, r) {
                if (typeof n == "undefined")
                    n = 0;
                if (typeof r == "undefined")
                    r = 0;
                this.last_middle = t;
                if (this.options.keep_on_top_middle_circle) {
                    var i = this.math._convert_position_to_n(this.mid_elem);
                    this.items[i].$element.css("z-index", this.max_show)
                }
                if (this.options.hide_content == 1) {
                    if (typeof this.started == "undefined") {
                        this.started = 1;
                        this.hashchange()
                    }
                    return
                }
                var s = e(this.options.text_field_id_prefix + t, this.$element);
                var o = e("div.circle_slider_text_wrapper_v2", s);
                if (o.length)
                    this.options.vert_text_mode = 1;
                else
                    this.options.vert_text_mode = 0;
                if (typeof this.options.map[t].link_url != "undefined") {
                    this.$prettyPhoto_a.attr("href", this.options.map[t].link_url)
                } else {
                    this.$prettyPhoto_a.attr("href", "")
                }
                if (typeof this.options.map[t].link_rel != "undefined") {
                    this.$prettyPhoto_a.attr("rel", this.options.map[t].link_rel)
                } else {
                    this.$prettyPhoto_a.attr("rel", "")
                }
                if (typeof this.options.map[t].link_target != "undefined") {
                    if (this.options.map[t].link_target == "")
                        this.options.map[t].link_target = "_self";
                    this.$prettyPhoto_a.attr("target", this.options.map[t].link_target)
                } else {
                    this.$prettyPhoto_a.attr("target", "_self")
                }
                var u = e("." + this.options.left_text_class, s);
                if (this.options.small_resolution_max_height == 0)
                    this.$parent_wrapper.css("height", "");
                if (n == 0)
                    s.fadeIn();
                if (this.options.hv_switch == 0) {
                    if (this.minus > 0)
                        this._set_parent_window_size(1);
                    else {
                        if (this.options.automatic_height_resize) {
                            this.ret_values = {
                                height: 0,
                                width: 0
                            };
                            this.ret_values.height = 2 * this.options.top_offset + this.options.shadow_offset;
                            var a;
                            if (this.options.hide_content == 0)
                                a = s.height();
                            else
                                a = 0;
                            var f = this.$parent_wrapper.height();
                            var l = this.ret_values.height + a + 10;
                            if (l != this.last_height) {
                                if (l < this.options.wrapper_text_max_height)
                                    l = this.options.wrapper_text_max_height;
                                this.last_height = l;
                                this.$element.animate({
                                    height: l + "px"
                                }, 300, "linear")
                            }
                        }
                    }
                }
                if (this.options.hv_switch) {
                    if (this.options.vert_text_mode) {
                        var c = s.width();
                        if (c >= this.max_size || r) {
                            u.css({
                                width: this.max_size * 2 + "px"
                            })
                        }
                        var h = u.height();
                        if (this.under_600 == 0)
                            s.css({
                                top: this.mid - h - this.options.left_text_class_padding + "px"
                            })
                    } else {
                        $block = e("div.content_slider_text_block_wrap", s);
                        if ($block.length) {
                            var p;
                            if (this.under_600 == 0) {
                                var d = this.get_window_width();
                                if (d > this.options.wrapper_text_max_height)
                                    p = this.options.wrapper_text_max_height - this.container_height - 2;
                                else
                                    p = d - this.container_height - 20
                            } else
                                p = this.options.big_pic_width;
                            s.css({
                                width: p + "px"
                            })
                        } else
                            s.css({
                                width: ""
                            });
                        var h = s.height();
                        var v = this.mid - Math.floor(h / 2);
                        if (v < 0)
                            v = 0;
                        if (this.under_600 == 0)
                            s.css({
                                top: v + "px"
                            })
                    }
                } else {
                    if (this.minus > 0) {
                        var d = this.last_resolution;
                        $block = e("div.content_slider_text_block_wrap", s);
                        if ($block.length) {
                            if (typeof this.last_text_width == "undefined")
                                this.last_text_width = s.width();
                            s.css("width", d - 10 + "px")
                        }
                    }
                }
                if (typeof this.started == "undefined") {
                    this.started = 1;
                    this.hashchange()
                }
            },
            _preset_all_children_parameters: function(t, n) {
                var r;
                var i;
                this.do_animate = t;
                var s;
                var o = new Array;
                for (s = 0; s < this.max_show; s++) {
                    r = this.math._calculate_child_coordinates_by_n(s, this.operation);
                    if (t)
                        i = this.math._calculate_method_for_child_by_n(s, n);
                    else
                        i = 0;
                    if (this.options.keep_on_top_middle_circle || this.options.dinamically_set_position_class)
                        o[s] = {
                            i: s,
                            pos: r.new_pos
                        };
                    this.items[s]._set_pos_size(r.new_pos, this.speed, r.new_y_pos, r.new_siz.width, r.new_siz.height, r.new_border, i, e.proxy(this._animation_done, this))
                }
                if (this.options.keep_on_top_middle_circle || this.options.dinamically_set_position_class) {
                    o.sort(function(e, t) {
                        return e.pos - t.pos
                    });
                    var u = o.length;
                    var a, f = this.mid_elem + 1, l;
                    for (s = 0; s < u; s++) {
                        a = o[s].i;
                        if (this.options.dinamically_set_position_class) {
                            this.items[a].$element.removeClass("all_around_position_" + this.items[a].position_in_slider);
                            this.items[a].$element.addClass("all_around_position_" + s)
                        }
                        this.items[a].position_in_slider = s;
                        if (this.options.keep_on_top_middle_circle) {
                            if (s < f)
                                l = s;
                            if (s == f)
                                l = u;
                            if (s > f)
                                l = u - s - 1;
                            this.items[a].$element.css("z-index", l)
                        }
                    }
                }
            },
            _stop_children: function() {
                for (i = 0; i < this.number_of_items; i++) {
                    this.items[i].reset_positions()
                }
                if (this.prettyPhoto_status) {
                    if (this.prettyPhoto_status == 1) {
                        this.$prettyPhoto_div.stop();
                        this.$prettyPhoto_img.stop()
                    }
                    this._end_main_hover2();
                    this.prettyPhoto_status = 0;
                    this.hover_status = 0;
                    this.mouse_in_animation = 0;
                    this.mouse_out_animation = 0
                }
            },
            _mouse_down: function(e, t) {
                if (this.ignore_click_down) {
                    this.ignore_click_down = 0;
                    return
                }
                if (typeof t == "undefined")
                    t = 0;
                if (t == 0)
                    if (typeof e != "undefined")
                        e.preventDefault();
                this.mouse_moved = 0;
                if (this.hover_status != 0)
                    this._end_main_hover2();
                if (typeof e != "undefined")
                    if (typeof e.pageX != "undefined") {
                        if (this.options.hv_switch)
                            var n = e.pageY - this.offset - this.options.circle_left_offset;
                        else
                            var n = e.pageX - this.offset + this.minus - this.options.circle_left_offset
                    }
                var r = n - this.last_mouse_x;
                this.last_mouse_x = n;
                this.slider_state = 1;
                this.mouse_state = 1;
                if (!this.clicked) {
                    this.show_mouse_move = 1;
                    this.clicked = 1
                }
                var i = this.$container.offset();
                if (this.options.hv_switch) {
                    this.offset = i.top
                } else {
                    this.offset = i.left + this.minus
                }
                this.was_gone = 0
            },
            _mouse_up: function(e) {
                if (this.ignore_click_up) {
                    this.ignore_click_up = 0;
                    return
                }
                this.mouse_state = 0;
                this._stop_children();
                if (this.show_mouse_move) {
                    var t = 1;
                    this.show_mouse_move = 0;
                    var n = 0;
                    if (this.ignore_click_up2) {
                        this.ignore_click_up2 = 0;
                        this.slider_state = 0;
                        this.clicked = 0;
                        n = 1
                    }
                    if (Math.abs(this.math.sum_movement) == 0 && !this.was_gone && n == 0) {
                        this.func = 0;
                        t = 0;
                        if (this.options.hv_switch)
                            var r = this.math._change_master_position_by_x(e.pageY - this.offset - this.options.circle_left_offset);
                        else
                            var r = this.math._change_master_position_by_x(e.pageX - this.offset + this.minus - this.options.circle_left_offset);
                        this.last_c = r;
                        if (r.master_click && n == 0) {
                            var i = 38;
                            var s = 20;
                            if (this.options.border_on_off == 1 && this.options.use_thin_arrows == 0) {
                                i = 48;
                                s = 30
                            }
                            if (r.dist_right > i && r.dist_left > s) {
                                if (this.options.middle_click == 1) {
                                    t = 1;
                                    this.going_counter = -1;
                                    r.pos = 1
                                }
                                if (this.options.middle_click == 2) {
                                    t = 1;
                                    this.going_counter = 1;
                                    r.pos = -1
                                }
                                if (this.options.middle_click == 0 || this.options.middle_click == 3) {
                                    this.slider_state = 0;
                                    this.clicked = 0;
                                    if (this.options.middle_click == 3) {
                                        var o = "";
                                        var u = 0;
                                        if (typeof this.options.map[this.last_middle].main_link != "undefined")
                                            o = this.options.map[this.last_middle].main_link;
                                        if (typeof this.options.map[this.last_middle].main_link_target != "undefined")
                                            u = this.options.map[this.last_middle].main_link_target;
                                        if (o != "") {
                                            if (u == 0)
                                                window.location = o;
                                            if (u == 1)
                                                window.open(o)
                                        }
                                    }
                                }
                            } else {
                                this.slider_state = 0;
                                this.clicked = 0
                            }
                        }
                        this.speed = (this.mid_elem - Math.abs(r.pos) + 1) * this.options.moving_speed + this.options.moving_speed_offset;
                        if (!t)
                            this.going_counter = -r.pos;
                        this.keep_going = 1;
                        if (r.pos < 0) {
                            this.click = 2;
                            if (r.pos < -1)
                                this.operation = 1;
                            else
                                this.operation = 0;
                            this.func = this.go_right;
                            this._hide_arrows(1)
                        }
                        if (r.pos > 0) {
                            this.click = 1;
                            if (r.pos > 1)
                                this.operation = 1;
                            else
                                this.operation = 0;
                            this.func = this.go_left;
                            this._hide_arrows(1)
                        }
                        if (r.pos == 0) {
                            this.keep_going = 0
                        }
                        this._before_moving(this.going_counter);
                        return
                    } else {
                        this._reorder();
                        this.click = 0
                    }
                }
            },
            _before_moving: function(e) {
                if (this.options.keep_on_top_middle_circle) {
                    e = e * -1;
                    var t = this.math._convert_position_to_n(this.mid_elem + e);
                    this.items[t].$element.css("z-index", 100)
                }
            },
            _arrow_mouse_up: function() {
                this.keep_going = 1;
                this.click = 0;
                this.armd = 0
            },
            _arrow_mouse_down: function() {
                this.armd = 1;
                this.clicked = 1
            },
            _arrow_mouse_leave: function() {
                if (this.armd) {
                    this.clicked = 0;
                    this.armd = 0
                }
            },
            _mouse_move: function(t) {
                this.mouse_moved = 1;
                if (typeof t.touched == "undefined")
                    t.preventDefault();
                var n = this.$container.offset();
                if (this.options.hv_switch) {
                    this.offset = n.top
                } else {
                    this.offset = n.left + this.minus
                }
                var r = e(this.$element).offset();
                this.y_offset = r.top;
                var i, s;
                if (typeof t != "undefined")
                    if (typeof t.pageX != "undefined") {
                        if (this.options.hv_switch)
                            i = t.pageY - this.offset - this.options.circle_left_offset;
                        else
                            i = t.pageX - this.offset + this.minus - this.options.circle_left_offset;
                        s = i - this.last_mouse_x
                    }
                if (this.show_mouse_move && this.clicked) {
                    this._move_all(s * this.options.movement_coefficient);
                    if (Math.abs(this.sum_movement) >= 1 && !this.was_gone) {
                        this.was_gone = 1;
                        this._hide_arrows(0)
                    }
                }
                this.last_mouse_x = i;
                if (this.show_mouse_move == 1 || this.slider_state == 1)
                    return;
                var o = {
                    pos: 0,
                    master_click: 0
                };
                if (typeof t != "undefined")
                    if (typeof t.pageX != "undefined") {
                        if (this.options.hv_switch) {
                            i = t.pageY - this.y_offset - this.options.circle_left_offset
                        } else {
                            if (this.minus == 0) {
                                i = t.pageX - this.x_offset - this.options.circle_left_offset
                            } else {
                                i = t.pageX - this.parent_x_offset + this.minus - this.options.circle_left_offset
                            }
                        }
                        o = this.math._convert_x_position_to_n(i)
                    }
                if (o.master_click == 1) {
                    if (this.hover_status == 2 || this.mouse_in_animation == 1)
                        return;
                    if (this.mouse_out_animation == 1) {
                        this.$prettyPhoto_div.stop();
                        this.$prettyPhoto_img.stop();
                        this.mouse_out_animation = 0
                    }
                    this.hover_status = 1;
                    this.mouse_in_animation = 1;
                    this._start_main_hover()
                } else {
                    if (this.hover_status == 2 || this.hover_status == 1 && this.mouse_out_animation == 0)
                        this._fake_mouse_leave()
                }
            },
            _start_main_hover: function() {
                if (this.$prettyPhoto_a.attr("href") == "")
                    return;
                var t = this.prettyPhoto_left - this.options.prettyPhoto_movement - 10;
                var n = this.prettyPhoto_top - this.options.prettyPhoto_movement - 10;
                var r = this.options.prettyPhoto_width + 3;
                this.prettyPhoto_status = 1;
                if (this.options.hv_switch == 0) {
                    this.$prettyPhoto_div.animate({
                        left: t + "px",
                        top: n + "px"
                    }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._ending_main_hover, this))
                } else {
                    this.$prettyPhoto_div.animate({
                        left: n + "px",
                        top: t + "px"
                    }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._ending_main_hover, this))
                }
                this.$prettyPhoto_img.animate({
                    width: r + "px",
                    padding: "11px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing)
            },
            _ending_main_hover: function() {
                var t = this.prettyPhoto_left - this.options.prettyPhoto_movement;
                var n = this.prettyPhoto_top - this.options.prettyPhoto_movement;
                var r = this.options.prettyPhoto_width;
                if (this.options.hv_switch == 0) {
                    this.$prettyPhoto_div.animate({
                        left: t + "px",
                        top: n + "px"
                    }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._end_main_hover, this))
                } else {
                    this.$prettyPhoto_div.animate({
                        left: n + "px",
                        top: t + "px"
                    }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._end_main_hover, this))
                }
                this.$prettyPhoto_img.animate({
                    width: r + "px",
                    padding: "10px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing)
            },
            _end_main_hover: function() {
                this.prettyPhoto_status = 2;
                this.hover_status = 2;
                this.mouse_in_animation = 0
            },
            _fake_mouse_leave: function() {
                if (this.$prettyPhoto_a.attr("href") == "")
                    return;
                if (this.mouse_in_animation == 1) {
                    this.$prettyPhoto_div.stop();
                    this.$prettyPhoto_img.stop();
                    this.mouse_in_animation = 0
                }
                this.hover_status = 1;
                this.mouse_out_animation = 1;
                this._end_main_hover2()
            },
            _end_main_hover2: function() {
                var t = this.prettyPhoto_left;
                var n = this.prettyPhoto_top;
                this.prettyPhoto_status = 1;
                if (this.options.hv_switch == 0) {
                    this.$prettyPhoto_div.animate({
                        left: t + "px",
                        top: n + "px"
                    }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._main_hover_ended, this))
                } else {
                    this.$prettyPhoto_div.animate({
                        left: n + "px",
                        top: t + "px"
                    }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing, e.proxy(this._main_hover_ended, this))
                }
                this.$prettyPhoto_img.animate({
                    width: "0px",
                    padding: "0px"
                }, this.options.prettyPhoto_speed, this.options.prettyPhoto_easing)
            },
            _main_hover_ended: function() {
                this.prettyPhoto_status = 0;
                this.hover_status = 0;
                this.mouse_out_animation = 0
            },
            _mouse_enter_widget: function(e) {
                if (this.is_auto_play == 1) {
                    this.dismiss_auto_play = 1
                }
            },
            _mouse_leave_widget: function(e) {
                if (this.prettyPhoto_open_status == 0)
                    this.dismiss_auto_play = 0
            },
            _mouse_leave: function(e) {
                if (this.show_mouse_move && !this.click) {
                    this.show_mouse_move = 0;
                    this._reorder();
                    this.click = 0;
                    this.show_mouse_move = 0;
                    this.mouse_state = 0;
                    for (i = 0; i < this.number_of_items; i++) {
                        this.items[i].value_reset()
                    }
                }
                if (this.hover_status == 2 || this.hover_status == 1 && this.mouse_out_animation == 0)
                    this._fake_mouse_leave()
            },
            _reorder: function() {
                var e = this.math.sum_movement;
                this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
                if (Math.abs(this.math.sum_movement) < this.options.child_div_width / 2) {
                    this.math._clear_movement();
                    this._preset_all_children_parameters(1, 0, 1)
                } else {
                    this.math._clear_movement();
                    if (e < 0) {
                        this.math._rotate_right(1);
                        this._preset_all_children_parameters(1, 0, 1)
                    }
                    if (e > 0) {
                        this.math._rotate_left(1);
                        this._preset_all_children_parameters(1, 1, 1)
                    }
                }
                this.sum_movement = 0
            },
            _create_a_html_for_a_child: function(e, t, n, r, i, s, o, u, a) {
                var f = "";
                var l = ""
                    , c = "";
                if (a != "")
                    a += " ";
                if (s != "")
                    s += " ";
                var h = 0;
                var p = 0;
                if (this.options.activate_border_div == 0 && this.options.border_on_off == 1) {
                    h = 10;
                    p = 10
                }
                if (this.options.activate_border_div)
                    f = '<div class="' + this.options.border_class + '"></div>';
                if (this.options.hv_switch == 0) {
                    if (this.have_text_label_up) {
                        l = '<div style="left: ' + t + "px; width: " + (this.options.small_pic_width + p) + 'px;" class="all_around_text_up"><span style=\'' + s + "width: " + (this.options.small_pic_width + p) + 'px;\' class="all_around_text_span_up">' + i + "</span></div>"
                    }
                    if (this.have_text_label_down) {
                        c = '<div style="left: ' + t + "px; width: " + (this.options.small_pic_width + p) + 'px;" class="all_around_text_down"><span style=\'' + a + "width: " + (this.options.small_pic_width + p) + 'px;\' class="all_around_text_span_down">' + u + "</span></div>"
                    }
                } else {
                    if (this.have_text_label_up) {
                        l = '<div style="left: 0px; top: ' + t + "px; height: " + (this.options.small_pic_height + h) + 'px;" class="all_around_text_up"><span style=\'' + s + '\' class="all_around_text_span_up">' + i + "</span></div>"
                    }
                    if (this.have_text_label_down) {
                        c = '<div style="left: 0px; top: ' + t + "px; height: " + (this.options.small_pic_height + h) + 'px;" class="all_around_text_down"><span style=\'' + a + '\' class="all_around_text_span_down">' + u + "</span></div>"
                    }
                }
                var d;
                if (this.options.hv_switch == 0) {
                    d = '<div class="' + this.options.picture_class + " all_around_circle_" + n + '" style="left: ' + t + 'px;">' + f + '<img src="' + e + '" class="all_around_img_' + n + '" /></div>' + l + c
                } else {
                    d = '<div class="' + this.options.picture_class + " all_around_circle_" + n + '" style="top: ' + t + 'px;">' + f + '<img src="' + e + '" class="all_around_img_' + n + '" /></div>' + l + c
                }
                return d
            },
            left_clicked: function(e) {
                this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
                if (typeof e != "undefined")
                    e.preventDefault();
                this.func = this.go_left;
                this.click = 1;
                this.going_counter = -1;
                this.$element.trigger("next");
                this._animation_begin()
            },
            right_clicked: function(e) {
                this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
                if (typeof e != "undefined")
                    e.preventDefault();
                this.func = this.go_right;
                this.click = 2;
                this.going_counter = 1;
                this.$element.trigger("prev");
                this._animation_begin()
            },
            left_clicked_n: function(e, t) {
                this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
                if (typeof t != "undefined")
                    t.preventDefault();
                this.func = this.go_left;
                this.click = 1;
                this.going_counter = 0 - e;
                this.$element.trigger("next");
                this._animation_begin()
            },
            right_clicked_n: function(e, t) {
                this.speed = (this.mid_elem + 1) * this.options.moving_speed + this.options.moving_speed_offset;
                if (typeof t != "undefined")
                    t.preventDefault();
                this.func = this.go_right;
                this.click = 2;
                this.going_counter = e;
                this.$element.trigger("prev");
                this._animation_begin()
            },
            go_right: function() {
                if (this.lock == 1)
                    return;
                this.lock = 1;
                this.math.sum_movement = this.sum_movement = 0;
                if (this.keep_going == 1 && this.going_counter > 0)
                    this.going_counter--;
                this.anim_counter = 0;
                this._set_first_left();
                this.math._rotate_left(1);
                this._preset_all_children_parameters(1, 1)
            },
            go_left: function() {
                if (this.lock == 1)
                    return;
                this.lock = 1;
                this.math.sum_movement = this.sum_movement = 0;
                if (this.keep_going == 1 && this.going_counter < 0)
                    this.going_counter++;
                this.anim_counter = 0;
                this._set_first_right();
                this.math._rotate_right(1);
                this._preset_all_children_parameters(1, 0)
            },
            _animation_begin: function() {
                this.show_mouse_move = 0;
                this.anim_counter = 0;
                this.keep_going = 1;
                this.do_animate = 1;
                this._before_moving(this.going_counter);
                this._hide_arrows(1)
            },
            _animation_done: function() {
                var e;
                if (this.do_animate)
                    e = this.max_show + (this.max_show - 3);
                else
                    e = this.max_show + (this.max_show - 2);
                if (this.anim_counter >= e) {
                    this.anim_counter = 0;
                    this.lock = 0;
                    if (this.click == 1) {
                        if (this.keep_going != 0) {
                            if (this.going_counter != 0) {
                                this.operation = 0;
                                if (this.going_counter < -1)
                                    this.operation = 1;
                                this.go_left()
                            } else {
                                this.keep_going = 0;
                                this.click = 0
                            }
                        } else {
                            this.go_left()
                        }
                    }
                    if (this.click == 2) {
                        if (this.keep_going != 0) {
                            if (this.going_counter != 0) {
                                this.operation = 0;
                                if (this.going_counter > 1)
                                    this.operation = 1;
                                this.go_right()
                            } else {
                                this.keep_going = 0;
                                this.click = 0
                            }
                        } else {
                            this.go_right()
                        }
                    }
                    if (this.click == 0) {
                        this._show_arrows();
                        this.operation = 0
                    }
                    return
                }
                this.anim_counter++
            },
            _move_all: function(e) {
                var t = 0;
                this._set_first_left();
                this._set_first_right();
                while (Math.abs(e) >= this.options.child_div_width) {
                    if (e > 0) {
                        this.math._add_movement(this.options.child_div_width);
                        this._set_first_left();
                        e -= this.options.child_div_width
                    } else {
                        this.math._add_movement(-this.options.child_div_width);
                        this._set_first_right();
                        e += this.options.child_div_width
                    }
                }
                this.math._add_movement(e);
                if (e > 0) {
                    this._set_first_left();
                    t = 1
                } else {
                    this._set_first_right();
                    t = 0
                }
                this._preset_all_children_parameters(0, t);
                this.sum_movement = this.math.sum_movement
            },
            _set_first_right: function() {
                var e = this.math._next_right_image();
                this.items[this.math._next_right_n()]._set_img(this.options.map[e].image, e)
            },
            _set_first_left: function() {
                var e = this.math._next_left_image();
                this.items[this.math._next_left_n()]._set_img(this.options.map[e].image, e)
            },
            start_auto_play: function() {
                var e = this;
                this.dismiss_auto_play = 0;
                this.is_auto_play = 1;
                if (this.options.auto_play_direction == 1)
                    this.timeout_autoplay_handler = setInterval(function() {
                        e.public_go_left(1)
                    }, e.options.auto_play_pause_time);
                else
                    this.timeout_autoplay_handler = setInterval(function() {
                        e.public_go_right(1)
                    }, e.options.auto_play_pause_time)
            },
            stop_auto_play: function() {
                this.dismiss_auto_play = 1;
                if (this.is_auto_play == 1) {
                    clearInterval(this.timeout_autoplay_handler)
                }
                this.is_auto_play = 0
            },
            get_auto_play_status: function() {
                return this.is_auto_play
            },
            get_number_of_current_slide: function() {
                return this.last_middle
            }
        };
        r.prototype = {
            _convert_n_to_position: function(e) {
                return this._windowing(this.div_window_lenght, e - this.position_n_offset) + this.beginning_position_number
            },
            _convert_position_to_n: function(e) {
                return this._windowing(this.div_window_lenght, e - this.beginning_position_number + this.position_n_offset)
            },
            _convert_position_to_image_array: function(e, t) {
                return this._windowing(this.image_array_lenght, t - this.beginning_position_number + this.n_img_offset + this.position_n_offset + e * this.div_window_lenght)
            },
            _next_left_image: function() {
                return this._convert_position_to_image_array(0, this.beginning_position_number)
            },
            _next_right_image: function() {
                return this._convert_position_to_image_array(0, this.visible_window_lenght)
            },
            _next_left_n: function() {
                return this._convert_position_to_n(this.beginning_position_number)
            },
            _next_right_n: function() {
                return this._convert_position_to_n(this.visible_window_lenght)
            },
            _rotate_left: function(e) {
                var t = this.position_n_offset;
                this.position_n_offset = this._windowing(this.div_window_lenght, this.position_n_offset - e);
                if (t < this.position_n_offset) {
                    this.n_img_offset = this._windowing(this.image_array_lenght, this.n_img_offset - Math.floor((Math.abs(e) + this.div_window_lenght) / this.div_window_lenght) * this.div_window_lenght)
                }
            },
            _rotate_right: function(e) {
                var t = this.position_n_offset;
                this.position_n_offset = this._windowing(this.div_window_lenght, this.position_n_offset + e);
                if (t > this.position_n_offset) {
                    this.n_img_offset = this._windowing(this.image_array_lenght, this.n_img_offset + Math.floor((Math.abs(e) + this.div_window_lenght) / this.div_window_lenght) * this.div_window_lenght)
                }
            },
            _change_master_position_by_x: function(e) {
                this.sum_movement = 0;
                var t = this.mid_elem * this.element_width;
                var n = t + this.master_element_width + 2 * this.big_border + 2 * this.arrow_width;
                var r;
                if (e <= t) {
                    r = Math.floor(e / this.element_width);
                    r = this.mid_elem - r;
                    return {
                        pos: -r,
                        master_click: 0
                    }
                }
                if (e < n) {
                    return {
                        pos: 0,
                        master_click: 1,
                        dist_left: e - t,
                        dist_right: n - e
                    }
                }
                e = e - n + this.element_width;
                r = Math.floor(e / this.element_width);
                return {
                    pos: r,
                    master_click: 0
                }
            },
            _convert_x_position_to_n: function(e) {
                var t = this.mid_elem * this.element_width;
                var n = t + this.master_element_width + 2 * this.big_border + 2 * this.arrow_width;
                var r;
                if (e <= t) {
                    r = Math.floor(e / this.element_width);
                    r = this.mid_elem - r;
                    return {
                        pos: -r,
                        master_click: 0
                    }
                }
                if (e < n) {
                    return {
                        pos: 0,
                        master_click: 1
                    }
                }
                e = e - n + this.element_width;
                r = Math.floor(e / this.element_width);
                return {
                    pos: r,
                    master_click: 0
                }
            },
            _calculate_child_size_by_ratio: function(e) {
                var t = this.big_pic_width - this.small_pic_width;
                var n = this.big_pic_height - this.small_pic_height;
                var r;
                var i;
                t = t * e;
                t += this.small_pic_width;
                n = n * e;
                n += this.small_pic_height;
                r = Math.floor((this.big_pic_width - this.small_pic_width) / 2) - Math.floor(t / 2);
                i = Math.floor((this.big_pic_height - this.small_pic_height) / 2) - Math.floor(n / 2);
                return {
                    width: t,
                    height: n,
                    margin_left: r,
                    margin_top: i
                }
            },
            _calculate_arrows_positions: function() {
                var e = this.big_border;
                if (this.parent_this.options.activate_border_div)
                    e = 0;
                var t = this.mid_elem * this.element_width + Math.ceil(e) + this.left_offset + this.parent_this.options.circle_left_offset - 1;
                var n = 0;
                if (this.parent_this.options.border_on_off == 0 || this.parent_this.options.use_thin_arrows == 1)
                    n = 15;
                var r = this.top_offset - Math.ceil(this.arrow_height / 2) - n;
                if (this.parent_this.options.activate_border_div) {
                    t += this.big_border;
                    r -= this.big_border
                }
                if (this.parent_this.options.border_on_off == 0 || this.parent_this.options.use_thin_arrows == 1) {
                    t -= e + 7;
                    r -= Math.ceil(e / 2) + 1
                }
                var i = this.mid_elem * this.element_width + this.master_element_width + this.arrow_width + e + this.left_offset + this.parent_this.options.circle_left_offset + 1;
                if (this.parent_this.options.border_on_off == 0 && this.parent_this.options.use_thin_arrows == 0) {
                    i -= Math.ceil(e) + 2
                }
                if (this.parent_this.options.use_thin_arrows == 1) {
                    i -= Math.ceil(e) - 1
                }
                if (this.parent_this.options.border_on_off == 0 || this.parent_this.options.use_thin_arrows == 1) {
                    i += 1
                }
                if (this.parent_this.options.activate_border_div)
                    i -= this.big_border;
                return {
                    first_arrow_x: t,
                    second_arrow_x: i,
                    arrow_y: r
                }
            },
            _calculate_child_coordinates_by_n: function(e, t) {
                var n = this._convert_n_to_position(e);
                if (typeof t == "undefined")
                    t = 0;
                var r = Math.abs(this.sum_movement);
                var i = r / this.element_width;
                var s = 1 - i;
                var o = 0;
                var u = this.top_offset;
                var a;
                var f;
                var l = this.small_border;
                var c = this.element_width;
                var h = this.master_element_width;
                var p = this.master_element_width - this.element_width;
                var d = n * c + this.sum_movement;
                var v = i * p;
                var m = s * p;
                var g = this.element_width - this.small_pic_width;
                var y = this.master_element_width + 2 * this.arrow_width;
                var b = y - this.element_width;
                var w = this.element_width + i * b;
                var E = this.element_width + s * b;
                var S = i * this.arrow_width;
                var x = m + s * (this.arrow_width + g + 2 * this.big_border);
                var T = p + 2 * this.arrow_width;
                var N = s * this.arrow_width;
                var C = i * g;
                if (this.sum_movement <= 0) {
                    if (n < this.mid_elem) {
                        o = d;
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                    if (n == this.mid_elem) {
                        l = this.small_border + (this.big_border - this.small_border) * s;
                        o = d + N;
                        if (!t || this.mode == 2) {
                            a = s;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * s - this.small_border - (this.big_border - this.small_border) * s
                        } else {
                            a = 0;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                        }
                    }
                    if (n == this.mid_elem + 1) {
                        l = this.small_border + (this.big_border - this.small_border) * i;
                        o = d + E - this.element_width + (g + this.small_border) * s + this.arrow_width * i;
                        if (!t || this.mode == 2) {
                            a = i;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * i - this.small_border
                        } else {
                            a = 0;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                        }
                    }
                    if (n > this.mid_elem + 1) {
                        o = d + T + g + this.small_border;
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                } else {
                    if (n < this.mid_elem) {
                        o = d;
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                    if (n == this.mid_elem) {
                        l = this.small_border + (this.big_border - this.small_border) * s;
                        o = d + (2 * this.arrow_width + this.master_element_width + g + this.small_border - this.element_width) - s * (1 * this.arrow_width + this.master_element_width + g + this.big_border - this.small_border - this.element_width);
                        if (!t || this.mode == 2) {
                            a = s;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * s - this.small_border - (this.big_border - this.small_border) * s
                        } else {
                            a = 0;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                        }
                    }
                    if (n == this.mid_elem - 1) {
                        l = this.small_border + (this.big_border - this.small_border) * i;
                        o = d + S;
                        if (!t || this.mode == 2) {
                            a = i;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - (this.master_element_height - this.small_pic_height) / 2 * i - this.small_border
                        } else {
                            a = 0;
                            u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                        }
                    }
                    if (n > this.mid_elem) {
                        o = d + T + g + this.small_border;
                        a = 0;
                        u = this.top_offset - Math.floor(this.small_pic_height / 2) - this.small_border
                    }
                }
                f = this._calculate_child_size_by_ratio(a);
                return {
                    new_pos: o + this.left_offset + this.parent_this.options.circle_left_offset,
                    new_y_pos: u,
                    new_border: l,
                    new_siz: f
                }
            },
            _calculate_method_for_child_by_n: function(e, t) {
                var n = this._convert_n_to_position(e);
                if (n == -1 && t == 1)
                    return 0;
                if (n == this.visible_window_lenght && t == 0)
                    return 0;
                return 1
            },
            _add_movement: function(e) {
                this.sum_movement += e;
                if (Math.abs(this.sum_movement) >= this.element_width) {
                    if (this.sum_movement >= 0) {
                        this._rotate_left(Math.floor(Math.abs(this.sum_movement) / this.element_width));
                        this.sum_movement = this.sum_movement % this.element_width
                    } else {
                        this._rotate_right(Math.floor(Math.abs(this.sum_movement) / this.element_width));
                        this.sum_movement = this.sum_movement % this.element_width
                    }
                }
            },
            _clear_movement: function() {
                this.sum_movement = 0
            },
            _windowing: function(e, t) {
                return (e + t % e) % e
            }
        };
        e.fn.content_slider = function(t, r) {
            var i = e(this)
                , s = i.data("tooltip")
                , o = typeof t == "object" && t;
            s || i.data("tooltip", s = new n(this,o));
            if (typeof r !== "undefined")
                return s[t](r);
            else {
                if (typeof t == "string") {
                    return s[t]()
                }
            }
        }
        ;
        e.fn.content_slider.Constructor = n;
        e.fn.content_slider.defaults = {
            map: false,
            max_shown_items: 3,
            active_item: 0,
            top_offset: 0,
            left_offset: 0,
            child_div_width: 104,
            child_div_height: 104,
            small_pic_width: 84,
            small_pic_height: 84,
            big_pic_width: 231,
            big_pic_height: 231,
            small_border: 5,
            big_border: 8,
            arrow_width: 28,
            arrow_height: 57,
            small_arrow_width: 20,
            small_arrow_height: 20,
            moving_speed: 70,
            moving_speed_offset: 100,
            moving_easing: "linear",
            arrow_speed: 300,
            arrow_easing: "linear",
            mode: 2,
            left_arrow_class: ".circle_slider_nav_left",
            right_arrow_class: ".circle_slider_nav_right",
            container_class: "circle_slider",
            container_class_padding: 24,
            picture_class: "circle_slider_thumb",
            border_class: "circle_item_border",
            child_final_z_index: 100,
            text_field_id_prefix: "#sw",
            text_object: ".circle_slider_text_wrapper",
            hv_switch: 0,
            shadow_offset: 10,
            wrapper_text_max_height: 810,
            left_text_class: "circle_slider_text",
            right_text_class_sufix: "right",
            left_text_class_padding: 20,
            vert_text_mode: 0,
            middle_click: 2,
            border_on_off: 1,
            activate_border_div: 1,
            hover_movement: 6,
            hover_speed: 100,
            hover_easing: "linear",
            prettyPhoto_speed: 200,
            prettyPhoto_easing: "linear",
            prettyPhoto_width: 21,
            prettyPhoto_start: .93,
            prettyPhoto_movement: 45,
            auto_play: 0,
            auto_play_direction: 1,
            auto_play_pause_time: 3e3,
            allow_shadow: 1,
            small_resolution_max_height: 0,
            preload_all_images: 0,
            border_radius: -1,
            border_color: "#282828",
            arrow_color: "#282828",
            automatic_height_resize: 1,
            bind_arrow_keys: 1,
            use_thin_arrows: 0,
            enable_mousewheel: 1,
            radius_proportion: 1,
            plugin_url: "",
            responsive_by_available_space: 0,
            prettyPhoto_color: "#1AB99B",
            prettyPhoto_img: "",
            keep_on_top_middle_circle: 0,
            dinamically_set_class_id: 0,
            dinamically_set_position_class: 0,
            hide_arrows: 0,
            hide_prettyPhoto: 0,
            hide_content: 0,
            content_margin_left: 0,
            circle_left_offset: 0,
            minus_width: 0,
            main_circle_position: 0,
            enable_scroll_with_touchmove_on_horizontal_version: 1,
            enable_scroll_with_touchmove_on_vertical_version: 0,
            movement_coefficient: 1
        }
    }
)(jQuery);

(function(e) {
        if (typeof define === "function" && define.amd) {
            define(["jquery"], e)
        } else if (typeof exports === "object") {
            module.exports = e
        } else {
            e(jQuery)
        }
    }
)(function(e) {
    function o(t) {
        var n = t || window.event, s = [].slice.call(arguments, 1), o = 0, u = 0, a = 0, f = 0, l = 0, c;
        t = e.event.fix(n);
        t.type = "mousewheel";
        if (n.wheelDelta) {
            o = n.wheelDelta
        }
        if (n.detail) {
            o = n.detail * -1
        }
        if (n.deltaY) {
            a = n.deltaY * -1;
            o = a
        }
        if (n.deltaX) {
            u = n.deltaX;
            o = u * -1
        }
        if (n.wheelDeltaY !== undefined) {
            a = n.wheelDeltaY
        }
        if (n.wheelDeltaX !== undefined) {
            u = n.wheelDeltaX * -1
        }
        f = Math.abs(o);
        if (!r || f < r) {
            r = f
        }
        l = Math.max(Math.abs(a), Math.abs(u));
        if (!i || l < i) {
            i = l
        }
        c = o > 0 ? "floor" : "ceil";
        o = Math[c](o / r);
        u = Math[c](u / i);
        a = Math[c](a / i);
        s.unshift(t, o, u, a);
        return (e.event.dispatch || e.event.handle).apply(this, s)
    }
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"];
    var n = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    var r, i;
    if (e.event.fixHooks) {
        for (var s = t.length; s; ) {
            e.event.fixHooks[t[--s]] = e.event.mouseHooks
        }
    }
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var e = n.length; e; ) {
                    this.addEventListener(n[--e], o, false)
                }
            } else {
                this.onmousewheel = o
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var e = n.length; e; ) {
                    this.removeEventListener(n[--e], o, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});

(function(e) {
        function t() {
            var e = location.href;
            hashtag = e.indexOf("#prettyPhoto") !== -1 ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : false;
            return hashtag
        }
        function n() {
            if (typeof theRel == "undefined")
                return;
            location.hash = theRel + "/" + rel_index + "/"
        }
        function r() {
            if (location.href.indexOf("#prettyPhoto") !== -1)
                location.hash = "prettyPhoto"
        }
        function i(e, t) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var n = "[\\?&]" + e + "=([^&#]*)";
            var r = new RegExp(n);
            var i = r.exec(t);
            return i == null ? "" : i[1]
        }
        e.prettyPhoto = {
            version: "3.1.5"
        };
        e.fn.prettyPhoto = function(s) {
            function g() {
                e(".pp_loaderIcon").hide();
                projectedTop = scroll_pos["scrollTop"] + (d / 2 - a["containerHeight"] / 2);
                if (projectedTop < 0)
                    projectedTop = 0;
                $ppt.fadeTo(settings.animation_speed, 1);
                $pp_pic_holder.find(".pp_content").animate({
                    height: a["contentHeight"],
                    width: a["contentWidth"]
                }, settings.animation_speed);
                $pp_pic_holder.animate({
                    top: projectedTop,
                    left: v / 2 - a["containerWidth"] / 2 < 0 ? 0 : v / 2 - a["containerWidth"] / 2,
                    width: a["containerWidth"]
                }, settings.animation_speed, function() {
                    $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(a["height"]).width(a["width"]);
                    $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed);
                    if (isSet && S(pp_images[set_position]) == "image") {
                        $pp_pic_holder.find(".pp_hoverContainer").show()
                    } else {
                        $pp_pic_holder.find(".pp_hoverContainer").hide()
                    }
                    if (settings.allow_expand) {
                        if (a["resized"]) {
                            e("a.pp_expand,a.pp_contract").show()
                        } else {
                            e("a.pp_expand").hide()
                        }
                    }
                    if (settings.autoplay_slideshow && !m && !f)
                        e.prettyPhoto.startSlideshow();
                    settings.changepicturecallback();
                    f = true
                });
                C();
                s.ajaxcallback()
            }
            function y(t) {
                $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden");
                $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                    e(".pp_loaderIcon").show();
                    t()
                })
            }
            function b(t) {
                t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
            }
            function w(e, t) {
                resized = false;
                E(e, t);
                imageWidth = e,
                    imageHeight = t;
                if ((p > v || h > d) && doresize && settings.allow_resize && !u) {
                    resized = true,
                        fitting = false;
                    while (!fitting) {
                        if (p > v) {
                            imageWidth = v - 200;
                            imageHeight = t / e * imageWidth
                        } else if (h > d) {
                            imageHeight = d - 200;
                            imageWidth = e / t * imageHeight
                        } else {
                            fitting = true
                        }
                        h = imageHeight,
                            p = imageWidth
                    }
                    if (p > v || h > d) {
                        w(p, h)
                    }
                    E(imageWidth, imageHeight)
                }
                return {
                    width: Math.floor(imageWidth),
                    height: Math.floor(imageHeight),
                    containerHeight: Math.floor(h),
                    containerWidth: Math.floor(p) + settings.horizontal_padding * 2,
                    contentHeight: Math.floor(l),
                    contentWidth: Math.floor(c),
                    resized: resized
                }
            }
            function E(t, n) {
                t = parseFloat(t);
                n = parseFloat(n);
                $pp_details = $pp_pic_holder.find(".pp_details");
                $pp_details.width(t);
                detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom"));
                $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
                    position: "absolute",
                    top: -1e4
                });
                detailsHeight += $pp_details.height();
                detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight;
                $pp_details.remove();
                $pp_title = $pp_pic_holder.find(".ppt");
                $pp_title.width(t);
                titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom"));
                $pp_title = $pp_title.clone().appendTo(e("body")).css({
                    position: "absolute",
                    top: -1e4
                });
                titleHeight += $pp_title.height();
                $pp_title.remove();
                l = n + detailsHeight;
                c = t;
                h = l + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height();
                p = t
            }
            function S(e) {
                if (e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i)) {
                    return "youtube"
                } else if (e.match(/vimeo\.com/i)) {
                    return "vimeo"
                } else if (e.match(/\b.mov\b/i)) {
                    return "quicktime"
                } else if (e.match(/\b.swf\b/i)) {
                    return "flash"
                } else if (e.match(/\biframe=true\b/i)) {
                    return "iframe"
                } else if (e.match(/\bajax=true\b/i)) {
                    return "ajax"
                } else if (e.match(/\bcustom=true\b/i)) {
                    return "custom"
                } else if (e.substr(0, 1) == "#") {
                    return "inline"
                } else {
                    return "image"
                }
            }
            function x() {
                if (doresize && typeof $pp_pic_holder != "undefined") {
                    scroll_pos = T();
                    contentHeight = $pp_pic_holder.height(),
                        contentwidth = $pp_pic_holder.width();
                    projectedTop = d / 2 + scroll_pos["scrollTop"] - contentHeight / 2;
                    if (projectedTop < 0)
                        projectedTop = 0;
                    if (contentHeight > d)
                        return;
                    $pp_pic_holder.css({
                        top: projectedTop,
                        left: v / 2 + scroll_pos["scrollLeft"] - contentwidth / 2
                    })
                }
            }
            function T() {
                if (self.pageYOffset) {
                    return {
                        scrollTop: self.pageYOffset,
                        scrollLeft: self.pageXOffset
                    }
                } else if (document.documentElement && document.documentElement.scrollTop) {
                    return {
                        scrollTop: document.documentElement.scrollTop,
                        scrollLeft: document.documentElement.scrollLeft
                    }
                } else if (document.body) {
                    return {
                        scrollTop: document.body.scrollTop,
                        scrollLeft: document.body.scrollLeft
                    }
                }
            }
            function N() {
                d = e(window).height(),
                    v = e(window).width();
                if (typeof $pp_overlay != "undefined")
                    $pp_overlay.height(e(document).height()).width(v)
            }
            function C() {
                if (isSet && settings.overlay_gallery && S(pp_images[set_position]) == "image") {
                    itemWidth = 52 + 5;
                    navWidth = settings.theme == "facebook" || settings.theme == "pp_default" ? 50 : 30;
                    itemsPerPage = Math.floor((a["containerWidth"] - 100 - navWidth) / itemWidth);
                    itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length;
                    totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1;
                    if (totalPage == 0) {
                        navWidth = 0;
                        $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()
                    } else {
                        $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show()
                    }
                    galleryWidth = itemsPerPage * itemWidth;
                    fullGalleryWidth = pp_images.length * itemWidth;
                    $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected");
                    goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage;
                    e.prettyPhoto.changeGalleryPage(goToPage);
                    $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")
                } else {
                    $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
                }
            }
            function k(t) {
                if (settings.social_tools)
                    facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
                settings.markup = settings.markup.replace("{pp_social}", "");
                e("body").append(settings.markup);
                $pp_pic_holder = e(".pp_pic_holder"),
                    $ppt = e(".ppt"),
                    $pp_overlay = e("div.pp_overlay");
                if (isSet && settings.overlay_gallery) {
                    currentGalleryPage = 0;
                    toInject = "";
                    for (var n = 0; n < pp_images.length; n++) {
                        if (!pp_images[n].match(/\b(jpg|jpeg|png|gif)\b/gi)) {
                            classname = "default";
                            img_src = ""
                        } else {
                            classname = "";
                            img_src = pp_images[n]
                        }
                        toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>"
                    }
                    toInject = settings.gallery_markup.replace(/{gallery}/g, toInject);
                    $pp_pic_holder.find("#pp_full_res").after(toInject);
                    $pp_gallery = e(".pp_pic_holder .pp_gallery"),
                        $pp_gallery_li = $pp_gallery.find("li");
                    $pp_gallery.find(".pp_arrow_next").click(function() {
                        e.prettyPhoto.changeGalleryPage("next");
                        e.prettyPhoto.stopSlideshow();
                        return false
                    });
                    $pp_gallery.find(".pp_arrow_previous").click(function() {
                        e.prettyPhoto.changeGalleryPage("previous");
                        e.prettyPhoto.stopSlideshow();
                        return false
                    });
                    $pp_pic_holder.find(".pp_content").hover(function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                    }, function() {
                        $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                    });
                    itemWidth = 52 + 5;
                    $pp_gallery_li.each(function(t) {
                        e(this).find("a").click(function() {
                            e.prettyPhoto.changePage(t);
                            e.prettyPhoto.stopSlideshow();
                            return false
                        })
                    })
                }
                if (settings.slideshow) {
                    $pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>');
                    $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                        e.prettyPhoto.startSlideshow();
                        return false
                    })
                }
                $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme);
                $pp_overlay.css({
                    opacity: 0,
                    height: e(document).height(),
                    width: e(window).width()
                }).bind("click", function() {
                    if (!settings.modal)
                        e.prettyPhoto.close()
                });
                e("a.pp_close").bind("click", function() {
                    e.prettyPhoto.close();
                    return false
                });
                if (settings.allow_expand) {
                    e("a.pp_expand").bind("click", function(t) {
                        if (e(this).hasClass("pp_expand")) {
                            e(this).removeClass("pp_expand").addClass("pp_contract");
                            doresize = false
                        } else {
                            e(this).removeClass("pp_contract").addClass("pp_expand");
                            doresize = true
                        }
                        y(function() {
                            e.prettyPhoto.open()
                        });
                        return false
                    })
                }
                $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                    e.prettyPhoto.changePage("previous");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                    e.prettyPhoto.changePage("next");
                    e.prettyPhoto.stopSlideshow();
                    return false
                });
                x()
            }
            s = jQuery.extend({
                hook: "rel",
                animation_speed: "fast",
                ajaxcallback: function() {},
                slideshow: 5e3,
                autoplay_slideshow: false,
                opacity: .8,
                show_title: true,
                allow_resize: true,
                allow_expand: true,
                default_width: 500,
                default_height: 344,
                counter_separator_label: "/",
                theme: "pp_default",
                horizontal_padding: 20,
                hideflash: false,
                wmode: "opaque",
                autoplay: true,
                modal: false,
                deeplinking: true,
                overlay_gallery: true,
                overlay_gallery_max: 30,
                keyboard_shortcuts: true,
                changepicturecallback: function() {},
                callback: function() {},
                ie6_fallback: true,
                markup: '<div class="pp_pic_holder"> 						<div class="ppt"> </div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: "",
                social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
            }, s);
            var o = this, u = false, a, f, l, c, h, p, d = e(window).height(), v = e(window).width(), m;
            doresize = true,
                scroll_pos = T();
            e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
                x();
                N()
            });
            if (s.keyboard_shortcuts) {
                e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(t) {
                    if (typeof $pp_pic_holder != "undefined") {
                        if ($pp_pic_holder.is(":visible")) {
                            switch (t.keyCode) {
                                case 37:
                                    e.prettyPhoto.changePage("previous");
                                    t.preventDefault();
                                    break;
                                case 39:
                                    e.prettyPhoto.changePage("next");
                                    t.preventDefault();
                                    break;
                                case 27:
                                    if (!settings.modal)
                                        e.prettyPhoto.close();
                                    t.preventDefault();
                                    break
                            }
                        }
                    }
                })
            }
            e.prettyPhoto.initialize = function() {
                settings = s;
                if (settings.theme == "pp_default")
                    settings.horizontal_padding = 16;
                theRel = e(this).attr(settings.hook);
                galleryRegExp = /\[(?:.*)\]/;
                isSet = galleryRegExp.exec(theRel) ? true : false;
                pp_images = isSet ? jQuery.map(o, function(t, n) {
                    if (e(t).attr(settings.hook).indexOf(theRel) != -1)
                        return e(t).attr("href")
                }) : e.makeArray(e(this).attr("href"));
                pp_titles = isSet ? jQuery.map(o, function(t, n) {
                    if (e(t).attr(settings.hook).indexOf(theRel) != -1)
                        return e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : ""
                }) : e.makeArray(e(this).find("img").attr("alt"));
                pp_descriptions = isSet ? jQuery.map(o, function(t, n) {
                    if (e(t).attr(settings.hook).indexOf(theRel) != -1)
                        return e(t).attr("title") ? e(t).attr("title") : ""
                }) : e.makeArray(e(this).attr("title"));
                if (pp_images.length > settings.overlay_gallery_max)
                    settings.overlay_gallery = false;
                set_position = jQuery.inArray(e(this).attr("href"), pp_images);
                rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this));
                k(this);
                if (settings.allow_resize)
                    e(window).bind("scroll.prettyphoto", function() {
                        x()
                    });
                e.prettyPhoto.open();
                return false
            }
            ;
            e.prettyPhoto.open = function(t) {
                if (typeof settings == "undefined") {
                    settings = s;
                    pp_images = e.makeArray(arguments[0]);
                    pp_titles = arguments[1] ? e.makeArray(arguments[1]) : e.makeArray("");
                    pp_descriptions = arguments[2] ? e.makeArray(arguments[2]) : e.makeArray("");
                    isSet = pp_images.length > 1 ? true : false;
                    set_position = arguments[3] ? arguments[3] : 0;
                    k(t.target)
                }
                if (settings.hideflash)
                    e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden");
                b(e(pp_images).size());
                e(".pp_loaderIcon").show();
                if (settings.deeplinking)
                    n();
                if (settings.social_tools) {
                    facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href));
                    $pp_pic_holder.find(".pp_social").html(facebook_like_link)
                }
                if ($ppt.is(":hidden"))
                    $ppt.css("opacity", 0).show();
                $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity);
                $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size());
                if (typeof pp_descriptions[set_position] != "undefined" && pp_descriptions[set_position] != "") {
                    $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position]))
                } else {
                    $pp_pic_holder.find(".pp_description").hide()
                }
                movie_width = parseFloat(i("width", pp_images[set_position])) ? i("width", pp_images[set_position]) : settings.default_width.toString();
                movie_height = parseFloat(i("height", pp_images[set_position])) ? i("height", pp_images[set_position]) : settings.default_height.toString();
                u = false;
                if (movie_height.indexOf("%") != -1) {
                    movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150);
                    u = true
                }
                if (movie_width.indexOf("%") != -1) {
                    movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150);
                    u = true
                }
                $pp_pic_holder.fadeIn(function() {
                    settings.show_title && pp_titles[set_position] != "" && typeof pp_titles[set_position] != "undefined" ? $ppt.html(unescape(pp_titles[set_position])) : $ppt.html(" ");
                    imgPreloader = "";
                    skipInjection = false;
                    switch (S(pp_images[set_position])) {
                        case "image":
                            imgPreloader = new Image;
                            nextImage = new Image;
                            if (isSet && set_position < e(pp_images).size() - 1)
                                nextImage.src = pp_images[set_position + 1];
                            prevImage = new Image;
                            if (isSet && pp_images[set_position - 1])
                                prevImage.src = pp_images[set_position - 1];
                            $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]);
                            imgPreloader.onload = function() {
                                a = w(imgPreloader.width, imgPreloader.height);
                                g()
                            }
                            ;
                            imgPreloader.onerror = function() {
                                alert("Image cannot be loaded. Make sure the path is correct and image exist.");
                                e.prettyPhoto.close()
                            }
                            ;
                            imgPreloader.src = pp_images[set_position];
                            break;
                        case "youtube":
                            a = w(movie_width, movie_height);
                            movie_id = i("v", pp_images[set_position]);
                            if (movie_id == "") {
                                movie_id = pp_images[set_position].split("youtu.be/");
                                movie_id = movie_id[1];
                                if (movie_id.indexOf("?") > 0)
                                    movie_id = movie_id.substr(0, movie_id.indexOf("?"));
                                if (movie_id.indexOf("&") > 0)
                                    movie_id = movie_id.substr(0, movie_id.indexOf("&"))
                            }
                            movie = "http://www.youtube.com/embed/" + movie_id;
                            i("rel", pp_images[set_position]) ? movie += "?rel=" + i("rel", pp_images[set_position]) : movie += "?rel=1";
                            if (settings.autoplay)
                                movie += "&autoplay=1";
                            toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                            break;
                        case "vimeo":
                            a = w(movie_width, movie_height);
                            movie_id = pp_images[set_position];
                            var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/;
                            var n = movie_id.match(t);
                            movie = "http://player.vimeo.com/video/" + n[3] + "?title=0&byline=0&portrait=0";
                            if (settings.autoplay)
                                movie += "&autoplay=1;";
                            vimeo_width = a["width"] + "/embed/?moog_width=" + a["width"];
                            toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, a["height"]).replace(/{path}/g, movie);
                            break;
                        case "quicktime":
                            a = w(movie_width, movie_height);
                            a["height"] += 15;
                            a["contentHeight"] += 15;
                            a["containerHeight"] += 15;
                            toInject = settings.quicktime_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                            break;
                        case "flash":
                            a = w(movie_width, movie_height);
                            flash_vars = pp_images[set_position];
                            flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length);
                            filename = pp_images[set_position];
                            filename = filename.substring(0, filename.indexOf("?"));
                            toInject = settings.flash_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                            break;
                        case "iframe":
                            a = w(movie_width, movie_height);
                            frame_url = pp_images[set_position];
                            frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1);
                            toInject = settings.iframe_markup.replace(/{width}/g, a["width"]).replace(/{height}/g, a["height"]).replace(/{path}/g, frame_url);
                            break;
                        case "ajax":
                            doresize = false;
                            a = w(movie_width, movie_height);
                            doresize = true;
                            skipInjection = true;
                            e.get(pp_images[set_position], function(e) {
                                toInject = settings.inline_markup.replace(/{content}/g, e);
                                $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                                g()
                            });
                            break;
                        case "custom":
                            a = w(movie_width, movie_height);
                            toInject = settings.custom_markup;
                            break;
                        case "inline":
                            myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({
                                width: settings.default_width
                            }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show();
                            doresize = false;
                            a = w(e(myClone).width(), e(myClone).height());
                            doresize = true;
                            e(myClone).remove();
                            toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html());
                            break
                    }
                    if (!imgPreloader && !skipInjection) {
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject;
                        g()
                    }
                });
                return false
            }
            ;
            e.prettyPhoto.changePage = function(t) {
                currentGalleryPage = 0;
                if (t == "previous") {
                    set_position--;
                    if (set_position < 0)
                        set_position = e(pp_images).size() - 1
                } else if (t == "next") {
                    set_position++;
                    if (set_position > e(pp_images).size() - 1)
                        set_position = 0
                } else {
                    set_position = t
                }
                rel_index = set_position;
                if (!doresize)
                    doresize = true;
                if (settings.allow_expand) {
                    e(".pp_contract").removeClass("pp_contract").addClass("pp_expand")
                }
                y(function() {
                    e.prettyPhoto.open()
                })
            }
            ;
            e.prettyPhoto.changeGalleryPage = function(e) {
                if (e == "next") {
                    currentGalleryPage++;
                    if (currentGalleryPage > totalPage)
                        currentGalleryPage = 0
                } else if (e == "previous") {
                    currentGalleryPage--;
                    if (currentGalleryPage < 0)
                        currentGalleryPage = totalPage
                } else {
                    currentGalleryPage = e
                }
                slide_speed = e == "next" || e == "previous" ? settings.animation_speed : 0;
                slide_to = currentGalleryPage * itemsPerPage * itemWidth;
                $pp_gallery.find("ul").animate({
                    left: -slide_to
                }, slide_speed)
            }
            ;
            e.prettyPhoto.startSlideshow = function() {
                if (typeof m == "undefined") {
                    $pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                        e.prettyPhoto.stopSlideshow();
                        return false
                    });
                    m = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)
                } else {
                    e.prettyPhoto.changePage("next")
                }
            }
            ;
            e.prettyPhoto.stopSlideshow = function() {
                $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                    e.prettyPhoto.startSlideshow();
                    return false
                });
                clearInterval(m);
                m = undefined
            }
            ;
            e.prettyPhoto.close = function() {
                if ($pp_overlay.is(":animated"))
                    return;
                e.prettyPhoto.stopSlideshow();
                $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden");
                e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                    e(this).remove()
                });
                $pp_overlay.fadeOut(settings.animation_speed, function() {
                    if (settings.hideflash)
                        e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible");
                    e(this).remove();
                    e(window).unbind("scroll.prettyphoto");
                    r();
                    settings.callback();
                    doresize = true;
                    f = false;
                    delete settings
                })
            }
            ;
            if (!pp_alreadyInitialized && t()) {
                pp_alreadyInitialized = true;
                hashIndex = t();
                hashRel = hashIndex;
                hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1);
                hashRel = hashRel.substring(0, hashRel.indexOf("/"));
                setTimeout(function() {
                    e("a[" + s.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
                }, 50)
            }
            return this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
        }
        ;
    }
)(jQuery);
var pp_alreadyInitialized = false;

(function(e, t) {
        function h(e, t, n) {
            var r = u[t.type] || {};
            if (e == null) {
                return n || !t.def ? null : t.def
            }
            e = r.floor ? ~~e : parseFloat(e);
            if (isNaN(e)) {
                return t.def
            }
            if (r.mod) {
                return (e + r.mod) % r.mod
            }
            return 0 > e ? 0 : r.max < e ? r.max : e
        }
        function p(t) {
            var n = s()
                , r = n._rgba = [];
            t = t.toLowerCase();
            c(i, function(e, i) {
                var s, u = i.re.exec(t), a = u && i.parse(u), f = i.space || "rgba";
                if (a) {
                    s = n[f](a);
                    n[o[f].cache] = s[o[f].cache];
                    r = n._rgba = s._rgba;
                    return false
                }
            });
            if (r.length) {
                if (r.join() === "0,0,0,0") {
                    e.extend(r, l.transparent)
                }
                return n
            }
            return l[t]
        }
        function d(e, t, n) {
            n = (n + 1) % 1;
            if (n * 6 < 1) {
                return e + (t - e) * n * 6
            }
            if (n * 2 < 1) {
                return t
            }
            if (n * 3 < 2) {
                return e + (t - e) * (2 / 3 - n) * 6
            }
            return e
        }
        var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, i = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], s = e.Color = function(t, n, r, i) {
            return new e.Color.fn.parse(t,n,r,i)
        }
            , o = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            "byte": {
                floor: true,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: true
            }
        }, a = s.support = {}, f = e("<p>")[0], l, c = e.each;
        f.style.cssText = "background-color:rgba(1,1,1,.5)";
        a.rgba = f.style.backgroundColor.indexOf("rgba") > -1;
        c(o, function(e, t) {
            t.cache = "_" + e;
            t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });
        s.fn = e.extend(s.prototype, {
            parse: function(n, r, i, u) {
                if (n === t) {
                    this._rgba = [null, null, null, null];
                    return this
                }
                if (n.jquery || n.nodeType) {
                    n = e(n).css(r);
                    r = t
                }
                var a = this
                    , f = e.type(n)
                    , d = this._rgba = [];
                if (r !== t) {
                    n = [n, r, i, u];
                    f = "array"
                }
                if (f === "string") {
                    return this.parse(p(n) || l._default)
                }
                if (f === "array") {
                    c(o.rgba.props, function(e, t) {
                        d[t.idx] = h(n[t.idx], t)
                    });
                    return this
                }
                if (f === "object") {
                    if (n instanceof s) {
                        c(o, function(e, t) {
                            if (n[t.cache]) {
                                a[t.cache] = n[t.cache].slice()
                            }
                        })
                    } else {
                        c(o, function(t, r) {
                            var i = r.cache;
                            c(r.props, function(e, t) {
                                if (!a[i] && r.to) {
                                    if (e === "alpha" || n[e] == null) {
                                        return
                                    }
                                    a[i] = r.to(a._rgba)
                                }
                                a[i][t.idx] = h(n[e], t, true)
                            });
                            if (a[i] && e.inArray(null, a[i].slice(0, 3)) < 0) {
                                a[i][3] = 1;
                                if (r.from) {
                                    a._rgba = r.from(a[i])
                                }
                            }
                        })
                    }
                    return this
                }
            },
            is: function(e) {
                var t = s(e)
                    , n = true
                    , r = this;
                c(o, function(e, i) {
                    var s, o = t[i.cache];
                    if (o) {
                        s = r[i.cache] || i.to && i.to(r._rgba) || [];
                        c(i.props, function(e, t) {
                            if (o[t.idx] != null) {
                                n = o[t.idx] === s[t.idx];
                                return n
                            }
                        })
                    }
                    return n
                });
                return n
            },
            _space: function() {
                var e = []
                    , t = this;
                c(o, function(n, r) {
                    if (t[r.cache]) {
                        e.push(n)
                    }
                });
                return e.pop()
            },
            transition: function(e, t) {
                var n = s(e)
                    , r = n._space()
                    , i = o[r]
                    , a = this.alpha() === 0 ? s("transparent") : this
                    , f = a[i.cache] || i.to(a._rgba)
                    , l = f.slice();
                n = n[i.cache];
                c(i.props, function(e, r) {
                    var i = r.idx
                        , s = f[i]
                        , o = n[i]
                        , a = u[r.type] || {};
                    if (o === null) {
                        return
                    }
                    if (s === null) {
                        l[i] = o
                    } else {
                        if (a.mod) {
                            if (o - s > a.mod / 2) {
                                s += a.mod
                            } else if (s - o > a.mod / 2) {
                                s -= a.mod
                            }
                        }
                        l[i] = h((o - s) * t + s, r)
                    }
                });
                return this[r](l)
            },
            blend: function(t) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var n = this._rgba.slice()
                    , r = n.pop()
                    , i = s(t)._rgba;
                return s(e.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba("
                    , n = e.map(this._rgba, function(e, t) {
                    return e == null ? t > 2 ? 1 : 0 : e
                });
                if (n[3] === 1) {
                    n.pop();
                    t = "rgb("
                }
                return t + n.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla("
                    , n = e.map(this.hsla(), function(e, t) {
                    if (e == null) {
                        e = t > 2 ? 1 : 0
                    }
                    if (t && t < 3) {
                        e = Math.round(e * 100) + "%"
                    }
                    return e
                });
                if (n[3] === 1) {
                    n.pop();
                    t = "hsl("
                }
                return t + n.join() + ")"
            },
            toHexString: function(t) {
                var n = this._rgba.slice()
                    , r = n.pop();
                if (t) {
                    n.push(~~(r * 255))
                }
                return "#" + e.map(n, function(e) {
                    e = (e || 0).toString(16);
                    return e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        });
        s.fn.parse.prototype = s.fn;
        o.hsla.to = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null) {
                return [null, null, null, e[3]]
            }
            var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
            if (o === s) {
                l = 0
            } else if (t === s) {
                l = 60 * (n - r) / u + 360
            } else if (n === s) {
                l = 60 * (r - t) / u + 120
            } else {
                l = 60 * (t - n) / u + 240
            }
            if (u === 0) {
                c = 0
            } else if (f <= .5) {
                c = u / a
            } else {
                c = u / (2 - a)
            }
            return [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }
        ;
        o.hsla.from = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null) {
                return [null, null, null, e[3]]
            }
            var t = e[0] / 360
                , n = e[1]
                , r = e[2]
                , i = e[3]
                , s = r <= .5 ? r * (1 + n) : r + n - r * n
                , o = 2 * r - s;
            return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
        }
        ;
        c(o, function(n, i) {
            var o = i.props
                , u = i.cache
                , a = i.to
                , f = i.from;
            s.fn[n] = function(n) {
                if (a && !this[u]) {
                    this[u] = a(this._rgba)
                }
                if (n === t) {
                    return this[u].slice()
                }
                var r, i = e.type(n), l = i === "array" || i === "object" ? n : arguments, p = this[u].slice();
                c(o, function(e, t) {
                    var n = l[i === "object" ? e : t.idx];
                    if (n == null) {
                        n = p[t.idx]
                    }
                    p[t.idx] = h(n, t)
                });
                if (f) {
                    r = s(f(p));
                    r[u] = p;
                    return r
                } else {
                    return s(p)
                }
            }
            ;
            c(o, function(t, i) {
                if (s.fn[t]) {
                    return
                }
                s.fn[t] = function(s) {
                    var o = e.type(s), u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n, a = this[u](), f = a[i.idx], l;
                    if (o === "undefined") {
                        return f
                    }
                    if (o === "function") {
                        s = s.call(this, f);
                        o = e.type(s)
                    }
                    if (s == null && i.empty) {
                        return this
                    }
                    if (o === "string") {
                        l = r.exec(s);
                        if (l) {
                            s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1)
                        }
                    }
                    a[i.idx] = s;
                    return this[u](a)
                }
            })
        });
        s.hook = function(t) {
            var n = t.split(" ");
            c(n, function(t, n) {
                e.cssHooks[n] = {
                    set: function(t, r) {
                        var i, o, u = "";
                        if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
                            r = s(i || r);
                            if (!a.rgba && r._rgba[3] !== 1) {
                                o = n === "backgroundColor" ? t.parentNode : t;
                                while ((u === "" || u === "transparent") && o && o.style) {
                                    try {
                                        u = e.css(o, "backgroundColor");
                                        o = o.parentNode
                                    } catch (f) {}
                                }
                                r = r.blend(u && u !== "transparent" ? u : "_default")
                            }
                            r = r.toRgbaString()
                        }
                        try {
                            t.style[n] = r
                        } catch (f) {}
                    }
                };
                e.fx.step[n] = function(t) {
                    if (!t.colorInit) {
                        t.start = s(t.elem, n);
                        t.end = s(t.end);
                        t.colorInit = true
                    }
                    e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }
        ;
        s.hook(n);
        e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                c(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                });
                return t
            }
        };
        l = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }
)(jQuery);
