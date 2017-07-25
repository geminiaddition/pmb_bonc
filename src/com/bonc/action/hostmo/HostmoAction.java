package com.bonc.action.hostmo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.bonc.dao.hostmo.HostmoDao;
import com.bonc.model.hostmo.HostmoBean;
import com.bonc.utils.JsonUtils;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;

@Component
public class HostmoAction extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4562421404252015198L;

	@Autowired
	public HostmoDao hdao;
	public List<HostmoBean> gethostmo;

	public String hostmo() {
		return "index";
	}

	public String gethostmo() {
		gethostmo = hdao.gethostmo();
		System.err.println(gethostmo);
		JsonUtils.tolistjson(gethostmo);
		return Action.NONE;
	}
}
