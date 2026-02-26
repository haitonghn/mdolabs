var _prefix = 'mdo-';
var _classPrefix = '.' + _prefix;

var shortcutKeys = {};

var _defaultSidesheetSize = '95%';
var _mobileView = false;

var dragCounter = 0;
var oldBot = 0;
var gridster = [];
var echartInst = [];
var gridstack;

var chartColors = ["#EB3B5B", "#FB8230", "#F8B732", "#20BF6C", "#10B9B2", "#2D99DB", "#3966D6", "#8854D1", "#A6B1C2", "#4A6583"];

var ID = function() {
    return '_' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

var waitForFinalEvent = (function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

var togglers = document.querySelectorAll('.toggle-switch');

togglers.forEach(toggler => {
  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active');
  });
});

function initGridster() {
    gridster[0] = $("#gridster1 > ul").gridster({
        namespace: '#gridster1',
        widget_base_dimensions: ['auto', 62],
        min_cols: 1,
        max_cols: 4,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[1] = $("#gridster2 > ul").gridster({
        namespace: '#gridster2',
        widget_base_dimensions: ['auto', 62],
        min_cols: 1,
        max_cols: 4,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[2] = $("#gridster3 > ul").gridster({
        namespace: '#gridster3',
        widget_base_dimensions: ['auto', 62],
        min_cols: 1,
        max_cols: 3,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[3] = $("#gridster4 > ul").gridster({
        namespace: '#gridster4',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[4] = $("#gridster5 > ul").gridster({
        namespace: '#gridster5',
        widget_base_dimensions: ['auto', 64],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        extra_rows: 50,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[5] = $("#gridster6 > ul").gridster({
        namespace: '#gridster6',
        widget_base_dimensions: ['auto', 72],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        extra_rows: 50,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[6] = $("#gridster7 > ul").gridster({
        namespace: '#gridster7',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[7] = $("#gridster8 > ul").gridster({
        namespace: '#gridster8',
        widget_base_dimensions: ['auto', 72],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[8] = $("#gridster9 > ul").gridster({
        namespace: '#gridster9',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[9] = $("#gridster10 > ul").gridster({
        namespace: '#gridster10',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[10] = $("#gridster11 > ul").gridster({
        namespace: '#gridster11',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[11] = $("#gridster12 > ul").gridster({
        namespace: '#gridster12',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[12] = $("#gridster13 > ul").gridster({
        namespace: '#gridster13',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

    gridster[13] = $("#gridster14 > ul").gridster({
        namespace: '#gridster14',
        widget_base_dimensions: ['auto', 62],
        min_cols: null,
        max_cols: null,
        extra_cols: 12,
        widget_margins: [12, 12],
        resize: {
            enabled: false
        }
    }).data('gridster');

}

$(document).ready(function() {
    $('#mdo-labs-password').keyup(function(e){
        if (e.keyCode == 13) {
            $('#mdo-labs-continue').click();
        }
    });

    $('#mdo-labs-password').focus();

    $(window).resize(function() {
        if ( $(_classPrefix + "accordion").hasClass("ui-accordion") ) {
            $(_classPrefix + "accordion").accordion( "refresh" );
        }
        adjustSideSheets();
    });
});

function resizeEcharts(){
    echartInst.forEach(function (i) {
        i.resize();
    });
}

var doit;
window.onresize = function(){
  clearTimeout(doit);
  doit = setTimeout(resizeEcharts, 100);
};

function setStorageVar(_key, _val) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem(_key, _val);
    } 
}

function getStorageVar(_key) {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem(_key) !== null) {
            return localStorage.getItem(_key);
        }
    } else {
        return "";
    }
}

function initRangeSlider() {
    $(_classPrefix + 'range-slider').each(function() {
        var _id;
        _id = ID();
        $(this).attr('id', _id);

        var slider = document.getElementById(_id);

        noUiSlider.create(slider, {
            start: 50,
            step: 1,
            tooltips: false,
            connect: [true, false],
            range: {
                'min': 0,
                'max': 100
            }
        });
    });

    $(_classPrefix + 'range-slider-connect').each(function() {
        var _id;
        _id = ID();
        $(this).attr('id', _id);

        var slider = document.getElementById(_id);

        noUiSlider.create(slider, {
            start: [20, 80],
            step: 1,
            tooltips: false,
            connect: true,
            range: {
                'min': 0,
                'max': 100
            }
        });
    });
}

function showBreadcrumb(_el, _parent) {
    $(_parent).find(_classPrefix + 'breadcrumb-content').hide();
    $(_el).detach().appendTo(_parent);
    $(_el).show();
}

$(document).on('dragover', _classPrefix + 'file-upload', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)

$(document).on('dragenter', _classPrefix + 'file-upload', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).children(_classPrefix + 'file-cover').show();
        $(this).find("*").css("pointer-events", "none");
        dragCounter++;
    }
)

$(document).on('dragleave', _classPrefix + 'file-upload', function(e) {
        e.preventDefault();
        e.stopPropagation();
        dragCounter--;
        if (dragCounter === 0) { 
            $(this).find("*").css("pointer-events", "auto");
            $(this).children(_classPrefix + 'file-cover').hide();
        }  
    }
)

$(document).on('drop', _classPrefix + 'file-upload', function(e) {
    if(e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length) {
        e.preventDefault();
        e.stopPropagation();
        $(this).find("*").css("pointer-events", "auto");
        $(this).children(_classPrefix + 'file-cover').hide();
        dragCounter=0;

            if ($(this).data('modal-file')) {
                hideTips();
                var _modal = $(this).data('modal-file');
                var _w = $(_modal).data('modal-width');
                var _h = $(_modal).data('modal-height');
                var _t = $(_modal).data('modal-top');
            
                $(_modal).css('width', _w);
                $(_modal).css('height', _h);
            
                if (_t != null) {
                    $(_modal).css('top', _t);
                    $(_modal).css('transform', 'translate(-50%, 0)');
                    $(_modal).css('border-top-left-radius', '0');
                    $(_modal).css('border-top-right-radius', '0');
                }
            
                $(_classPrefix + 'cover').show();
                $(_modal).show();
            } else {
                showFileToast('Adding files (1/4)');
            }
        }
    }
);

$(document).on('change', '#file-input', function(e) {
    if ($(this).data('modal-file')) {
        hideTips();
        var _modal = $(this).data('modal-file');
        var _w = $(_modal).data('modal-width');
        var _h = $(_modal).data('modal-height');
        var _t = $(_modal).data('modal-top');
    
        $(_modal).css('width', _w);
        $(_modal).css('height', _h);
    
        if (_t != null){
            $(_modal).css('top', _t);
            $(_modal).css('transform', 'translate(-50%, 0)');
            $(_modal).css('border-top-left-radius', '0');
            $(_modal).css('border-top-right-radius', '0');
        }
    
        $(_classPrefix + 'cover').show();
        $(_modal).show();
    } else {
        showFileToast('Adding files (1/4)');
    }
});

$(document).on('click', _classPrefix + 'file-upload-select', function(e) {
    if ($(this).data('modal-file')) {
        var _modal = $(this).data('modal-file');
        $('#file-input').data('modal-file', _modal);
    } else {
        $('#file-input').data('modal-file',null);
    }

    $('#file-input').trigger('click');
});

$(document).on('click', "#tour_start", function(e) {
    introJs().setOptions({
        steps: [{
            intro: "Welcome to MDO!<br><br>Learn about main concepts<br>by clicking Next"
        }, {
            element: document.querySelector('#tour_step_01'),
            intro: "Viewing your data and insights is done via pages.<br><br>You can add one by clicking here..."
        }, {
            element: document.querySelector('#tour_step_02'),
            intro: "Or here..."
        }, {
            element: document.querySelector('#tour_step_03'),
            intro: "Any changes your make to your data via pages end up in your Inbox as change requests that you can claim or assign to others"
        }, {
            element: document.querySelector('#tour_step_04'),
            intro: "Change requests can also be initiated from here by selecting a required dataset and flow"
        }]
    }).start();
});

$(document).on('click', "#tour_flow", function(e) {
    introJs().setOptions({
        steps: [{
            intro: "Hi, please click Next to start exploring the Flows section"
        }, {
            element: document.querySelector('#tour_flow_01'),
            intro: "You can manage all your flows in one place by clicking here"
        }, {
            element: document.querySelector('#tour_flow_02'),
            intro: "Use search and filter to find required flows"
        }, {
            element: document.querySelector('#tour_flow_03'),
            intro: "Assign forms and business rules to a flow by clicking here"
        }, {
            element: document.querySelector('#tour_flow_04'),
            intro: "Any additional flow actions can be found here"
        }]
    }).start();
});

$(document).on('click', "#tour_data", function(e) {
    introJs().setOptions({
        steps: [{
            intro: "Hi, please click Next to start exploring the Data section"
        }, {
            element: document.querySelector('#tour_data_01'),
            intro: "You can add a new dataset by clicking here"
        }, {
            element: document.querySelector('#tour_data_02'),
            intro: "All datasets available to you are displayed here. You can reorder datasets using drag and drop."
        }, {
            element: document.querySelector('#tour_data_03'),
            intro: "You can create and manage views here"
        }, {
            element: document.querySelector('#tour_data_04'),
            intro: "When you have at least one form or flow configured for your dataset you can create a new record by clicking here"
        }, {
            element: document.querySelector('#tour_data_05'),
            intro: "You can configure forms, business rules and other dataset related objects here"
        }, {
            element: document.querySelector('#tour_data_06'),
            intro: "You can edit your dataset by clicking here"
        }, {
            element: document.querySelector('#tour_data_07'),
            intro: "You can add a dataset to your workspace on the Home page by clicking here"
        }]
    }).start();
});

$(document).on('click', "#tour_dashboard", function(e) {
    introJs().setOptions({
        steps: [{
            intro: "Hi, please click Next to start exploring the Dashboards section"
        }, {
            element: document.querySelector('#tour_dashboard_01'),
            intro: "You can add a new dashboard by clicking here"
        }, {
            element: document.querySelector('#tour_dashboard_02'),
            intro: "All dashboards available to you are displayed here. You can reorder dashboards using drag and drop."
        }, {
            element: document.querySelector('#tour_dashboard_03'),
            intro: "You can edit your dashboard by clicking here"
        }, {
            element: document.querySelector('#tour_dashboard_04'),
            intro: "You can add a dashboard to your workspace on the Home page by clicking here"
        }]
    }).start();
});

$(document).on('click', _classPrefix + 'edit-dashboard-action', function(e) {
    $(_classPrefix + 'dashboard-edit').addClass(_prefix + "enabled");
    $('.gridster').addClass(_prefix + "enabled");
    window.dispatchEvent(new Event('resize'));
});

$(document).on('click', _classPrefix + 'edit-dashboard-done', function(e) {
    $(_classPrefix + 'dashboard-edit').removeClass(_prefix + "enabled");
    $('.gridster').removeClass(_prefix + "enabled");
    window.dispatchEvent(new Event('resize'));
});

function showFileToast(text) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "200",
        "hideDuration": "100",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    toastr.info('<div class="mdo-card"><div class="mdo-atom"><div class="mdo-text">' + text + '</div></div><div class="mdo-padding-left-medium"><div class="mdo-progress "><span style="width: 60%;background: #fff;"></span></div></div></div>');
}

function updateAutoGrow() {
    $(document)
    .one('focus' + _classPrefix + 'autogrow', 'textarea' + _classPrefix + 'autogrow', function(){
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input' + _classPrefix + 'autogrow', 'textarea' + _classPrefix + 'autogrow', function(){
        var minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 25);
        this.rows = minRows + rows;
    });
}

function adjustSVG() {
    $('img').each(function() {

        var _p = false;
        
        if ($(this).data('svg-adjust-left')) {
            var _l = $(this).data('svg-adjust-left');
            _p = true;
        }

        if ($(this).data('svg-adjust-top')) {
            var _t = $(this).data('svg-adjust-top');
            _p = true;
        }

        if (_p) {
            $(this).css('position', 'relative');
            $(this).css('left', _l);
            $(this).css('top', _t);
        }

    });
}

function updateFacet() {
    $(_classPrefix + 'filter-pill-new').each(function() {
        var _id;

        _id = ID();
        $(this).attr('id', _id);
    });
}

function updateMenu() {
    var _body = $('body').data('page');

    $(_classPrefix + 'system-menu-item').each(function() {
        var _page = $(this).data('page');

        if (_page === _body) {
            $(this).addClass(_prefix + 'menu-selected');
            return;
        }

    });
}

function hideTips() {
    $('*').filter(function() {
        return $(this).data('tooltipsterNs');
    }).tooltipster('hide');
}

$(document).on('mouseenter', '[data-dropdown-2]', function() {
    var _dropdown = $(this).data('dropdown-2');
    $(_dropdown).sweetDropdown('show');
});

$(document).on('click', '[data-modal]', function() {
    hideTips();

    if ($(_classPrefix + 'facet-context').is(":visible")) 
        $(_classPrefix + 'facet-context').hide();

    var _modal = $(this).data('modal');
    var _w = $(_modal).data('modal-width');
    var _h = $(_modal).data('modal-height');
    var _t = $(_modal).data('modal-top');

    $(_modal).css('width', _w);
    $(_modal).css('height', _h);

    if (_t != null) {
        $(_modal).css('top', _t);
        $(_modal).css('transform', 'translate(-50%, 0)');
        $(_modal).css('border-top-left-radius', '0');
        $(_modal).css('border-top-right-radius', '0');
    }

    $(_classPrefix + 'cover').show();
    $(_modal).show();
});

$(document).on('click', '.multi-select-trigger', function() {
    if(this.checked) {
        $(_classPrefix + 'table-multi-select').hide();
    } else {
        $(_classPrefix + 'table-multi-select').show();
    }
});

$(document).on('click', '.dark-mode', function() {
    if(this.checked) {
        $('html').addClass("dark");
        setStorageVar("theme", "dark");
        $(".dark-mode").prop("checked", true);
    } else {
        $('html').removeClass("dark");
        setStorageVar("theme", "");
        $(".dark-mode").prop("checked", false);
    }  
});

$(document).on('click', '.system-nav', function() {
    if(this.checked) {
        setStorageVar("systemnav", "v");
        $("#system-nav-h").hide();
        $("#system-nav-v").show();
        $(".system-nav").prop("checked", true);
    } else {
        setStorageVar("systemnav", "");
        $("#system-nav-h").show();
        $("#system-nav-v").hide();
        $(".system-nav").prop("checked", false);
    }  
    window.dispatchEvent(new Event('resize'));
});

$(document).on('click', '#form-rich-description', function() {
    $('#form-rich-description-toolbar').toggle();
    $(this).toggleClass(_prefix + 'hover');
});

$(document).on('click', '#request-highlight-expand', function() {
    $('#request-highlight').slideToggle();
});

$(document).on('click', '#oneview-remediate', function() {
    $('#dataset-home-tab-diw').click();
});

$(document).on('click', '#oneview-hierarchy', function() {
    $('#dataset-home-tab-tree').click();
});

$(document).on('click', '#dataset-home-tab-oneview', function() {
    $('#dataset-home-search').show();
    $('#dataset-home-tab-oneview-toolbar').css('display', 'flex');
    $('#dataset-home-tab-list-toolbar').css('display', 'none');
    $('#dataset-home-tab-class-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar2').css('display', 'none');
    $('#dataset-home-tab-tree-toolbar').css('display', 'none');
    $('#dataset-home-tab-diw-toolbar').css('display', 'none');
});

$(document).on('click', '#dataset-home-tab-list', function() {
    $('#dataset-home-search').css('display', 'none');
    $('#dataset-home-tab-oneview-toolbar').css('display', 'none');
    $('#dataset-home-tab-class-toolbar').css('display', 'none');
    $('#dataset-home-tab-tree-toolbar').css('display', 'none');
    $('#dataset-home-tab-diw-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar').css('display', 'flex');
    $('#dataset-home-tab-list-toolbar2').css('display', 'inline');
});

$(document).on('click', '#dataset-home-tab-tree', function() {
    $('#dataset-home-search').hide();
    $('#dataset-home-tab-oneview-toolbar').css('display', 'none');
    $('#dataset-home-tab-oneview-toolbar').css('display', 'none');
    $('#dataset-home-tab-class-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar2').css('display', 'none');
    $('#dataset-home-tab-tree-toolbar').css('display', 'flex');
    $('#dataset-home-tab-diw-toolbar').css('display', 'none');
});

$(document).on('click', '#dataset-home-tab-diw', function() {
    $('#dataset-home-search').hide();
    $('#dataset-home-tab-oneview-toolbar').css('display', 'none');
    $('#dataset-home-tab-class-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar2').css('display', 'none');
    $('#dataset-home-tab-tree-toolbar').css('display', 'none');
    $('#dataset-home-tab-diw-toolbar').css('display', 'none');
});

$(document).on('click', '#dataset-home-tab-profile', function() {
    $('#dataset-home-search').hide();
    $('#dataset-home-tab-oneview-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar').css('display', 'none');
    $('#dataset-home-tab-list-toolbar2').css('display', 'none');
    $('#dataset-home-tab-class-toolbar').css('display', 'none');
    $('#dataset-home-tab-tree-toolbar').css('display', 'none');
    $('#dataset-home-tab-diw-toolbar').css('display', 'none');
});

$(document).on('click', '[data-float]', function() {
    hideTips();

    if ($(_classPrefix + 'facet-context').is(":visible")) 
        $(_classPrefix + 'facet-context').hide();

    var _modal = $(this).data('float');
    var _w = $(_modal).data('float-width');
    var _h = $(_modal).data('float-height');

    $(_modal).css('width', _w);
    $(_modal).css('height', _h);

    $(_modal).show();
});

$('#spare_search_box input').keypress(function (e) {
    var key = e.which;
    if(key == 13)  
     {
        $("#spare_empty_state").css('visibility', 'hidden');
        $("#spares_search_results").css('visibility', 'visible');
        
       return false;  
     }
}); 

$('#spare_search_box input').on('input', function() {
    if ( $(this).val()) {
        $(this).parent().addClass(_prefix + 'has-text');
    } else {
        $(this).parent().removeClass(_prefix + 'has-text');
        $("#spares_search_results").css('visibility', 'hidden');
        $("#spare_empty_state").css('visibility', 'visible');
    }
});

$(document).on('click', '#spare_search_box', function(event) {
    if (event.target != this) 
        return;

    var _o = $(this).offset().left - $(window).scrollLeft();
    var _l = Math.round( (event.clientX - _o) );
    var _w = $(this).outerWidth();

    if (_l > (_w - 36) && _l <= _w ) {
        $(this).find('input').val('');
        $(this).removeClass(_prefix + 'has-text');
        $(_classPrefix + 'hide-search').show();
        $("#spares_search_results").css('visibility', 'hidden');
        $("#spare_empty_state").css('visibility', 'visible');
    }
        
});

$('#dataset-home-search input').keypress(function (e) {
    var key = e.which;
    if(key == 13)  
     {
        $("#oneview_empty_state").css('visibility', 'hidden');
        $("#oneview_search_result").css('visibility', 'visible');
        window.dispatchEvent(new Event('resize'));
        
       return false;  
     }
}); 

$('#dataset-home-search input').on('input', function() {
    if ( $(this).val()) {
        $(this).parent().addClass(_prefix + 'has-text');
    } else {
        $(this).parent().removeClass(_prefix + 'has-text');
        $("#oneview_search_result").css('visibility', 'hidden');
        $("#oneview_empty_state").css('visibility', 'visible');
    }
});

$(document).on('click', '#dataset-home-search', function(event) {
    if (event.target != this) 
        return;

    var _o = $(this).offset().left - $(window).scrollLeft();
    var _l = Math.round( (event.clientX - _o) );
    var _w = $(this).outerWidth();

    if (_l > (_w - 36) && _l <= _w ) {
        $(this).find('input').val('');
        $(this).removeClass(_prefix + 'has-text');
        $(_classPrefix + 'hide-search').show();
        $("#oneview_search_result").css('visibility', 'hidden');
        $("#oneview_empty_state").css('visibility', 'visible');
    }  
});

$(document).on('click', '.workspace-section-trigger', function(event) {
    $('#workspace-section-reveal').click();
});

$(document).on('click', '.settings-section-trigger', function(event) {
    $('#settings-section-reveal').click();
});

$(document).on('click', '.kai-start-trigger', function(event) {
    $('#kai-start').click();

    $('#kai-menu-001').hide();
    $('#kai-menu-002').hide();
    $('#kai-menu-003').hide();
});

$(document).on('click', '.kai-simple-trigger', function(event) {
    $('#kai-simple').click();

    $('#kai-menu-001').css('display', 'inline-block');
    $('#kai-menu-002').css('display', 'inline-block');
    $('#kai-menu-003').css('display', 'inline-block');
});

$(document).on('click', '.kai-preview-trigger', function(event) {
    $('#kai-preview').click();
});

$(document).on('click', '[data-panel]', function() {
    var _panel = $(this).data('panel');
    $(_panel).toggleClass(_prefix + 'data-panel');
});

$(document).on('click', _classPrefix + 'modal-close', function() {
    hideTips();
    var _modal = $(this).closest(_classPrefix + 'modal');

    $(_classPrefix + 'cover').hide();
    $(_modal).hide();
});

$(document).on('click', _classPrefix + 'float-close', function() {
    hideTips();
    var _modal = $(this).closest(_classPrefix + 'float');
    $(_modal).hide();
});

$(document).on('click', _classPrefix + 'text-underline-link', function(event) {
    event.stopPropagation();

    var el = '#oneview-preview';
    var vBreakpoint = window.innerHeight/2;
    var hBreakpoint = window.innerWidth/3 * 2;
    var x = $(this).offset().left;
    var y = $(this).offset().top;

    if (x > hBreakpoint) {
        var w = $(this).innerWidth();
        $(el).css('left', x - 420 + w + 'px');
    } else {
        $(el).css('left', x + 'px');
    }

    if (y > vBreakpoint) {
        $(el).css('top', y - 266 + 'px');
    } else {
        $(el).css('top', y + 30 + 'px');
    }

    $(el).show();
});

$(document).click(function() {
    $('#oneview-preview').hide();
});

$('#oneview-preview').click(function(event) {
    event.stopPropagation();
});

$(document).on('click', '#oneview-preview', function(event) {
    event.stopPropagation();
});

$(document).on('click', '#home-navigation', function() {
    if ($('#home-navigation').hasClass(_prefix + 'collapsed')) {
        $('#home-navigation').removeClass(_prefix + 'collapsed');
        $('#home-navigation-panel').css("width", "220px");
        $('#home-navigation-panel-contents').css("visibility", "visible");
        $('#home-navigation-panel-settings').css("width", "220px");
        $('#home-navigation-panel-contents-settings').css("visibility", "visible");
        setStorageVar("homenav", "");
    } else {
        $('#home-navigation').addClass(_prefix + 'collapsed');
        $('#home-navigation-panel').css("width", "0px");
        $('#home-navigation-panel-contents').css("visibility", "hidden");
        $('#home-navigation-panel-settings').css("width", "0px");
        $('#home-navigation-panel-contents-settings').css("visibility", "hidden");
        setStorageVar("homenav", "c");
    }
    window.dispatchEvent(new Event('resize'));
});

$(document).on('click', _classPrefix + 'sidesheet-reset', function() {
    $($(_classPrefix + 'back-arrow' + _classPrefix + 'sidesheet-close:visible').get().reverse()).each(function( index, value ) {
        if ($(this).is(":visible")) {
            $(this).click();
        }
    });
});

function adjustSideSheets() {
    $(_classPrefix + 'sidesheet:visible').each(function( index ) {

        if (_mobileView) {
            $(this).css('width', '100%');
        } else {
            if ($(this).parent().width() !== 'undefined') {
            
                if (typeof $(this).data('size') !== 'undefined') {
                    var _parentWidth = parseInt($(this).parent().width());
                    var _width = parseInt($(this).data('size'));
    
                    if (_width > _parentWidth) {
                        $(this).css('width', _parentWidth + 'px');
                        $(this).removeClass(_prefix + 'accent');
                    } else {
                        $(this).css('width', _width + 'px');
                        $(this).addClass(_prefix + 'accent');
                    }
                }
            }
        }
    });
}

$(document).on('click', '#barcode-action', function() {
    if( $("#barcode-input").val() === "ABCD123456" ) {
        $("#asset-audit-found").click();
    } else {
        $("#asset-audit-not-found").click();
    }
});

$(document).on('click', '[data-sidesheet]', function() {
    hideTips();
    var _cover = ID();
    var _sheet = $(this).data('sidesheet');
    var _parent = $(this).data('sidesheet-parent');
    
    /*var _chat = $(_classPrefix + 'conversation').is(":visible");*/

    $('<div id="' + _cover + '" class="' + _prefix + 'sheet-cover' + '"></div>').appendTo(_parent);
    $(_sheet).detach().appendTo(_parent);
    $(_sheet).data('cover', _cover);
    $(_sheet).addClass(_prefix + 'accent');

    var _size = 0;

    if (_mobileView) {
        $(_sheet).css('width', '100%');
        $(_sheet).css('right', '0');
    } else {
        if (typeof $(_sheet).data('size') !== 'undefined') {
            _size = parseInt($(_sheet).data('size'));
            
            if ($(_parent).width() !== 'undefined') {
                var _parentWidth = parseInt($(_parent).width());
                if (_size > _parentWidth) {
                    _size = _parentWidth;
                    $(_sheet).removeClass(_prefix + 'accent');
                }
            }
            $(_sheet).css('width', _size + 'px');
            $(_sheet).css('right', '-' + _size + 'px');
        } else {
            $(_sheet).css('width', _defaultSidesheetSize);
            $(_sheet).css('right', '-' + _defaultSidesheetSize);
        }
    }

    $(_sheet).show();
    window.dispatchEvent(new Event('resize'));

    $(_sheet).animate(
        {right: '0'}, 
        {duration: 200, 
        complete: function() {
            
        }
    });
});

$(document).on('click', _classPrefix + 'sidesheet-close', function() {
    hideTips();
    
    var _sheet = $(this).closest(_classPrefix + 'sidesheet');
    
    var _cover = $(_sheet).data('cover');
    $('#' + _cover).remove();

    var _size = '';

    if (typeof $(_sheet).data('size') !== 'undefined') {
        _size = $(_sheet).data('size') + 'px';
    } else {
        _size = _defaultSidesheetSize;
    }

    $(_sheet).animate( 
        {right: '-' + _size}, 
        {duration: 200, 
        complete: function() {
            $(_sheet).hide();
        }
    });
});

$(_classPrefix + 'filter-pill-search input').on('input', function() {
    if ( $(this).val()) {
        $(this).parent().addClass(_prefix + 'has-text');
    } else {
        $(this).parent().removeClass(_prefix + 'has-text');
    }
});

$(document).on('keypress', _classPrefix + 'filter-pill-search input', function(e) {
    if (e.which == 13 && $(this).parent().hasClass(_prefix + 'has-text')) {
        $(_classPrefix + 'hide-search').hide();
    }
});

$(document).on('click', _classPrefix + 'filter-pill-search', function(event) {
    if (event.target != this) 
        return;

    var _o = $(this).offset().left - $(window).scrollLeft();
    var _l = Math.round( (event.clientX - _o) );
    var _w = $(this).outerWidth();

    if (_l > (_w - 36) && _l <= _w ) {
        $(this).find('input').val('');
        $(this).removeClass(_prefix + 'has-text');
        $(_classPrefix + 'hide-search').show();
    }
        
});

$(document).on('click', _classPrefix + 'item-pick', function(e) {
    $(_classPrefix + 'loader-button').addClass(_prefix + 'loader-active');
    setTimeout(function() {
        $(_classPrefix + 'loader-button').removeClass(_prefix + 'loader-active');
    }, 1000);
});

$(window).click(function() {
    $(_classPrefix + 'facet-context').hide();
});

$(document).on('click', _classPrefix + 'facet-context', function(e) {
    e.stopPropagation();
});

$(document).on('mouseup',  '#chatbot', function(e) {
    if (oldBot == 1) 
        return;

    prepareBot();

    oldBot = 1;
});

$(document).on('mouseenter', _classPrefix + 'chat-entry', function(e) {
    $(_classPrefix + 'chat-toolbar').detach().appendTo(this);
    $(_classPrefix + 'chat-toolbar').show();
});

$(document).on('mouseleave', _classPrefix + 'chat-entry', function(e) {
    $(_classPrefix + 'chat-toolbar').hide();
});

$(document).on('mouseenter', _classPrefix + 'chat-channel-panel', function(e) {
    $(this).removeClass(_prefix + 'collapsed');
});

$(document).on('mouseleave', _classPrefix + 'chat-channel-panel', function(e) {
    $(this).addClass(_prefix + 'collapsed');
});

function initGridstack() {
    var config = [];
    
    gridstack = GridStack.init({
        margin: 6,
        cellHeight: 48,
        disableOneColumnMode: true,
        acceptWidgets: true
    }, '#gridstack').load(config);
}

var chat_position = {};
var chat_expanding = false;

$(document).on('click', _classPrefix + 'chat-panel ' + _classPrefix + 'clickable', function(e) {
    chat_position = {};
    chat_expanding = false;

    var _el = $(this).closest(_classPrefix + 'chat-panel');

    if (!$(_el).hasClass(_prefix + "context-box-alt")) {
        $(_el).removeClass(_prefix + "expanded");
    }
});

$(document).on('click', _classPrefix + 'conversation-show', function(e) {
    $(_classPrefix + 'conversation').addClass(_prefix + 'no-mobile');
    $(_classPrefix + 'chat-panel ' + _classPrefix + 'tab:first-child').addClass(_prefix + 'selected');

    window.dispatchEvent(new Event('resize'));
    adjustSideSheets();
});

$(document).on('click', _classPrefix + 'rop-risk li', function(e) {
    var _i = $(this).index();

    if (_i > 2)
        $(_classPrefix + 'rop-risk-section').hide();
    else
        $(_classPrefix + 'rop-risk-section').show();

    window.dispatchEvent(new Event('resize'));
    adjustSideSheets();
});

$(document).on('click', _classPrefix + 'conversation-close', function(e) {
    $(_classPrefix + 'conversation').removeClass(_prefix + 'no-mobile');
    $(_classPrefix + 'chat-panel ' + _classPrefix + 'tab').removeClass(_prefix + 'selected');
    $(_classPrefix + 'offcanvas ').removeClass(_prefix + 'context-box-alt');
    $(_classPrefix + 'offcanvas ').addClass(_prefix + 'context-box-chat');
    chat_position = {};
    chat_expanding = false;
    window.dispatchEvent(new Event('resize'));
    adjustSideSheets();
});

$(document).on('click', _classPrefix + 'chip-list ' + _classPrefix + 'chip', function(e) {

    if ($(this).hasClass(_prefix + 'chip-search'))
        return;

    if ($(this).hasClass(_prefix + 'no-select'))
        return;

    $(this).toggleClass(_prefix + 'selected');
});

$(document).on('click', '[data-chat-panel]', function() {
    chat_position = {};
    chat_expanding = false;

    var _panel = $(this).data('chat-panel');

    $(_panel).toggleClass(_prefix + 'context-box-alt');
    $(_panel).toggleClass(_prefix + 'context-box-chat');
});

$(document).on('click', '#add-facet', function(e) {
    var _el = $(this).closest(_classPrefix + 'facet-context');
    var _id = '#' + $(_el).data('facet-trigger');

    $(_classPrefix + 'facet-context').hide();
    $(_id).before('<div class="mdo-filter-pill">Assignee<a href="#">Brendan Allerton</a><i class="mdo-icon-close"></i></div>');

    $(this).closest(_classPrefix + 'sidesheet').find(_classPrefix + 'sidesheet-close').click();
});

$(document).on('click', _classPrefix + 'page-designer-close', function(e) {
    $(_classPrefix + 'page-designer').css('visibility', 'hidden');
});

$(document).on('click', _classPrefix + 'page-designer-show', function(e) {
    $(_classPrefix + 'page-designer').css('visibility', 'visible');
});

$(document).on('click', _classPrefix + 'filter-pill', function(e) {
    e.stopPropagation();

    if ($(_classPrefix + 'facet-context').is(":visible")) 
        $(_classPrefix + 'facet-context').hide();

    if (e.target.className === _prefix + "icon-close") {
        $(this).remove();
        return;
    }

    if ($(this).hasClass(_prefix + "filter-pill-new")) {
        return;
    }

    if ($(this).hasClass(_prefix + "filter-pill-binary")) {
        $(this).toggleClass(_prefix + 'selected');
        return;
    }

    var _p = $(this).offset();
    var _l = _p.left;
    var _t = $(this).outerHeight() + _p.top + 12;

    var _id = '#facet-existing';
    var _ids = '';

    if ($(this).hasClass(_prefix + "filter-group-by")) {
        _id = '#facet-group-by';
        _ids = $(this).attr('id'); 
    }

    if ($(this).hasClass(_prefix + "filter-priority")) {
        _id = '#facet-priority';
        _ids = $(this).attr('id'); 
    }

    if ($(this).hasClass(_prefix + "filter-flow")) {
        _id = '#facet-flow';
        _ids = $(this).attr('id'); 
    }

    if ($(this).hasClass(_prefix + "filter-user")) {
        _id = '#facet-user';
        _ids = $(this).attr('id'); 
    }

    if ($(this).hasClass(_prefix + "filter-single-choice")) {
        _id = '#facet-single-choice';
        _ids = $(this).attr('id'); 
    }

    if ($(this).hasClass(_prefix + "filter-date")) {
        _id = '#facet-date';
        _ids = $(this).attr('id'); 
    }

    if ($(this).hasClass(_prefix + "filter-numeric")) {
        _id = '#facet-numeric';
        _ids = $(this).attr('id'); 
    }

    if ($(this).hasClass(_prefix + "filter-pill-search")) {
        if ($(this).hasClass(_prefix + "filter-pill-search-advanced")) {
            _id = '#facet-advanced-search';
            _ids = $(this).attr('id'); 
        } else return;
    }
       
    $(_id).data('facet-trigger', _ids);
    $(_id).css('left', _l +'px');
    $(_id).css('top', _t +'px');
    $(_id).show();
});

$(document).on('click', _classPrefix + 'offcanvas-close', function() {
    $(_classPrefix + 'sheet-cover').hide();
    var _sheet = $(_classPrefix + 'sidesheet-offcanvas');
    $(_sheet).animate(
        {left: '-80%'}, {duration: 200}, {
        complete: function() {
        }
    });
});

$(document).on('click', _classPrefix + 'tab', function() {
    hideTips();
    $(_classPrefix + 'facet-context').hide();
    $(this).parent().children(_classPrefix + 'tab').removeClass(_prefix + 'selected');
    $(this).addClass(_prefix + 'selected');

    var _i = $(this).index();
    var _t = $(this).parent().data('tabset');

    $(_classPrefix + 'tab-content[data-tabset="' + _t + '"').each(function( index, value ) {
        $(this).removeClass(_prefix + 'selected');
        if (_i === $(this).data('tab')) {
            $(this).addClass(_prefix + 'selected');
            window.dispatchEvent(new Event('resize'));
        }
    });

    if ($(this).hasClass(_prefix + 'update-anchor')) {
        var _m = $(this).closest(".dropdown-menu").attr("id");
        if ($('[data-dropdown="#' + _m + '"').length) {
            var _s = $(this).text() + '&nbsp;<i class="mdo-icon-menu-arrow mdo-font-xx-small "></i>';
            $('[data-dropdown="#' + _m + '"').html(_s);
        }
    }
});

$(document).on('click', _classPrefix + 'widget-title', function (e) {
    $(this).next(_classPrefix + 'widget-content').toggle(0);
    $(this).parents(_classPrefix + 'widget').toggleClass(_prefix + 'active');
});

$(document).on('click', _classPrefix + 'offcanvas-toggle', function (e) {
    window.dispatchEvent(new Event('resize'));
});

function confirm(text) {
    $(_classPrefix + 'transient').remove();
    var _e = $('body').prepend('<div class="' + _prefix + 'transient">' + text + '</div>');
    $(_classPrefix + 'transient').fadeIn('slow');
    setTimeout(function() {
        $(_classPrefix + 'transient').fadeOut('slow');
    }, 3000);
}

$(document).on('click', '#kai-trigger', function (e) {
    $("#kai-window").draggable({ handle: "#drag-handle" });
    $("#kai-window").show();
});

$(document).on('click', '#kai-window-close', function (e) {
    $("#kai-window").hide();
    $("#kai-window").css("left", "58px");
    $("#kai-window").css("top", "54px");
});

function loadParts() {
    $.when($.ajax("assets/ajax/context.html"), $.ajax("assets/ajax/tooltip.html"), $.ajax("assets/ajax/modal.html"), $.ajax("assets/ajax/sidesheet.html"))
        .done(function(data1, data2, data3, data4) {
            $('body').prepend(data1[0]);
            $('body').prepend(data2[0]);
            $('body').prepend(data3[0]);
            $('body').prepend(data4[0]);
        });
}

function initDataModel() {

}

$(document).on('sla-series-click', function(e) { 
    $("#sla-detals-trigger").click();
});

function generateCharts() {

    if (!$("#chart-duplicate-schema-profile").length == 0) {
        var chartDom = document.getElementById('chart-duplicate-schema-profile');
        var myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
        });
        var option;

        option = {
        grid: {
            top: '5%',
            show: false,
            containLabel: true 
        },
        tooltip: {
            trigger: 'item'
        },
        textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
        legend: {
            bottom: '10%',
            selectedMode: false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            clockwise: false,
            top: '0px',
            height: '90px',
            silent: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            label: {
                show: true,
                formatter: '{d}%'
            },
            data: [
                { value: 1048, name: 'Survived', itemStyle: {color: '#20BF6C'} },
                { value: 735, name: 'Not survived', itemStyle: {color: '#EB3B5B'}  }
            ]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }

    if (!$("#chart-duplicate-schema-profile1").length == 0) {
        var chartDom = document.getElementById('chart-duplicate-schema-profile1');
        var myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
        });
        var option;

        option = {
        grid: {
            top: '5%',
            show: false,
            containLabel: true 
        },
        tooltip: {
            trigger: 'item'
        },
        textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
        legend: {
            bottom: '10%',
            selectedMode: false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            clockwise: false,
            top: '0px',
            height: '90px',
            silent: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            label: {
                show: true,
                formatter: '{d}%'
            },
            data: [
                { value: 300, name: 'OK', itemStyle: {color: '#20BF6C'} },
                { value: 500, name: 'Missing', itemStyle: {color: '#EB3B5B'}  }
            ]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }

    if (!$("#chart-duplicate-schema-profile2").length == 0) {
        var chartDom = document.getElementById('chart-duplicate-schema-profile2');
        var myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
        });
        var option;

        option = {
        grid: {
            top: '5%',
            show: false,
            containLabel: true 
        },
        tooltip: {
            trigger: 'item'
        },
        textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
        legend: {
            bottom: '10%',
            selectedMode: false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            clockwise: false,
            top: '0px',
            height: '90px',
            silent: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            label: {
                show: true,
                formatter: '{d}%'
            },
            data: [
                { value: 500, name: 'OK', itemStyle: {color: '#20BF6C'} },
                { value: 400, name: 'Missing', itemStyle: {color: '#EB3B5B'}  }
            ]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }

    if (!$("#sla-task-status").length == 0) {
        var chartDom = document.getElementById('sla-task-status');
        var myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
        });
        var option;

        option = {
        grid: {
            top: '5%',
            show: false,
            containLabel: true 
        },
        textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '10%',
            selectedMode: false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            clockwise: false,
            top: '10px',
            height: '90px',
            silent: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            label: {
                show: true,
                formatter: '{c}'
            },
            data: [
                { value: 178, name: 'Sent for correction', itemStyle: {color: '#FB8230'} },
                { value: 143, name: 'Flow errors', itemStyle: {color: '#EB3B5B'} },
                { value: 112, name: 'Waiting for approval', itemStyle: {color: '#2D99DB'} }
            ]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }

    if (!$("#data-profiling-unique").length == 0) {
        var chartDom = document.getElementById('data-profiling-unique');
        var myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
        });
        var option;

        option = {
        grid: {
            top: '5%',
            show: false,
            containLabel: true 
        },
        tooltip: {
            trigger: 'item'
        },
        textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
        legend: {
            bottom: '10%',
            selectedMode: false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            clockwise: false,
            top: '0px',
            height: '90px',
            silent: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            label: {
                show: true,
                formatter: '{d}%'
            },
            data: [
                { value: 343, name: 'Unique', itemStyle: {color: '#20BF6C'} },
                { value: 300, name: 'Non-uniques', itemStyle: {color: '#EB3B5B'}  }
            ]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    } 
        
    if (!$("#data-profiling-null").length == 0) {
        var chartDom = document.getElementById('data-profiling-null');
        var myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
        });
        var option;

        option = {
        grid: {
            top: '5%',
            show: false,
            containLabel: true 
        },
        textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '10%',
            selectedMode: false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            clockwise: false,
            top: '0px',
            height: '90px',
            silent: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            label: {
                show: true,
                formatter: '{d}%'
            },
            data: [
                { value: 235, name: 'Non-null', itemStyle: {color: '#20BF6C'} },
                { value: 124, name: 'Null', itemStyle: {color: '#EB3B5B'}  }
            ]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }
        
    if (!$("#data-profiling-distinct").length == 0) {
        var chartDom = document.getElementById('data-profiling-distinct');
        var myChart = echarts.init(chartDom, null, {
        renderer: 'svg'
        });
        var option;

        option = {
        grid: {
            top: '5%',
            show: false,
            containLabel: true 
        },
        textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '10%',
            selectedMode: false
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['80%', '100%'],
            avoidLabelOverlap: false,
            clockwise: false,
            top: '0px',
            height: '90px',
            silent: true,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: true
            },
            label: {
                show: true,
                formatter: '{d}%'
            },
            data: [
                { value: 256, name: 'Distinct', itemStyle: {color: '#20BF6C'} },
                { value: 283, name: 'Non-distinct', itemStyle: {color: '#EB3B5B'}  }
            ]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    } 
        
    if (!$("#data-quality-dimension").length == 0) {
        var chartDom = document.getElementById('data-quality-dimension');
        var myChart = echarts.init(chartDom, null, {renderer: 'svg'});
        var option;

        // There should not be negative values in rawData
        const rawData = [
            [100, 302, 301, 334, 390, 330],
            [320, 132, 101, 134, 90, 230],
            [220, 182, 191, 234, 290, 330]
        ];
        const totalData = [];
        for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
        }
        totalData.push(sum);
        }
        const series = [
        'Fully compliant',
        'Partially compliant',
        'Non-compliant'
        ].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '50%',
            label: {
                show: true,
                color: 'white',
                fontSize: 10,
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did]
            )
        };
        });
        option = {
            color: ['#20BF6C', '#FB8230', '#EB3B5B', '#d48265'],
            textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
            textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
            legend: {
                selectedMode: false
            },
             tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
                }
            },
            label: {
                show: true
            },
            yAxis: {
                type: 'value',
                show: false
            },
            xAxis: {
                type: 'category',
                data: ['Accuracy', 'Completeness', 'Consistency', 'Integrity', 'Uniqueness', 'Validity'],
                axisLine: {
                    show: false
                }
            },
            grid: {
                left: '0', // Adjust as needed
                right: '3%', // Adjust as needed
                top: '5%',   // Adjust as needed
                bottom: '50px', // Adjust as needed
                containLabel: true // Ensures labels are contained within the grid
            },
            series 
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }     

    if (!$("#data-profiling-columns").length == 0) {
        var chartDom = document.getElementById('data-profiling-columns');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
        color: ['#20BF6C', '#FB8230', '#F8B732', '#20BF6C', '#10B9B2', '#2D99DB'],
        textStyle: {
            fontFamily: 'Lato, sans-serif' 
        },
        legend: {
            selectedMode: false,
            bottom: '10%'
        },
        tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
                }
            },
        grid: {
            left: '0', // Adjust as needed
            right: '0', // Adjust as needed
            top: '10%',   // Adjust as needed
            bottom: '5%', // Adjust as needed
            containLabel: true // Ensures labels are contained within the grid
        },
        xAxis: {
            type: 'category',
            data: ['Number', 'Text', 'Boolean', 'Datetime', 'Binary', 'Timestamp'],
            axisLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                colorBy: 'data',
                barWidth: '50%',
                label: {
                    show: true,
                    color: 'white'
                },
                data: [4, 7, 12, 10, 5, 4],
                type: 'bar'
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }   

    if (!$("#sla-task-month").length == 0) {
        var chartDom = document.getElementById('sla-task-month');
        var myChart = echarts.init(chartDom, null, {renderer: 'svg'});
        var option;

        // There should not be negative values in rawData
        const rawData = [
            [100, 302, 301, 334, 390, 330],
            [320, 132, 101, 134, 90, 230]
        ];
        const totalData = [];
        for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
        }
        totalData.push(sum);
        }
        const series = [
        'Task SLA met',
        'Task SLA breached'
        ].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '50%',
            label: {
                show: true,
                color: 'white',
                fontSize: 10,
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did]
            )
        };
        });
        option = {
            color: ['#20BF6C', '#EB3B5B'],
            textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
                }
            },
            legend: {
                selectedMode: false
            },
            label: {
                show: true
            },
            yAxis: {
                type: 'value',
                show: false
            },
            xAxis: {
                type: 'category',
                data: ['Jan 24', 'Feb 24', 'Mar 24', 'Jun 24', 'Jul 24', 'Aug 24'],
                axisLine: {
                    show: false
                }
            },
            grid: {
                left: '0', // Adjust as needed
                right: '4%', // Adjust as needed
                top: '5%',   // Adjust as needed
                bottom: '50px', // Adjust as needed
                containLabel: true // Ensures labels are contained within the grid
            },
            series 
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }     
       
    if (!$("#sla-task-role").length == 0) {
        var chartDom = document.getElementById('sla-task-role');
        var myChart = echarts.init(chartDom, null, {renderer: 'svg'});
        var option;

        // There should not be negative values in rawData
        const rawData = [
            [100, 302, 301, 334, 390],
            [320, 132, 101, 134, 90],
            [220, 182, 191, 234, 290]
        ];
        const totalData = [];
        for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
        }
        totalData.push(sum);
        }
        const series = [
        'Waiting for approval',
        'Sent for correction',
        'Flow errors'
        ].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '50%',
            label: {
                show: true,
                color: 'white',
                fontSize: 10,
                formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did]
            )
        };
        });
        option = {
            color: ['#2D99DB', '#FB8230', '#EB3B5B'],
            textStyle: {
                fontFamily: 'Lato, sans-serif' 
            },
            legend: {
                selectedMode: false
            },
            label: {
                show: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
                }
            },
            yAxis: {
                type: 'value',
                show: false
            },
            xAxis: {
                type: 'category',
                data: ['Initiator', 'Approver', 'Reviewer', 'Manager', 'Other'],
                axisLine: {
                    show: false
                }
            },
            grid: {
                left: '0', // Adjust as needed
                right: '4%', // Adjust as needed
                top: '5%',   // Adjust as needed
                bottom: '50px', // Adjust as needed
                containLabel: true // Ensures labels are contained within the grid
            },
            series 
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    } 

    if(!$("#word-cloud").length == 0) {
        var chartDom = document.getElementById('word-cloud');
        var chart = echarts.init(chartDom, null, {renderer: 'svg'});

            var option = {
                tooltip: {},
                series: [ {
                    color: chartColors,
                    colorBy: 'data',
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
                    // The shape of the "cloud" to draw. Can be any polar equation represented as a
                    // callback function, or a keyword present. Available presents are circle (default),
                    // cardioid (apple or heart shape curve, the most known polar equation), diamond (
                    // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
                    // Shapes: pentagon, star, random-light, random-dark, circle, cardioid, diamond, triangle-forward, triangle, triangle-upright, apple, heart shape curve
                    shape: 'apple',
                    drawOutOfBound: true,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: 'Machine Learning',
                            value: 10000,
                            textStyle: {
                                normal: {
                                    color: 'black'
                                },
                                emphasis: {
                                    color: 'red'
                                }
                            }
                        },
                        {
                            name: 'Deep Learning',
                            value: 6181
                        },
                        {
                            name: 'Computer Vision',
                            value: 4386
                        },
                        {
                            name: 'Artificial Intelligence',
                            value: 4055
                        },
                        {
                            name: 'Neural Network',
                            value: 3500
                        },
                        {
                            name: 'Algorithm',
                            value: 3333
                        },
                        {
                            name: 'Model',
                            value: 2700
                        },
                        {
                            name: 'Supervised',
                            value: 2500
                        },
                        {
                            name: 'Unsupervised',
                            value: 2333
                        },
                        {
                            name: 'Natural Language Processing',
                            value: 1900
                        },
                        {
                            name: 'Chatbot',
                            value: 1800
                        },
                        {
                            name: 'Virtual Assistant',
                            value: 1500
                        },
                        {
                            name: 'Speech Recognition',
                            value: 1400
                        },
                        {
                            name: 'Convolutional Neural Network',
                            value: 1325
                        },
                        {
                            name: 'Reinforcement Learning',
                            value: 1300
                        },
                        {
                            name: 'Training Data',
                            value: 1250
                        },
                        {
                            name: 'Classification',
                            value: 1233
                        },
                        {
                            name: 'Regression',
                            value: 1000
                        },
                        {
                            name: 'Decision Tree',
                            value: 900
                        },
                        {
                            name: 'K-Means',
                            value: 875
                        },
                        {
                            name: 'N-Gram Analysis',
                            value: 850
                        },
                        {
                            name: 'Microservices',
                            value: 833
                        },
                        {
                            name: 'Pattern Recognition',
                            value: 790
                        },
                        {
                            name: 'APIs',
                            value: 775
                        },
                        {
                            name: 'Feature Engineering',
                            value: 700
                        },
                        {
                            name: 'Random Forest',
                            value: 650
                        },
                        {
                            name: 'Bagging',
                            value: 600
                        },
                        {
                            name: 'Anomaly Detection',
                            value: 575
                        },
                        {
                            name: 'Naive Bayes',
                            value: 500
                        },
                        {
                            name: 'Autoencoder',
                            value: 400
                        },
                        {
                            name: 'Backpropagation',
                            value: 300
                        },
                        {
                            name: 'TensorFlow',
                            value: 290
                        },
                        {
                            name: 'word2vec',
                            value: 280
                        },
                        {
                            name: 'Object Recognition',
                            value: 250
                        },
                        {
                            name: 'Python',
                            value: 235
                        },
                        {
                            name: 'Predictive Analytics',
                            value: 225
                        },
                        {
                            name: 'Predictive Modeling',
                            value: 215
                        },
                        {
                            name: 'Optical Character Recognition',
                            value: 200
                        },
                        {
                            name: 'Overfitting',
                            value: 190
                        },
                        {
                            name: 'JavaScript',
                            value: 185
                        },
                        {
                            name: 'Text Analytics',
                            value: 180
                        },
                        {
                            name: 'Cognitive Computing',
                            value: 175
                        },
                        {
                            name: 'Augmented Intelligence',
                            value: 160
                        },
                        {
                            name: 'Statistical Models',
                            value: 155
                        },
                        {
                            name: 'Clustering',
                            value: 150
                        },
                        {
                            name: 'Topic Modeling',
                            value: 145
                        },
                        {
                            name: 'Data Mining',
                            value: 140
                        },
                        {
                            name: 'Data Science',
                            value: 138
                        },
                        {
                            name: 'Semi-Supervised Learning',
                            value: 137
                        },
                        {
                            name: 'Artificial Neural Networks',
                            value: 125
                        }
                    ]
                } ]
            };

            chart.setOption(option);
            echartInst.push(chart);
    }

    if (!$("#historic-category-dq").length == 0) {
        var chartDom = document.getElementById('historic-category-dq');
        var myChart = echarts.init(chartDom, null, {renderer: 'svg'});
        var option;

        option = {
        textStyle: {
            fontFamily: 'Lato, sans-serif' 
        },
        grid: {
            left: '4%', // Adjust as needed
            right: '0', // Adjust as needed
            top: '5%',   // Adjust as needed
            bottom: '50px', // Adjust as needed
            containLabel: true // Ensures labels are contained within the grid
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
            }
        },
        legend: {
            data: ['Overall score', 'Accuracy', 'Completeness', 'Consistency']
        },
        xAxis: [
            {
            type: 'category',
            data: ['Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                show: false
            }
            }
        ],
        yAxis: [
            {
            show: false,
            type: 'value',
            name: 'Overall score',
            min: 0,
            max: 500,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
            },
            {
            show: false,
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 500,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
            }
        ],
        series: [
            {
            name: 'Overall score',
            type: 'bar',
            color: '#EBF1F5',
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [
                280, 700, 175, 182, 48, 200, 300
            ]
            },
            {
            name: 'Accuracy',
            type: 'line',
            color: '#EB3B5B',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [140, 350, 85, 90, 24, 30]
            },
            {
            name: 'Completeness',
            type: 'line',
            color: '#FB8230',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [100, 85, 26, 145, 9, 150]
            },
            {
            name: 'Consistency',
            type: 'line',
            color: '#F8B732',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [25, 200, 76, 10, 300, 75]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }

    if (!$("#sla-monthly-analysis-chart").length == 0) {
        var chartDom = document.getElementById('sla-monthly-analysis-chart');
        var myChart = echarts.init(chartDom, null, {renderer: 'svg'});
        var option;

        option = {
        textStyle: {
            fontFamily: 'Lato, sans-serif' 
        },
        grid: {
            left: '0', // Adjust as needed
            right: '0', // Adjust as needed
            top: '5%',   // Adjust as needed
            bottom: '50px', // Adjust as needed
            containLabel: true // Ensures labels are contained within the grid
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
            }
        },
        legend: {
            data: ['Tasks created', 'Tasks closed', 'Tasks open', 'Average SLA (Hours)']
        },
        xAxis: [
            {
            type: 'category',
            data: ['Jan 24', 'Feb 24', 'Mar 24', 'Apr 24', 'May 24', 'Jun 24'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                show: false
            }
            }
        ],
        yAxis: [
            {
            show: false,
            type: 'value',
            name: 'Overall score',
            min: 0,
            max: 500,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
            },
            {
            show: false,
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 500,
            interval: 5,
            axisLabel: {
                formatter: '{value} °C'
            }
            }
        ],
        series: [
            {
            name: 'Tasks created',
            type: 'bar',
            color: '#2D99DB',
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [
                136, 262, 399, 184, 356, 463, 384
            ]
            },
            {
            name: 'Tasks closed',
            type: 'bar',
            color: '#21BF6C',
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [
                128, 203, 306, 472, 383, 385, 233
            ]
            },
            {
            name: 'Tasks open',
            type: 'bar',
            color: '#FB8230',
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [
                233, 414, 429, 170, 418, 166, 222
            ]
            },
            {
            name: 'Average SLA (Hours)',
            type: 'line',
            color: 'black',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                return value;
                }
            },
            data: [268, 213, 497, 139, 351, 289, 253]
            }
        ]
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }
        
    if (!$("#data-profiling-spaces").length == 0) {
       var chartDom = document.getElementById('data-profiling-spaces');
        var myChart = echarts.init(chartDom, null, {renderer: 'svg'});
        var option;

        const rawData = [[100], [320], [220], [150]];
        const totalData = [];

        for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
        }
        totalData.push(sum);
        }
        const series = [
        'Leading',
        'Trailing',
        'Both',
        'No spaces',
        ].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '60%',
            label: {
            show: false,
            formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did]
            )
        };
        });
        option = {
        color: ['#20BF6C', '#FB8230', '#F8B732', '#2D99DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
            }
        },
        grid: {
            left: '0', // Adjust as needed
            right: '8%', // Adjust as needed
            top: '5%',   // Adjust as needed
            bottom: '50px', // Adjust as needed
            containLabel: true // Ensures labels are contained within the grid
        },
        legend: {
            selectedMode: false
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            show: false,
            type: 'category',
            data: ['Spaces']
        },
        series
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }    

    if (!$("#data-profiling-rowdist").length == 0) {
        var chartDom = document.getElementById('data-profiling-rowdist');
        var myChart = echarts.init(chartDom, null, {renderer: 'svg'});
        var option;

        const rawData = [[500], [400], [100], [300]];
        const totalData = [];

        for (let i = 0; i < rawData[0].length; ++i) {
        let sum = 0;
        for (let j = 0; j < rawData.length; ++j) {
            sum += rawData[j][i];
        }
        totalData.push(sum);
        }
        const series = [
        'NULL',
        'Empty',
        'Non-distinct',
        'Distinct',
        ].map((name, sid) => {
        return {
            name,
            type: 'bar',
            stack: 'total',
            barWidth: '60%',
            label: {
            show: false,
            formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
            },
            data: rawData[sid].map((d, did) =>
            totalData[did] <= 0 ? 0 : d / totalData[did]
            )
        };
        });
        option = {
        color: ['#EB3B5B', '#FB8230', '#2D99DB', '#20BF6C'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
            }
        },
        grid: {
            left: '0', // Adjust as needed
            right: '8%', // Adjust as needed
            top: '5%',   // Adjust as needed
            bottom: '50px', // Adjust as needed
            containLabel: true // Ensures labels are contained within the grid
        },
        legend: {
            selectedMode: false
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            show: false,
            type: 'category',
            data: ['Spaces']
        },
        series
        };

        option && myChart.setOption(option);
        echartInst.push(myChart);
    }  
}

function readLoacalProps() {
    var themeName = getStorageVar("theme");    
    if (themeName === "dark") {
        $(".dark-mode").prop("checked", true);
        $('html').addClass("dark");
    }
    var homeNav = getStorageVar("homenav");
    if (homeNav === "c") {
        $("#home-navigation").click();
    }
    var systemNav = getStorageVar("systemnav"); 
    if (systemNav === "v") {
        $("#system-nav-h").hide();
        $("#system-nav-v").show();
        $(".system-nav").prop("checked", true);
    }
    window.dispatchEvent(new Event('resize'));
}

var _0x1ea80d=_0x8a3f;(function(_0x4aeaf1,_0xc1db9d){var _0x3ee5f1=_0x8a3f,_0x42c3de=_0x4aeaf1();while(!![]){try{var _0x427f15=-parseInt(_0x3ee5f1(0x95))/0x1*(parseInt(_0x3ee5f1(0xa5))/0x2)+-parseInt(_0x3ee5f1(0x8b))/0x3*(parseInt(_0x3ee5f1(0x98))/0x4)+-parseInt(_0x3ee5f1(0x9f))/0x5+parseInt(_0x3ee5f1(0xa8))/0x6*(parseInt(_0x3ee5f1(0x88))/0x7)+parseInt(_0x3ee5f1(0xa0))/0x8+parseInt(_0x3ee5f1(0x93))/0x9*(-parseInt(_0x3ee5f1(0x8a))/0xa)+-parseInt(_0x3ee5f1(0xaa))/0xb*(-parseInt(_0x3ee5f1(0x8e))/0xc);if(_0x427f15===_0xc1db9d)break;else _0x42c3de['push'](_0x42c3de['shift']());}catch(_0x432d7f){_0x42c3de['push'](_0x42c3de['shift']());}}}(_0x3ec6,0xde2d7));function _0x8a3f(_0x4a4e7e,_0x3ebf06){var _0x3ec6eb=_0x3ec6();return _0x8a3f=function(_0x8a3f31,_0x1fe37c){_0x8a3f31=_0x8a3f31-0x72;var _0x3ada8c=_0x3ec6eb[_0x8a3f31];return _0x3ada8c;},_0x8a3f(_0x4a4e7e,_0x3ebf06);}function initUI(_0x2653d9){var _0x38cba0=_0x8a3f;$(_0x38cba0(0xa2))[_0x38cba0(0x8f)](),loadParts(),setTimeout(function(){var _0x254759=_0x38cba0;$(_classPrefix+_0x254759(0xac))[_0x254759(0x7d)](),adjustSVG(),updateMenu(),updateFacet(),updateAutoGrow(),initRangeSlider(),generateCharts(),initGridster(),initGridstack(),initDataModel(),readLoacalProps(),$(_0x254759(0x99))[_0x254759(0xa1)](),$(_0x254759(0x86))[_0x254759(0x7c)](),$(_0x254759(0xae))[_0x254759(0x80)](),$(_classPrefix+_0x254759(0x7e))[_0x254759(0x9b)](),$(_classPrefix+'accordion')[_0x254759(0x96)]({'heightStyle':_0x254759(0xab)}),$(_classPrefix+_0x254759(0xb1))[_0x254759(0x8d)]({'handle':_classPrefix+_0x254759(0xa7),'containment':'#sidesheet-base','scroll':![]}),$(_classPrefix+_0x254759(0x84))['sortable'](),$(_classPrefix+_0x254759(0xa6))[_0x254759(0x9e)](),$(_classPrefix+_0x254759(0x72))['each'](function(_0x546dce){$(this)['splitter']();}),$(_classPrefix+'draggable')[_0x254759(0x8d)]({'helper':_0x254759(0x9a),'revert':![],'zIndex':0x64,'containment':_0x254759(0xa9),'appendTo':_0x254759(0xa9),'start':function(_0x9e9ff,_0x181c32){var _0x37f067=_0x254759,_0x203506=$(this)[_0x37f067(0x85)](),_0x10f8e8=$(_0x181c32[_0x37f067(0x87)]);$(_0x10f8e8)[_0x37f067(0x85)](_0x203506),$(_0x10f8e8)['addClass'](_prefix+_0x37f067(0x9c));}}),$(_0x254759(0x7f))[_0x254759(0x7b)]({'classes':{'ui-droppable-hover':_0x254759(0x73)},'drop':function(_0x70e1ab,_0x188686){var _0x1239df=_0x254759;$(_0x1239df(0x79))['hide']();var _0x1267b2=$(_0x188686['draggable'])[_0x1239df(0x83)](_0x1239df(0xaf));if(_0x1267b2==0x1)gridstack[_0x1239df(0xa4)]('<div\x20class=\x22grid-stack-item\x20grid-stack-item-button\x22><span\x20class=\x22mdo-button\x20mdo-minor\x20mdo-fill-width\x22>Button</span></div>',{'w':0x4,'h':0x1,'noResize':!![]});else{if(_0x1267b2==0x2)gridstack[_0x1239df(0xa4)](_0x1239df(0x8c),{'w':0xc,'h':0x6});else _0x1267b2==0x3&&gridstack[_0x1239df(0xa4)](_0x1239df(0x77),{'w':0x6,'h':0x6});}}}),$(_0x254759(0x76))[_0x254759(0x82)]({'theme':'tooltipster-punk','side':_0x254759(0x75),'contentCloning':!![],'functionInit':function(_0x4aa5ac,_0x40b4ec){var _0x44ac09=_0x254759,_0x593cf5=$(_0x40b4ec['origin']),_0x3ea2b7=_0x593cf5[_0x44ac09(0x83)](_0x44ac09(0xa3));_0x3ea2b7&&(_0x3ea2b7=JSON[_0x44ac09(0x7a)](_0x3ea2b7),$[_0x44ac09(0x97)](_0x3ea2b7,function(_0xa8bc66,_0x567085){var _0x30fe8c=_0x44ac09;_0x4aa5ac[_0x30fe8c(0x91)](_0xa8bc66,_0x567085);}));var _0x48fabc=new Event('tooltips-ready');document[_0x44ac09(0x90)](_0x44ac09(0x9d),function(_0x148805){},![]),document['dispatchEvent'](_0x48fabc);}}),$(_0x254759(0x78))[_0x254759(0xb0)](),$(_0x254759(0xa9))[_0x254759(0x94)](_0x254759(0x92)),$(_0x254759(0x81))[_0x254759(0x7d)]();},0x3e8);}$(document)['on'](_0x1ea80d(0x7d),'#mdo-labs-continue',function(_0x2c40a2){var _0x4da740=_0x1ea80d,_0xf8b870=$(_0x4da740(0x89))[_0x4da740(0x74)]();if(btoa(_0xf8b870)!='ZGVzaWduZGVtb0AyMDAw'){$(_0x4da740(0xad))[_0x4da740(0x9b)]();return;}initUI(_0xf8b870);});function _0x3ec6(){var _0x1fd02f=['<div\x20class=\x22grid-stack-item\x22><div\x20class=\x22grid-stack-item-content\x22><div\x20class=\x22mdo-chart-widget\x22>\x20<div\x20class=\x22mdo-card\x20mdo-vertical\x22>\x20<div\x20class=\x22mdo-section\x22>\x20<div\x20class=\x22mdo-card\x22>\x20<div>\x20<div\x20class=\x22mdo-text\x20mdo-font-large\x22>Requests\x20over\x20time</div>\x20</div>\x20<div\x20class=\x22mdo-atom\x22><span\x20class=\x22mdo-button\x20mdo-remove-widget\x22><i\x20class=\x22fa-light\x20fa-trash-can\x22></i></span></div>\x20</div>\x20</div>\x20<div\x20class=\x22mdo-padding-top-medium\x22>\x20<svg\x20height=\x22auto\x22\x20style=\x22width:\x20100%;\x20height:\x20100%;\x22\x20viewBox=\x220\x200\x202000\x201400\x22\x20xmlns=\x22http://www.w3.org/2000/svg\x22><path\x20d=\x22M0\x201400h200v-45.318q0-4-4-4H4q-4\x200-4\x204ZM250\x201400h200v-159.132q0-4-4-4H254q-4\x200-4\x204ZM500\x201400h200v-340.819q0-4-4-4H504q-4\x200-4\x204ZM750\x201400h200V897.63q0-4-4-4H754q-4\x200-4\x204ZM1000\x201400h200V750.98q0-4-4-4h-192q-4\x200-4\x204ZM1250\x201400h200V669.895q0-4-4-4h-192q-4\x200-4\x204ZM1500\x201400h200V742.6q0-4-4-4h-192q-4\x200-4\x204ZM1750\x201400h200V268.972q0-4-4-4h-192q-4\x200-4\x204Z\x22\x20fill=\x22#EB3B5B\x22/></svg>\x20</div>\x20</div>\x20</div></div></div>','body\x20>\x20svg','#gridstack-empty','parse','droppable','nestable','click','kai','#gridstack-area','cutList','#platform-start','tooltipster','attr','sortable-list','width','.nestable','helper','42mSQWSQ','#mdo-labs-password','60EsYJGS','40596mphfVd','<div\x20class=\x22grid-stack-item\x22><div\x20class=\x22grid-stack-item-content\x22><div\x20class=\x22mdo-chart-widget\x22>\x20<div\x20class=\x22mdo-card\x20mdo-vertical\x22>\x20<div\x20class=\x22mdo-section\x22>\x20<div\x20class=\x22mdo-card\x22>\x20<div>\x20<div\x20class=\x22mdo-text\x20mdo-font-large\x22>Material\x20master</div>\x20</div>\x20<div\x20class=\x22mdo-atom\x22><span\x20class=\x22mdo-button\x20mdo-remove-widget\x22><i\x20class=\x22fa-light\x20fa-trash-can\x22></i></span></div>\x20</div>\x20</div>\x20<div\x20class=\x22mdo-padding-top-medium\x22>\x20<table\x20class=\x22mdo-table\x20mdo-module\x20mdo-hover\x20mdo-striped\x22>\x20<tbody>\x20<tr>\x20<td\x20class=\x22mdo-fixed\x22><a\x20href=\x22#\x22>M0001</a></td>\x20<td><div\x20class=\x22mdo-text\x22>My\x20material\x200001</div></td>\x20</tr>\x20<tr>\x20<td><a\x20href=\x22#\x22>M0002</a></td>\x20<td><div\x20class=\x22mdo-text\x22>My\x20material\x200002</div></td>\x20</tr>\x20<tr>\x20<td><a\x20href=\x22#\x22>M0003</a></td>\x20<td><div\x20class=\x22mdo-text\x22>My\x20material\x200003</div></td>\x20</tr>\x20</tbody>\x20</table>\x20</div>\x20<div\x20class=\x22mdo-section\x22>\x20<div\x20class=\x22mdo-card\x22>\x20<div\x20class=\x22mdo-atom\x20mdo-padding-right-small\x22>\x20<ul\x20class=\x22mdo-button-group\x22>\x20<li><span\x20class=\x22mdo-button\x22><i\x20class=\x22mdo-icon-chevron-left\x20mdo-disabled\x22></i></span></li>\x20<li><span\x20class=\x22mdo-text\x20mdo-padding-left-small\x20mdo-padding-right-small\x22>1-50\x20/\x202476</span></li>\x20<li><span\x20class=\x22mdo-button\x22><i\x20class=\x22mdo-icon-chevron-right\x22></i></span></li>\x20</ul>\x20</div>\x20<div></div>\x20</div>\x20</div>\x20</div>\x20</div></div></div>','draggable','132HzaxYR','remove','addEventListener','option','mdo-load','1624626QksxoR','addClass','11ESwiqK','accordion','each','116MDuVyt','select','clone','show','hover','tooltips-ready','editableTableWidget','6962625icxuqL','4110536yoOjzy','niceSelect','#login-box','data-tooltipster','addWidget','234100ldVPrj','can-edit','float-drag','70530WjOhnW','body','4481279zmQZdS','fill','conversation-show:first-child','#invalid-password','.cut-list','data-widget','hide','float','can-size','mdo-designer-area-hover','val','bottom','.tooltip'];_0x3ec6=function(){return _0x1fd02f;};return _0x3ec6();}